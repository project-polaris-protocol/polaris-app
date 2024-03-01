# Polaris Application Starter

## Prepare

このアプリケーションの実行にはNode.jsが必要です。
Node.jsは[このサイト](https://nodejs.org/en)からダウンロードできます

## Setup

セットアップにはインターネット接続が必要です\[^1]

```bash
npm install
```

---

オフライン環境で動作させる必要がある場合はインターネットに接続できる端末でセットアップ後、すべてのフォルダー・ファイルを動作させたいコンピューターにコピーしてください。
その場合、Node.jsのインストーラーをオフラインのPCにコピーし、Node.jsをインストールする必要があります。

---

## Starting Application

```bash
npx serve .output/public/ -p 80
```

コンソールに表示されたURLでアプリが立ち上がっています。
