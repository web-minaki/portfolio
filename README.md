# Portfolio

## 🛠 開発環境

Gulp を用いたフロントエンドのビルド環境を構築しています。

### 主な機能

* SCSS のコンパイル（Dart Sass）
* HTML / JavaScript / 画像の自動コピー
* BrowserSync によるローカルサーバー構築
* 保存時の自動リロード
* src / dist 構成による開発・納品ディレクトリの分離

---

## 📁 ディレクトリ構成

```
project/
├─ src/
│  ├─ html/
│  │  ├─ index.html
│  │  └─ parts/
│  │     └─ header.html
│  ├─ scss/
│  │  ├─ foundation/
│  │  │  └─ reset.scss
│  │  └─ style.scss
│  ├─ js/
│  │  └─ main.js
│  └─ assets/
│     └─ image/
│
├─ dist/
│  ├─ index.html
│  ├─ css/
│  ├─ js/
│  └─ assets/
│
├─ gulpfile.js
├─ package.json
└─ README.md
```

---

## 🔄 ビルド仕様

| 種別   | 入力         | 出力          |
| ---- | ---------- | ----------- |
| HTML | src/html   | dist/       |
| SCSS | src/scss   | dist/css    |
| JS   | src/js     | dist/js     |
| 画像   | src/assets | dist/assets |

---

## 🚀 起動方法

```
npm install
npm run dev
```

---

## 💡 補足

* HTMLは `gulp-file-include` を用いてパーツ分割（header / footer）を実現
* jQuery は CDN で読み込み
* CSS の source map は未使用（シンプル構成）

---

## ✨ 工夫した点

* 実務を想定した静的コーディング環境を構築
* メンテナンス性を考慮したパーツ分割
* SCSS の構造化（foundation / layout / object を想定）

---
