# HTMLでお問い合わせフォームを作成する方法

HTMLを使って、ユーザーが情報を入力し送信できる「お問い合わせフォーム」を作成する基本的な手順をまとめます。

## 1. フォーム全体の枠組み: `<form>` タグ

まず、フォーム全体を `<form>` タグで囲みます。

```html
<form action="送信先のURL" method="送信方法">
    <!-- ここにフォームの部品（入力欄など）を配置します -->
</form>
```

-   `action` 属性: フォームに入力されたデータをどこに送るかを指定します。最初は `action="#"` としておけば、同じページにデータを送る（実際にはどこにも送らない）設定になります。
-   `method` 属性: データをどのように送るかを指定します。よく使われるのは `get` または `post` です。`post` の方が一般的にフォームデータの送信に使われます。

## 2. 各入力項目: `<label>` と `<input>`、`<textarea>`

ユーザーが情報を入力する部分を作成します。

### ラベル: `<label>` タグ

何を入力する項目なのかを示す「ラベル」を `<label>` タグで作成します。
`for` 属性を使って、関連する入力部品の `id` を指定すると、ラベルと入力部品が連携します（ラベルをクリックすると入力部品が選択されるなど）。

```html
<label for="name">お名前:</label>
```

### 1行のテキスト入力: `<input type="text">`

お名前や件名など、1行の短いテキストを入力してもらう場合に使います。

```html
<input type="text" id="name" name="user_name" required>
```

-   `type="text"`: テキスト入力欄であることを示します。
-   `id` 属性: ラベルと連携させるための一意の識別子です。
-   `name` 属性: サーバーにデータを送る際に、この入力欄のデータが何であるかを示す名前です。
-   `required` 属性: この項目が入力必須であることを示します。

### メールアドレス入力: `<input type="email">`

メールアドレス専用の入力欄です。ブラウザによっては、入力された形式がメールアドレスとして正しいか簡単なチェックをしてくれます。

```html
<input type="email" id="email" name="user_email" required>
```

### 複数行のテキスト入力: `<textarea>`

お問い合わせ内容など、複数行の長い文章を入力してもらう場合に使います。

```html
<textarea id="message" name="user_message" required></textarea>
```

-   `<textarea>` タグは終了タグ `</textarea>` が必要です。
-   `rows` や `cols` 属性で初期の表示行数や文字数を指定できますが、CSSで高さを指定することも一般的です。

## 3. 送信ボタン: `<button type="submit">`

入力された情報を送信するためのボタンを作成します。

```html
<button type="submit">送信</button>
```

-   `type="submit"`: このボタンがフォームを送信するためのものであることを示します。

## 4. HTML全体の構造例

これらの部品を組み合わせると、以下のようなHTML構造になります。
（これは `pages/contact_page.html` で作成したものの主要部分です）

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>お問い合わせ</title>
    <style>
        /* pages/contact_page.html にあるようなCSSで見た目を整えることができます */
        body { font-family: sans-serif; margin: 20px; background-color: #f4f4f4; }
        .container { background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
        h1 { text-align: center; }
        label { display: block; margin-bottom: 8px; font-weight: bold; }
        input[type="text"], input[type="email"], textarea {
            width: calc(100% - 22px); padding: 10px; margin-bottom: 15px;
            border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box;
        }
        textarea { height: 150px; }
        button { background-color: #007bff; color: white; padding: 10px 15px; border: none; border-radius: 4px; cursor: pointer; }
    </style>
</head>
<body>
    <div class="container">
        <h1>お問い合わせフォーム</h1>
        <form action="#" method="post">
            <div>
                <label for="name">お名前:</label>
                <input type="text" id="name" name="user_name" required>
            </div>
            <div>
                <label for="email">メールアドレス:</label>
                <input type="email" id="email" name="user_email" required>
            </div>
            <div>
                <label for="message">お問い合わせ内容:</label>
                <textarea id="message" name="user_message" required></textarea>
            </div>
            <div>
                <button type="submit">送信</button>
            </div>
        </form>
    </div>
</body>
</html>
```

## 5. CSSでのスタイリング

HTMLで骨組みを作った後、CSSを使って見た目を整えます。
上記の例では `<style>` タグの中に直接CSSを書いていますが、外部CSSファイルを作成して読み込む方法も一般的です。

-   `font-family`: フォントの種類
-   `margin`, `padding`: 余白
-   `background-color`: 背景色
-   `border`: 枠線
-   `border-radius`: 角の丸み
-   `box-shadow`: 影
-   `width`, `height`: 幅や高さ
-   `text-align`: 文字の配置
-   `display: block;`: 要素をブロックとして扱い、改行させる
-   `box-sizing: border-box;`: `padding` と `border` を要素の幅や高さに含めて計算するようにする

これらの基本的な部品とCSSを組み合わせることで、お問い合わせフォームを作成できます。 