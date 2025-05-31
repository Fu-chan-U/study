# CSSの基礎知識まとめ

## CSSとは？ - ウェブページの「見た目」担当

CSSは「**C**ascading **S**tyle **S**heets（カスケーディング・スタイル・シート）」の略です。
HTMLがウェブページの「骨組み」や「内容の構造」を作るものだとすると、CSSはその骨組みに「見た目」や「装飾」を施すための言語です。

- **HTML**: 家の構造（柱、壁、部屋の間取り）
- **CSS**: 家の外壁の色、壁紙のデザイン、家具の配置など（デザイン・装飾）

料理に例えるなら…
- **HTML**: お弁当箱の仕切りや、おかずの種類と配置
- **CSS**: お弁当箱の色や形、おかずの彩りや盛り付け方

### Cascading（カスケーディング）の意味
「段階的に適用される」「滝のように流れる」といった意味があります。CSSでは、同じHTML要素に複数のスタイルが指定された場合、どのスタイルを優先するかというルール（優先順位）が決まっています。このルールに従ってスタイルが適用されていく様子を表しています。

## HTMLにCSSを適用する主な方法

HTML文書にCSSのスタイルを効かせる方法は、主に以下の3つがあります。

1.  **外部スタイルシート (External CSS)**
    -   CSSのコードを別のファイル（例: `style.css`）に書き、HTMLの`<head>`セクションで`<link>`タグを使って読み込みます。
    -   書き方: `<link rel="stylesheet" href="style.css">`
    -   **一番おすすめの方法**です。HTML（構造）とCSS（見た目）を完全に分離できるため、管理がしやすく、複数のHTMLページで同じスタイルを再利用できます。

2.  **内部スタイルシート (Internal CSS)**
    -   HTMLファイルの`<head>`セクション内に`<style>`タグを置き、その中に直接CSSのコードを書きます。
    -   書き方:
        ```html
        <head>
          <style>
            p {
              color: blue; /* pタグの文字色を青に */
            }
          </style>
        </head>
        ```
    -   特定のHTMLページだけにスタイルを適用したい場合に便利です。

3.  **インラインスタイル (Inline CSS)**
    -   HTML要素の `style` 属性に直接CSSのプロパティと値を書きます。
    -   書き方: `<p style="color: red; font-size: 12px;">この段落は赤い文字です。</p>`
    -   特定のHTML要素一つだけに、ごく限られたスタイルを適用したい場合に一時的に使います。しかし、多用するとHTMLとCSSが混在して管理しにくくなるため、通常はあまり推奨されません。

**注意**: `<p css="color: red;">` のように、HTML要素の `css` という属性にスタイルを書く方法は**ありません**。これは間違いです。

## CSSの基本的な書き方 - 「誰に」「何を」「どうする」

CSSは、「どのHTML要素に (セレクタ)」「どのスタイルを (プロパティ)」「どのように変えるか (値)」を指定することで成り立っています。

```css
セレクタ {
  プロパティ: 値;
  /* 例: color: red; */
}
```

-   **セレクタ (Selector)**: スタイルを適用したいHTML要素を選びます。
    -   例: `p` (全てのp要素)、`.important` (class名がimportantの要素)、`#logo` (id名がlogoの要素)
    -   お料理で「このお皿に盛り付けて！」と、お皿を選ぶようなものです。
-   **プロパティ (Property)**: 変更したいスタイルの種類を指定します。
    -   例: `color` (文字色)、`font-size` (文字の大きさ)、`background-color` (背景色)
    -   お料理で「味付けは塩？砂糖？」と、調味料の種類を選ぶのに似ています。
-   **値 (Value)**: プロパティをどのように変更するかを指定します。
    -   例: `red` (赤色)、`16px` (16ピクセル)、`#ffffff` (白色のカラーコード)
    -   お料理で「塩を少々」「砂糖を大さじ一杯」と、調味料の量を決める感じです。

この `プロパティ: 値;` の一組を「**宣言 (Declaration)**」と呼びます。
波括弧 `{ }` で囲まれた宣言の集まりを「**宣言ブロック (Declaration Block)**」と呼びます。

例：
```css
/* 全てのpタグの文字色を赤にし、フォントサイズを20ピクセルにする */
p { /* pタグがセレクタ */
  color: red;         /* 「文字色を赤に」という宣言 */
  font-size: 20px;    /* 「フォントサイズを20pxに」という宣言 */
}
```

## セレクタの種類（基本編）

HTML要素にスタイルを適用するための「的」となるセレクタには、様々な種類があります。

1.  **要素セレクタ (Element Selector)**
    -   HTMLタグ名をそのまま書きます。指定した全てのタグにスタイルが適用されます。
    -   例: `h1 { color: blue; }` （全てのh1タグの文字色を青に）

2.  **クラスセレクタ (Class Selector)**
    -   HTML要素の `class` 属性に指定した名前を使ってスタイルを適用します。
    -   CSSではクラス名の前にドット (`.`) を付けます。
    -   例:
        -   HTML: `<p class="warning-text">注意してください！</p>`
        -   CSS: `.warning-text { color: orange; font-weight: bold; }`
    -   同じクラス名を持つ複数の要素に、同じスタイルをまとめて適用できるので非常に便利です。

3.  **IDセレクタ (ID Selector)**
    -   HTML要素の `id` 属性に指定した名前を使ってスタイルを適用します。
    -   CSSではID名の前にシャープ記号 (`#`) を付けます。
    -   例:
        -   HTML: `<div id="main-header">サイトのヘッダー</div>`
        -   CSS: `#main-header { background-color: lightgray; padding: 10px; }`
    -   IDはページ内で**一意（ユニーク）**でなければなりません。つまり、同じID名を一つのページで複数使ってはいけません。特定の場所にあるたった一つの要素にスタイルを適用したい場合に使います。

まずはこれらの基本的なセレクタを覚えましょう！

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

## ボックスモデルの詳細

ボックスモデルは内側から外側に向かって4つの層で構成されています：

1. **content（内容）**: 要素の実際の内容（テキスト、画像など）が表示される領域です。
   - `width`と`height`プロパティはデフォルトではこの部分のサイズを指定します。

2. **padding（内側の余白）**: contentの周りの透明な領域です。
   - `padding-top`, `padding-right`, `padding-bottom`, `padding-left`で個別に指定できます。
   - 短縮形: `padding: 10px 20px 10px 20px;`（上、右、下、左）

3. **border（枠線）**: paddingの外側にある要素の境界線です。
   - `border-width`, `border-style`, `border-color`で指定できます。
   - 短縮形: `border: 1px solid black;`（太さ、スタイル、色）

4. **margin（外側の余白）**: 要素の外側の透明な領域で、他の要素との間隔を作ります。
   - `margin-top`, `margin-right`, `margin-bottom`, `margin-left`で個別に指定できます。
   - 短縮形: `margin: 10px 20px 10px 20px;`（上、右、下、左）

### box-sizingプロパティ

デフォルトでは、`width`と`height`プロパティはcontent領域のみを対象としますが、これは直感的でないことがあります。

```css
/* デフォルト */
.box {
  box-sizing: content-box;
  width: 100px;
  padding: 10px;
  border: 5px solid black;
  /* 実際の幅: 100px + 10px*2 + 5px*2 = 130px */
}

/* より使いやすい設定 */
.box {
  box-sizing: border-box;
  width: 100px;
  padding: 10px;
  border: 5px solid black;
  /* 実際の幅: 100px（padding, borderを含む） */
}
```

多くの開発者は、すべての要素に`border-box`を適用するリセットCSSを使用します：

```css
* {
  box-sizing: border-box;
}
```

## z-indexとレイヤー制御

`z-index`プロパティは要素の重なり順序を制御します。数値が大きいほど前面（画面に近い側）に表示されます。

### z-indexを使うための条件

`z-index`プロパティが効果を持つためには、要素が**配置コンテキスト**を持っている必要があります。以下のいずれかの条件が必要です：

- `position: relative`
- `position: absolute`
- `position: fixed`
- `position: sticky`
- `display: flex`の子要素
- `display: grid`の子要素

### 使用例

```css
.background {
  position: relative;
  z-index: 1;
}

.foreground {
  position: absolute;
  z-index: 2; /* backgroundより前面に表示される */
}

.tooltip {
  position: absolute;
  z-index: 100; /* 非常に高い値で最前面に表示 */
}
```

### 重なり順序の例

```html
<div class="red-box">赤いボックス</div>
<div class="blue-box">青いボックス</div>
<div class="green-box">緑のボックス</div>
```

```css
.red-box, .blue-box, .green-box {
  position: absolute;
  width: 100px;
  height: 100px;
}

.red-box {
  background-color: red;
  top: 0;
  left: 0;
  z-index: 3; /* 最前面 */
}

.blue-box {
  background-color: blue;
  top: 20px;
  left: 20px;
  z-index: 2; /* 中間 */
}

.green-box {
  background-color: green;
  top: 40px;
  left: 40px;
  z-index: 1; /* 最背面 */
}
```

### z-indexの注意点

- z-indexはstacking context（重ね合わせコンテキスト）内で相対的に機能します
- 親要素のz-indexが低いと、子要素のz-indexがいくら高くても他の要素の下に表示されることがあります
- 必要以上に大きな値（z-index: 9999など）を使わないようにしましょう

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

### フレックスボックスの基本概念

フレックスボックスを使用するには、親要素（コンテナ）に`display: flex;`を指定します。すると、その子要素（アイテム）は自動的にフレックスアイテムになります。

```html
<div class="container">
  <div class="item">アイテム1</div>
  <div class="item">アイテム2</div>
  <div class="item">アイテム3</div>
</div>
```

```css
.container {
  display: flex;
}
```

### 主要なフレックスボックスプロパティ

#### コンテナ（親要素）のプロパティ

1. **flex-direction**: 主軸の方向を指定
   - `row`（デフォルト）: 左から右へ横並び
   - `row-reverse`: 右から左へ横並び
   - `column`: 上から下へ縦並び
   - `column-reverse`: 下から上へ縦並び

2. **justify-content**: 主軸方向の配置を指定
   - `flex-start`（デフォルト）: 主軸の開始位置に配置
   - `flex-end`: 主軸の終了位置に配置
   - `center`: 主軸の中央に配置
   - `space-between`: 両端のアイテムを主軸の端に配置し、残りの空間を均等に分配
   - `space-around`: すべてのアイテムの周囲に均等な余白を配置
   - `space-evenly`: すべてのアイテム間と両端に均等な余白を配置

3. **align-items**: 交差軸方向の配置を指定
   - `stretch`（デフォルト）: コンテナの高さいっぱいに引き伸ばす
   - `flex-start`: 交差軸の開始位置に配置
   - `flex-end`: 交差軸の終了位置に配置
   - `center`: 交差軸の中央に配置
   - `baseline`: アイテムのベースラインを揃える

4. **flex-wrap**: アイテムの折り返しを指定
   - `nowrap`（デフォルト）: 折り返さない
   - `wrap`: 必要に応じて折り返す
   - `wrap-reverse`: 逆方向に折り返す

5. **gap**: アイテム間の間隔を指定（比較的新しいプロパティ）
   - `gap: 10px;`: すべての方向に10pxの間隔
   - `gap: 10px 20px;`: 行間10px、列間20px

#### アイテム（子要素）のプロパティ

1. **flex-grow**: 利用可能なスペースを分配する比率
   - `0`（デフォルト）: 伸びない
   - `1`以上: 指定した比率で余白を分配（1:1:1など）

2. **flex-shrink**: スペースが不足したときの縮小率
   - `1`（デフォルト）: 同じ比率で縮小
   - `0`: 縮小しない
   - `2`以上: 指定した比率でより縮小

3. **flex-basis**: アイテムの基本サイズ
   - `auto`（デフォルト）: 元のサイズを維持
   - `0`: 完全に伸縮可能
   - `200px`など: 特定のサイズを指定

4. **flex**: 上記3つをまとめて指定できる短縮プロパティ
   - `flex: 0 1 auto;`（デフォルト）
   - `flex: 1;`: `flex: 1 1 0;`と同じ（よく使われる設定）
   - `flex: auto;`: `flex: 1 1 auto;`と同じ

5. **align-self**: 個別のアイテムのalign-itemsを上書き
   - `auto`（デフォルト）: 親のalign-itemsを継承
   - `flex-start`, `flex-end`, `center`, `stretch`など

### フレックスボックスの実践例

#### 水平・垂直中央揃え（よく使うパターン）

```css
.container {
  display: flex;
  justify-content: center; /* 水平中央 */
  align-items: center; /* 垂直中央 */
  height: 300px; /* 高さを指定 */
}
```

#### 均等に広げる3カラムレイアウト

```css
.container {
  display: flex;
}

.column {
  flex: 1; /* すべてのカラムが均等に広がる */
  padding: 20px;
}
```

#### 異なる幅の3カラムレイアウト

```css
.container {
  display: flex;
}

.sidebar {
  flex: 1; /* サイドバーは1の比率 */
}

.main-content {
  flex: 3; /* メインコンテンツは3の比率（3倍の幅） */
}
```

#### モバイルファースト：小さい画面では縦並び、大きい画面では横並び

```css
.container {
  display: flex;
  flex-direction: column; /* デフォルトは縦並び */
}

@media (min-width: 768px) {
  .container {
    flex-direction: row; /* 大きい画面では横並び */
  }
}
```

フレックスボックスは現代のWebデザインで最も重要なレイアウト技術の一つです。基本を理解すれば、複雑なレイアウトも簡単に実現できるようになります。

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

## CSSの色指定方法

CSSでは様々な方法で色を指定できます。それぞれの指定方法にはメリットとデメリットがあります。

### 1. 色の名前

最もシンプルな指定方法で、英語の色の名前を使います。

```css
h1 {
  color: red;
}
p {
  background-color: lightblue;
}
```

CSSでは約140種類の色名が定義されています（black, white, red, blue, green, gray, pink など）。
色名は覚えやすいですが、微妙な色合いの調整ができないという制限があります。

### 2. RGB / RGBA

赤（Red）、緑（Green）、青（Blue）の三原色を0〜255の値で指定します。RGBA形式では透明度（Alpha）も0〜1の値で指定できます。

```css
h1 {
  color: rgb(255, 0, 0);       /* 赤 */
  background-color: rgba(0, 0, 255, 0.5); /* 半透明の青 */
}
```

- `rgb(255, 0, 0)`: 赤色
- `rgb(0, 255, 0)`: 緑色
- `rgb(0, 0, 255)`: 青色
- `rgb(255, 255, 255)`: 白色
- `rgb(0, 0, 0)`: 黒色
- `rgba(255, 0, 0, 0.5)`: 50%の透明度の赤色

### 3. HEX（16進数）

RGB値を16進数で表現したものです。#から始まり、赤、緑、青の順に00〜FFの値で指定します。

```css
h1 {
  color: #FF0000;  /* 赤 */
  border-color: #00FF00;  /* 緑 */
  background-color: #0000FF;  /* 青 */
}
```

- `#FF0000`: 赤色
- `#00FF00`: 緑色
- `#0000FF`: 青色
- `#FFFFFF`: 白色
- `#000000`: 黒色

同じ文字が並ぶ場合は短縮して書くこともできます：
- `#FF0000` → `#F00`
- `#00FF00` → `#0F0`
- `#0000FF` → `#00F`

### 4. HSL / HSLA

色相（Hue）、彩度（Saturation）、明度（Lightness）で指定します。HSLA形式では透明度（Alpha）も指定できます。

```css
h1 {
  color: hsl(0, 100%, 50%);       /* 赤 */
  background-color: hsla(240, 100%, 50%, 0.5); /* 半透明の青 */
}
```

- 色相（H）: 0〜360の値（0/360=赤、120=緑、240=青）
- 彩度（S）: 0〜100%（0%=灰色、100%=鮮やかな色）
- 明度（L）: 0〜100%（0%=黒、100%=白、50%=通常の明るさ）

HSLは人間の色彩感覚に近い指定方法なので、色の調整がしやすいというメリットがあります。

### 色指定方法の選び方

- **名前**: 基本的な色を素早く指定したいとき
- **RGB/RGBA**: 透明度が必要なとき、プログラムで色を生成するとき
- **HEX**: デザインツールとの互換性が必要なとき、短く書きたいとき
- **HSL/HSLA**: 色合いを調整しながら作業するとき、関連色を作りたいとき

## box-shadowプロパティ

box-shadowプロパティを使うと、要素に影をつけることができます。ボタンやカードなどに立体感や浮遊感を与えるのに便利です。

### 基本的な構文

```css
box-shadow: 水平オフセット 垂直オフセット ぼかし 広がり 色;
```

各値の意味：
- **水平オフセット**: 影の水平方向の位置（正の値で右、負の値で左）
- **垂直オフセット**: 影の垂直方向の位置（正の値で下、負の値で上）
- **ぼかし（省略可）**: 影のぼかし具合（値が大きいほどぼやける）
- **広がり（省略可）**: 影の広がり具合（正の値で拡大、負の値で縮小）
- **色（省略可）**: 影の色（省略すると現在の色）

### 使用例

```css
/* 基本的な影 */
.box1 {
  box-shadow: 5px 5px 10px #888888;
}

/* ぼかしと広がりを設定した影 */
.box2 {
  box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.3);
}

/* 内側の影（inset キーワード） */
.box3 {
  box-shadow: inset 5px 5px 10px #888888;
}

/* 複数の影（カンマで区切る） */
.box4 {
  box-shadow: 
    3px 3px 5px #888888, 
    inset 1px 1px 3px #cccccc;
}
```

### よく使われる効果

1. **フラットシャドウ（平坦な影）**
```css
.flat-shadow {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
```

2. **浮き上がり効果**
```css
.floating {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
```

3. **ぼかしの強い柔らかな影**
```css
.soft-shadow {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}
```

4. **シャープな影（ぼかしが少ない）**
```css
.sharp-shadow {
  box-shadow: 5px 5px 0 #888888;
}
```

5. **内側の影（凹んだ効果）**
```css
.inset-shadow {
  box-shadow: inset 0 0 10px #888888;
}
```

6. **グロー効果（発光効果）**
```css
.glow {
  box-shadow: 0 0 10px 5px #66aaff;
}
```

### 注意点

- box-shadowは要素の幅と高さに影響しません（レイアウトに影響なし）
- 複数の影を指定する場合は、最初に指定した影が最前面に表示されます
- パフォーマンスに影響する可能性があるため、複雑な影や多数の影を使う場合は注意が必要です 

## CSSの単位システム

CSSでは様々な単位を使ってサイズを指定できます。特にフォントサイズや余白などを設定する際に適切な単位を選ぶことが重要です。

### 絶対単位

絶対単位は画面サイズに関係なく、常に同じ大きさを保ちます。

- **px（ピクセル）**: 画面上の1ドットを表す基本単位
- **pt（ポイント）**: 印刷物で使われる単位（1pt = 1/72インチ）
- **cm（センチメートル）**: 物理的なセンチメートル
- **mm（ミリメートル）**: 物理的なミリメートル
- **in（インチ）**: 物理的なインチ（1in = 96px）

```css
h1 {
  font-size: 24px;
}
p {
  margin-bottom: 0.5cm;
}
```

### 相対単位

相対単位は親要素やルート要素、ビューポートサイズなど、他の要素を基準にしたサイズを指定します。レスポンシブデザインでは相対単位が重要です。

#### フォントサイズに関連する単位

- **em**: 親要素のフォントサイズを基準にした単位（1em = 親要素のフォントサイズ）
- **rem**: ルート要素（html要素）のフォントサイズを基準にした単位（1rem = ルート要素のフォントサイズ）
- **%**: 親要素のフォントサイズに対する割合

```css
html {
  font-size: 16px; /* ルートのフォントサイズ */
}
.container {
  font-size: 1.2em; /* 親要素の1.2倍 */
}
.container p {
  font-size: 0.9em; /* さらに親の0.9倍 */
}
.title {
  font-size: 1.5rem; /* ルート要素の1.5倍（16px * 1.5 = 24px） */
}
```

#### ビューポートに関連する単位

- **vw**: ビューポート幅の1/100（1vw = ビューポート幅の1%）
- **vh**: ビューポート高さの1/100（1vh = ビューポート高さの1%）
- **vmin**: vwとvhのうち小さい方の値
- **vmax**: vwとvhのうち大きい方の値

```css
.hero {
  height: 80vh; /* ビューポート高さの80% */
  width: 100vw; /* ビューポート幅の100% */
}
.responsive-text {
  font-size: 5vw; /* 画面幅に応じて変化 */
}
```

### 単位の選び方

適切な単位を選ぶことで、レスポンシブでアクセシブルなデザインになります：

1. **フォントサイズ**:
   - **rem**: 最も推奨される単位。ルート要素のサイズに基づくため、一貫性があり、ユーザーのブラウザ設定を尊重します
   - **em**: ネストされた要素でサイズを相対的に変更したい場合に使用
   - **px**: 絶対的なサイズが必要な場合のみ使用

2. **余白とパディング**:
   - **rem**: 一貫した間隔を維持したい場合
   - **em**: テキストサイズに比例した間隔が必要な場合
   - **%**: 親要素に対する比率で設定したい場合

3. **レイアウト**:
   - **%**: 親要素に対する相対的なサイズ
   - **vw/vh**: ビューポートに対する相対的なサイズ
   - **px**: 精密な位置決めが必要な小さな要素

### 単位の例

```css
/* 基本設定 */
html {
  font-size: 16px; /* ブラウザのデフォルトは通常16px */
}

/* フォントサイズ */
h1 {
  font-size: 2rem;    /* 32px (16px * 2) */
}
h2 {
  font-size: 1.5rem;  /* 24px (16px * 1.5) */
}
p {
  font-size: 1rem;    /* 16px */
}
.small-text {
  font-size: 0.875rem; /* 14px (16px * 0.875) */
}

/* 余白とパディング */
.container {
  padding: 1rem;      /* 16px */
  margin-bottom: 2rem; /* 32px */
}

/* レイアウト */
.sidebar {
  width: 25%;         /* 親要素の25% */
}
.main-content {
  width: 75%;         /* 親要素の75% */
}
.full-screen {
  width: 100vw;       /* ビューポート幅全体 */
  height: 100vh;      /* ビューポート高さ全体 */
}
```

### emとremの違い

```css
/* htmlのフォントサイズは16px（ブラウザのデフォルト） */
html {
  font-size: 16px;
}

/* 親要素 */
.parent {
  font-size: 20px;  /* 親要素のフォントサイズを20pxに設定 */
}

/* 子要素 */
.parent .child-em {
  font-size: 1.5em;  /* 親要素の1.5倍 = 20px * 1.5 = 30px */
}

.parent .child-rem {
  font-size: 1.5rem; /* ルート要素の1.5倍 = 16px * 1.5 = 24px */
}
```

`em`はネストされた要素で使うと複合的に計算されるため、複雑なレイアウトでは予想外のサイズになることがあります。対して`rem`は常にルート要素を基準にするため、一貫したサイズ設定が可能です。

## CSS グリッドレイアウト

CSSグリッドは、ウェブページを柔軟な行と列のシステムでレイアウトするための強力な二次元レイアウトシステムです。

### 1. グリッドコンテナの作成

特定の要素をグリッドコンテナにするには、`display` プロパティを使用します。

- `display: grid;`
  - 要素をブロックレベルのグリッドコンテナとして定義します。
- `display: inline-grid;`
  - 要素をインラインレベルのグリッドコンテナとして定義します。

### 2. 列と行の定義 (トラックの定義)

グリッドコンテナ内に表示される列の幅や数、行の高さや数を定義します。

- `grid-template-columns: <track-size> ...;`
  - グリッドの列のサイズと名前を定義します。
  - 例: `grid-template-columns: 100px 1fr 2fr;` (1列目100px、2列目残りの1/3、3列目残りの2/3)
  - 例: `grid-template-columns: repeat(3, 1fr);` (同じ幅の列を3つ)
- `grid-template-rows: <track-size> ...;`
  - グリッドの行のサイズと名前を定義します。
  - 例: `grid-template-rows: auto 100px minmax(50px, auto);` (1行目自動、2行目100px、3行目最低50pxで内容は自動)

#### トラックサイズの単位と関数
- **絶対単位**: `px`, `cm` など
- **相対単位**: `%`, `vw`, `vh` など
- **`fr` ユニット**: グリッドコンテナ内の利用可能なスペースの割合を指定します。
- **`repeat()` 関数**: 同じトラック定義の繰り返しを簡潔に記述します。
  - 例: `repeat(auto-fill, minmax(100px, 1fr))` (最小100pxの列を可能な限り詰める)
- **`minmax()` 関数**: トラックサイズの最小値と最大値を定義します。
  - 例: `minmax(100px, 1fr)` (最小100px、最大は利用可能なスペース)
- **`auto`**: コンテンツのサイズ、または配置されるグリッドアイテムのサイズに基づいて自動的に決定されます。

### 3. グリッドアイテムの配置

グリッドコンテナの子要素（グリッドアイテム）をグリッド上のどこに配置するかを指定します。

- `grid-column-start: <line>;`
- `grid-column-end: <line>;`
- `grid-row-start: <line>;`
- `grid-row-end: <line>;`
  - グリッドアイテムが開始/終了するグリッド線（番号または名前）を指定します。
  - 例: `grid-column-start: 1; grid-column-end: 3;` (1番目の列線から3番目の列線まで、つまり最初の2列を占める)
- **ショートハンドプロパティ**:
  - `grid-column: <start-line> / <end-line>;`
  - `grid-row: <start-line> / <end-line>;`
  - 例: `grid-column: 1 / span 2;` (1番目の列線から2列分を占める)
  - `grid-area: <row-start> / <column-start> / <row-end> / <column-end>;` (行開始/列開始/行終了/列終了を一括指定)

### 4. グリッドアイテム間の隙間 (ガター)

グリッドトラック間の隙間（溝）を設定します。

- `gap: <row-gap> <column-gap>;`
  - 行の隙間と列の隙間をまとめて指定します。
  - 例: `gap: 20px;` (行間も列間も20px)
  - 例: `gap: 10px 30px;` (行間10px、列間30px)
- `row-gap: <length>;`
  - 行間の隙間のみを指定します。
- `column-gap: <length>;`
  - 列間の隙間のみを指定します。

### CSSグリッドの主なメリット
- HTML構造をシンプルに保ったまま、複雑な二次元レイアウトを実現できる。
- 行と列を同時に制御できるため、直感的で柔軟な配置が可能。
- レスポンシブデザインとの親和性が高い。 