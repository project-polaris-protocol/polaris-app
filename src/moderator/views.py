from django.shortcuts import render
from django.template.loader import *
from django.http import HttpResponse
from django.http import JsonResponse
import time
import json
import os
from datetime import datetime

## Json読み込み用
def read_meta_json(file_path):
    with open(file_path, 'r', encoding="utf-8") as file:
        data = json.load(file)
    return data

def read_layer_jsons(folder_path):
    json_files = []
    for file_name in os.listdir(folder_path):
        if file_name.endswith('.json'):
            file_path = os.path.join(folder_path, file_name)
            with open(file_path, 'r', encoding="utf-8") as file:
                data = json.load(file)
                json_files.append(data)
    return json_files

## 進行管理変数の定義
current_layer = 0
current_section = 0
try:
    meta = read_meta_json('./src/data/meta.json')
except: 
    meta = None
try:
    layer_data = read_layer_jsons('./src/data/layer')
    layers = ['']*len(layer_data)
    for layer in layer_data:
        for sec in layer['body']:
            if not len(sec) == len(meta['col']):
                layer = None
                break
        if not layer:
            break
        if layer['aud'] == meta['aud'] and layer['projectCode'] == meta['projectCode']:
            layers[layer['layerIndex']] = layer
    if '' in layers:
        layers = None
except:
    layers = None
    layer_data = None

## 時刻同期用変数
time_starttime = 0
time_status = False
## チャット保存用変数
chat = []

def read_json_file(file_path):
    with open(file_path, 'r', encoding="utf-8") as file:
        data = json.load(file)
    return data

def client(request):
    global current_layer
    global current_section
    global time_status
    global chat
    global layers
    global meta
    if layers == None or meta == None:
        return render(request, 'index.html',{"metadata": None})
    if len(layers) > current_layer:
        layer = layers[current_layer]
    else:
        layer = None
    if request.method == "POST":
        match request.POST["type"]:
            ### SmartReloader
            case 'load_info':
                path = 'moderator/parts/info.html'
                param = {
                    'layer':layer
                }
                data = render_to_string(path,param)
                if len(layers) > current_layer + 1:
                    next_title = layers[current_layer + 1]['layerName']
                    next_number = layers[current_layer + 1]['layerNumber']
                else:
                    next_title = None
                    next_number = None
                if current_layer > 0:
                    last_title = layers[current_layer - 1]['layerName']
                    last_number = layers[current_layer - 1]['layerNumber']
                else:
                    last_title = None
                    last_number = None
                return JsonResponse([data, next_number,next_title,last_number,last_title], safe=False)
            ### SmartReloader
            case 'load_card':
                if "node_type" in request.POST:
                    node_type = request.POST["node_type"]
                else:
                    node_type = 'Unknown'
                ### 指示書データの読み込みここでやってる
                path = 'moderator/parts/card.html'
                ### ホスト（C）なら全プログラム
                if node_type == 'controller':
                    cards = layers[current_layer]['body']
                    cols = meta['col']
                ### ワーカー(W)なら対象のみのプログラム
                else:
                    if 'node_request' in request.POST:
                        node_request = [int(value) for value in eval(request.POST["node_request"])] # =>[]
                        cards = [ [ sec[i] for i in node_request ] for sec in layers[current_layer]['body'] ]
                        cols = [ meta['col'][i] for i in node_request ]
                    else:
                        cards = None
                        cols = None
                param = {
                    'cards':cards,
                    'cols': cols
                }
                data = render_to_string(path,param)
                return HttpResponse(data)
            ### Controller
            case 'check_program':
                return HttpResponse(str(current_layer))
            ### AOC-RS(Auto Operation Controll Realtime Sync)
            case 'remote_sync_client':
                return HttpResponse(current_section)
            ### PTC(Polaris Time Controll)
            case 'check_ope_state':
                if time_status:
                    return HttpResponse("started")
                else:
                    return HttpResponse("not")
            ### Chat
            case 'load_chat':
                path = 'moderator/parts/chat.html'
                param = {
                    'chat':chat,
                    'ip': request.META.get('REMOTE_ADDR')
                }
                data = render_to_string(path,param)
                return HttpResponse(data)
            
            case 'send_chat':
                ip = request.META.get('REMOTE_ADDR')
                content = request.POST['content']
                chat.append({
                    "ip":ip,
                    "content": content,
                    "sendtime": datetime.now().time()
                })
                return HttpResponse("OK!")
        pass
    else:
        if 'req[]' in request.GET:
            return render(request,'moderator/client_index.html',{'node_request':request.GET.getlist('req[]', None)})
        else:
            return render(request, 'index.html',{"metadata": meta})


def admin(request):
    global current_layer
    global current_section
    global time_starttime
    global time_status
    global layer
    global meta
    if layers == None or meta == None:
        return render(request, 'index.html',{"metadata": None})
    if request.method == "POST":
        match request.POST["type"]:
            ### SmartReloader
            case 'load_timeline':
                path = 'moderator/parts/timeline.html'
                param = {
                    'timelines': layers
                }
                data = render_to_string(path,param)
                return HttpResponse(data)
            ### AdminController
            case 'move_next_program':
                if len(layers)-1<=current_layer:
                    return HttpResponse("OK!")
                else:
                    current_layer += 1
                return HttpResponse("OK!")
            ### AdminController
            case 'move_last_program':
                if current_layer == 0:
                    return HttpResponse("OK!")
                else:
                    current_layer -= 1
                return HttpResponse("OK!")
            ### AdminController
            case 'start':
                current_section = 0
                time_starttime = time.time()
                time_status = True
                return HttpResponse("OK!")
            ### AdminController
            case 'end':
                time_status = False
                current_section = 0
                return HttpResponse("OK!")
            ### AOC-RS(Auto Operation Controll Realtime Sync)
            case 'remote_sync':
                current_section = request.POST['number']
                return HttpResponse("OK!")
        pass
    else:
        time_status = False
        current_section = 0
        return render(request,'moderator/admin_index.html')
    
def manage(request):
    global layers
    global meta
    if layers == None or meta == None:
        return render(request, 'index.html',{"metadata": None})
    return render(request,'moderator/manage_index.html')