# CSSの基礎知識まとめ

## CSSとは
CSSは「**C**ascading **S**tyle **S**heets」の略で、HTMLで作った骨組みに色や形、配置などのデザインを加えるための言語です。HTMLが家の骨組みなら、CSSは壁紙や家具、照明などの内装・外装を担当します。

## CSSの基本構造

```css
セレクタ {
  プロパティ: 値;
  プロパティ: 値;
}
```

例：
```css
h1 {
  color: blue;
  font-size: 24px;
}
```

## CSSをHTMLに適用する3つの方法

### 1. 外部CSS（推奨）
別ファイルにCSSを書き、HTMLのhead内でlinkタグで読み込みます。

```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```

### 2. 内部CSS
HTML文書のhead内にstyleタグを使って直接CSSを書きます。

```html
<head>
  <style>
    h1 {
      color: blue;
    }
  </style>
</head>
```

### 3. インラインCSS
HTML要素に直接style属性を使って書きます。

```html
<h1 style="color: blue; font-size: 24px;">見出し</h1>
```

## セレクタの種類

### 基本セレクタ
- **要素セレクタ**: タグ名を指定 → `h1`, `p`, `div`
- **クラスセレクタ**: クラス名を指定 → `.box`, `.header`
- **IDセレクタ**: ID名を指定 → `#main`, `#footer`
- **全称セレクタ**: すべての要素を指定 → `*`

### 結合セレクタ
- **子孫セレクタ**: スペースで区切る → `div p`（divの中のすべてのp）
- **子セレクタ**: > で区切る → `div > p`（divの直接の子であるp）
- **隣接兄弟セレクタ**: + で区切る → `h1 + p`（h1の直後のp）
- **一般兄弟セレクタ**: ~ で区切る → `h1 ~ p`（h1と同じ親を持つ後に来るすべてのp）

## よく使うCSSプロパティ

### テキスト関連
- `color`: 文字色
- `font-size`: 文字サイズ
- `font-family`: フォント種類
- `font-weight`: 太さ（normal, bold など）
- `text-align`: 文字揃え（left, center, right）
- `text-decoration`: 下線など（none, underline など）

### 背景
- `background-color`: 背景色
- `background-image`: 背景画像
- `background-size`: 背景画像サイズ
- `background-position`: 背景画像位置

### ボックスモデル
- `width`, `height`: 幅と高さ
- `padding`: 内側の余白
- `border`: 枠線
- `margin`: 外側の余白
- `box-sizing`: サイズの計算方法

### 表示・配置
- `display`: 表示形式（block, inline, flex, none など）
- `position`: 配置方法（static, relative, absolute, fixed）
- `top`, `right`, `bottom`, `left`: 位置指定
- `z-index`: 重なり順序

## ボックスモデルの理解

すべての HTML 要素は「箱（ボックス）」として扱われます：

```
+------------------------+
|       margin           |
|  +------------------+  |
|  |     border       |  |
|  |  +------------+  |  |
|  |  |  padding   |  |  |
|  |  |  +------+  |  |  |
|  |  |  |      |  |  |  |
|  |  |  |content|  |  |  |
|  |  |  |      |  |  |  |
|  |  |  +------+  |  |  |
|  |  +------------+  |  |
|  +------------------+  |
+------------------------+
```

## フレックスボックス（Flexbox）

フレックスボックスは要素を横並びや縦並びにするための便利な方法です。

```css
.container {
  display: flex;
  flex-direction: row; /* row（横並び）, column（縦並び） */
  justify-content: center; /* 横方向の配置 */
  align-items: center; /* 縦方向の配置 */
  gap: 10px; /* アイテム間の隙間 */
}
```

## レスポンシブデザイン

異なる画面サイズに対応するデザインを作るための技術です。

### メディアクエリ
```css
/* スマートフォン向け */
@media screen and (max-width: 480px) {
  .container {
    flex-direction: column;
  }
}

/* タブレット向け */
@media screen and (min-width: 481px) and (max-width: 768px) {
  .container {
    flex-direction: row;
  }
}
```

## CSSの優先順位

1. `!important` がついたスタイル
2. インラインスタイル（style属性）
3. IDセレクタ（#id）
4. クラスセレクタ（.class）
5. 要素セレクタ（h1, p, div など）

より具体的なセレクタほど優先されます。

## よく使うCSSテクニック

### 中央寄せ
```css
/* 横方向の中央寄せ */
.center-text {
  text-align: center;
}

/* ボックスの中央寄せ */
.center-box {
  margin: 0 auto;
}

/* フレックスボックスでの中央寄せ */
.center-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### ホバーエフェクト
```css
.button {
  background-color: blue;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: darkblue;
}
```

## よくあるミス

- セレクタの書き間違い
- プロパティの書き間違い
- セミコロン（;）の忘れ
- 単位（px, %, emなど）の忘れ
- 括弧（{ }）の対応ミス

## CSSの学習ポイント

- まずはシンプルなスタイルから始める
- デベロッパーツールで他のサイトのCSSを見て学ぶ
- 一つずつプロパティを追加して効果を確認する
- レイアウトはFlex（フレックスボックス）から学ぶ
- コピー&ペーストより自分で書いて理解する

## 次のステップ

CSSの基本を理解したら、次はJavaScriptを学びましょう。JavaScriptを使うと、ページに動きや対話性を加えることができます。 