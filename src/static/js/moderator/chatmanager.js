function load_chat(node_type) {
	$.ajax({
		type: 'POST',
		url: '/moderator/',
		data: {
			type: 'load_chat',
		},
		dataType: 'html',
	})
		.done(function (data) {
            console.log(data)
			document.getElementById('chat').innerHTML =data;
		})
		.fail(function (data) {
			// error
			window.alert('チャットが読み込めません');
		});
}

function chat_client() {
	setInterval(load_chat, 1000);
}

function chat_send() {
    if (document.getElementById('chat_content').value == '') {
        return;
    }
    $.ajax({
        type: 'POST',
        url: '/moderator/',
        data: {
            type: 'send_chat',
            content: document.getElementById('chat_content').value,
        },
        dataType: 'html',
    })
    .done(function (data) {
        chat_client();
        document.getElementById('chat_content').value = '';
    })
    .fail(function (data) {
        // エラーハンドリング
        window.alert('システムに接続できません');
    });
}
