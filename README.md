# Polaris Stage

Polaris StageはPLProtoに準拠したローカルネットワーク向けのクライアントソフトウェアです。

## Setup

Polaris Stageを動作させるためにはPython3.10以上の環境が必要です。

### Pythonのバージョン確認

```cmd
python --version
```

バージョンが3.10以上であることを確認してください

### Polarisのダウンロード

```cmd
git clone https://github.com/polaris-proto/polaris-stage
cd polaris-stage
```

### 依存ライブラリのインストール

```cmd
pip install -r requirements.txt
```

### Polaris Proto準拠のjsonファイルを準備する

```cmd
- polaris-stage
    - src
        - data
            - meta.json
            - layer
                01-a.json
                02-b.json
                ・・・
        - polaris
        ・・・
    - requirements.txt
    - README
```

※meta.jsonのファイル名を変更することはできません
> PLProtoに関する詳細な仕様は以下を参照してください
>
> [protocol-docs on github](https://github.com/polaris-proto/protocol-docs)

### Polaris Stageを起動する

```cmd
python src/manage.py runserver <IPアドレス>:80
```
