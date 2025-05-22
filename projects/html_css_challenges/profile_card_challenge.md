# 🌱 シンプルなプロフィールカードを作ろう

## 🔍 課題概要
HTML/CSSの基礎を使って、自分自身（または架空の人物）のプロフィールカードを作成する課題です。画像、名前、簡単な自己紹介、趣味・特技などを含むカードをデザインします。

## 🎯 達成目標
- HTMLの基本的な構造を理解して実装できるようになる
- CSSを使って要素のスタイリングができるようになる
- 画像の挿入方法を学ぶ
- ボックスモデルを理解し、余白や枠線を適切に設定できるようになる
- 簡単なレイアウト（中央寄せなど）ができるようになる

## 📝 課題の詳細

以下の要素を含むプロフィールカードを作成してください：

1. **HTML部分**：
   - 適切なHTMLの基本構造（DOCTYPE宣言、html、head、bodyタグなど）
   - プロフィール画像（img要素）
   - 名前（h1またはh2要素）
   - 自己紹介文（p要素）
   - 趣味・特技のリスト（ul/li要素）
   - 連絡先やSNSへのリンク（a要素）

2. **CSS部分**：
   - カードのサイズ指定（width, height）
   - 背景色の設定
   - 枠線と角丸の設定（border, border-radius）
   - 余白の設定（padding, margin）
   - テキストの装飾（font-family, font-size, color）
   - 画像のサイズ調整と丸形表示
   - カードを画面中央に配置

## 💡 ヒント

- **HTML作成のポイント**：
  - `<!DOCTYPE html>`から始まる基本的なHTML構造を作る
  - プロフィールカードの内容を`<div>`でグループ化する
  - 画像のalt属性を忘れずに設定する
  - リンクは`target="_blank"`を使って新しいタブで開くようにする

- **CSS作成のポイント**：
  - CSSは`<style>`タグ内に記述するか、外部CSSファイルを作成して`<link>`タグで読み込む
  - カードのサイズは幅300px〜400pxくらいが見やすい
  - `box-shadow`を使うとカードに影をつけられる
  - 画像を丸く表示するには`border-radius: 50%;`を使う
  - カードを中央に配置するには`margin: 0 auto;`または`display: flex;`と`justify-content: center;`を組み合わせる

## 🎨 サンプルコード

HTMLの基本構造の例：

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>プロフィールカード</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="profile-card">
    <!-- ここにプロフィールカードの内容を入れる -->
  </div>
</body>
</html>
```

## 📚 参考資料

- [MDN Web Docs - HTML入門](https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML)
- [MDN Web Docs - CSS入門](https://developer.mozilla.org/ja/docs/Learn/CSS/First_steps)
- [ボックスモデルの基本](https://developer.mozilla.org/ja/docs/Learn/CSS/Building_blocks/The_box_model)
- [CSSレイアウト入門](https://developer.mozilla.org/ja/docs/Learn/CSS/CSS_layout/Introduction)

## ✅ 完了条件

以下の条件を満たしていれば完了とみなします：

1. HTMLファイルとCSSファイル（または内部CSS）が作成されている
2. プロフィールカードが正しく表示される
3. 画像、名前、自己紹介、趣味リスト、リンクがすべて含まれている
4. CSSでスタイリングされ、見た目が整っている
5. ブラウザで表示したときに正しくレイアウトされている

## 📤 提出方法

1. HTMLファイルとCSSファイルを作成する
2. GitHubのリポジトリにプッシュする
3. プロフィールカードのスクリーンショットを撮影する
4. このイシューにスクリーンショットと完成したコードへのリンクをコメントする

## 📸 完成イメージ例

カードのデザインは自由ですが、参考までに完成イメージの一例を示します：

```
┌─────────────────────────────┐
│          ┌─────┐           │
│          │     │           │
│          │ 画像 │           │
│          │     │           │
│          └─────┘           │
│                            │
│         鈴木 太郎            │
│                            │
│  こんにちは！プログラミング学習中の │
│  鈴木です。HTML/CSSの練習として │
│  このカードを作成しました。     │
│                            │
│  【趣味・特技】               │
│  ・プログラミング             │
│  ・読書                     │
│  ・料理                     │
│                            │
│  【SNS】                    │
│  Twitter GitHub            │
│                            │
└─────────────────────────────┘
```

## 🌟 チャレンジ（オプション）

基本課題ができたら、以下の要素も追加してみましょう：

- ホバーエフェクト（マウスを置いたときに色が変わるなど）
- アニメーション（ふわっと表示する、回転するなど）
- レスポンシブデザイン（画面サイズによって表示が変わる）
- グラデーション背景
- フォントの変更（Google Fontsなどの外部フォントを使用） 