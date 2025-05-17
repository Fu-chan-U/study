# JavaScriptの基礎知識まとめ

## JavaScriptとは
JavaScriptは、Webページに動きや対話性を加えるためのプログラミング言語です。HTMLが家の骨組み、CSSが内装・外装なら、JavaScriptは電気や水道のような機能を担当します。ボタンを押したときの反応、データの計算、情報の表示・非表示の切り替えなどができます。

> 📝 注意: JavaScriptはJavaとは別の言語です。名前が似ていますが、全く異なります。

## JavaScriptの基本的な使い方

### 1. HTMLに直接書く（インラインJavaScript）
```html
<button onclick="alert('こんにちは')">クリック</button>
```

### 2. HTMLのscriptタグ内に書く
```html
<script>
  function sayHello() {
    alert('こんにちは');
  }
</script>
```

### 3. 外部ファイルとして読み込む（推奨）
```html
<script src="script.js"></script>
```

## 基本的な構文

### 変数と定数
変数はデータを一時的に保存する箱のようなものです。

```javascript
// 変数（再代入可能）
let name = '太郎';
name = '花子';  // 値を変更できる

// 定数（再代入不可）
const age = 25;
// age = 26;  // エラーになる

// var（古い書き方、できるだけletかconstを使う）
var hobby = '読書';
```

### データ型

```javascript
// 文字列（String）
let name = '太郎';
let message = "こんにちは";

// 数値（Number）
let age = 25;
let height = 175.5;

// 真偽値（Boolean）
let isStudent = true;
let hasLicense = false;

// 配列（Array）- 複数の値を順番に格納
let fruits = ['りんご', 'バナナ', 'オレンジ'];

// オブジェクト（Object）- 複数の値を名前付きで格納
let person = {
  name: '太郎',
  age: 25,
  isStudent: true
};

// null（何もない）
let empty = null;

// undefined（未定義）
let something;  // 値を代入していないとundefinedになる
```

### 演算子

```javascript
// 算術演算子
let a = 5 + 3;  // 加算（8）
let b = 5 - 3;  // 減算（2）
let c = 5 * 3;  // 乗算（15）
let d = 6 / 3;  // 除算（2）
let e = 7 % 3;  // 剰余（余り）（1）

// 比較演算子
let f = 5 > 3;   // より大きい（true）
let g = 5 < 3;   // より小さい（false）
let h = 5 >= 3;  // 以上（true）
let i = 5 <= 3;  // 以下（false）
let j = 5 === 3; // 等しい（false）
let k = 5 !== 3; // 等しくない（true）

// 論理演算子
let l = true && false; // AND（両方trueならtrue）（false）
let m = true || false; // OR（どちらかがtrueならtrue）（true）
let n = !true;         // NOT（反転）（false）
```

### 条件分岐

```javascript
// if文
let age = 18;

if (age >= 20) {
  console.log('成人です');
} else if (age >= 18) {
  console.log('18歳以上です');
} else {
  console.log('未成年です');
}

// switch文
let fruit = 'りんご';

switch (fruit) {
  case 'りんご':
    console.log('赤いです');
    break;
  case 'バナナ':
    console.log('黄色いです');
    break;
  default:
    console.log('何色かわかりません');
}
```

### 繰り返し

```javascript
// for文（回数指定のループ）
for (let i = 0; i < 3; i++) {
  console.log(i);  // 0, 1, 2 と表示される
}

// while文（条件が真の間ループ）
let i = 0;
while (i < 3) {
  console.log(i);  // 0, 1, 2 と表示される
  i++;
}

// 配列のループ
let fruits = ['りんご', 'バナナ', 'オレンジ'];

// forEach（モダンな書き方）
fruits.forEach(function(fruit) {
  console.log(fruit);
});

// for...of（さらに新しい書き方）
for (let fruit of fruits) {
  console.log(fruit);
}
```

### 関数
関数は一連の処理をまとめたものです。

```javascript
// 関数宣言
function greet(name) {
  return 'こんにちは、' + name + 'さん';
}

// 関数を呼び出す
let message = greet('太郎');
console.log(message);  // 「こんにちは、太郎さん」と表示される

// アロー関数（モダンな書き方）
const greet2 = (name) => {
  return 'こんにちは、' + name + 'さん';
};

// 簡略化したアロー関数
const greet3 = name => 'こんにちは、' + name + 'さん';
```

## DOMの操作
DOM（Document Object Model）はHTMLの要素をJavaScriptで操作するための仕組みです。

### 要素の取得

```javascript
// IDで要素を取得
const title = document.getElementById('title');

// クラスで要素を取得（複数ある場合はリストで返る）
const items = document.getElementsByClassName('item');

// タグ名で要素を取得（複数ある場合はリストで返る）
const paragraphs = document.getElementsByTagName('p');

// CSSセレクタで要素を取得（最初の1つ）
const container = document.querySelector('.container');

// CSSセレクタで要素を取得（すべて）
const buttons = document.querySelectorAll('button');
```

### 要素の内容を変更

```javascript
// テキスト内容を変更
document.getElementById('title').textContent = '新しいタイトル';

// HTML内容を変更
document.querySelector('.content').innerHTML = '<p>新しい<strong>内容</strong>です</p>';
```

### スタイルの変更

```javascript
const box = document.querySelector('.box');
box.style.backgroundColor = 'blue';
box.style.width = '200px';
box.style.padding = '20px';
```

### クラスの追加と削除

```javascript
const element = document.querySelector('.my-element');
element.classList.add('active');     // クラスを追加
element.classList.remove('hidden');  // クラスを削除
element.classList.toggle('visible'); // クラスがあれば削除、なければ追加
```

### 新しい要素の作成と追加

```javascript
// 新しい要素を作成
const newParagraph = document.createElement('p');
newParagraph.textContent = '新しい段落です';

// 既存の要素に追加
document.body.appendChild(newParagraph);
```

## イベント処理
ユーザーの操作（クリック、入力など）に反応するための仕組みです。

```javascript
// クリックイベント
const button = document.querySelector('button');
button.addEventListener('click', function() {
  alert('ボタンがクリックされました！');
});

// 簡略版
button.onclick = function() {
  alert('ボタンがクリックされました！');
};

// 入力イベント
const input = document.querySelector('input');
input.addEventListener('input', function(event) {
  console.log('入力値:', event.target.value);
});

// マウスオーバーイベント
const link = document.querySelector('a');
link.addEventListener('mouseover', function() {
  this.style.color = 'red';
});
link.addEventListener('mouseout', function() {
  this.style.color = 'blue';
});
```

## よく使うイベントの種類
- `click`: クリックされたとき
- `dblclick`: ダブルクリックされたとき
- `mouseover`: マウスが要素の上に乗ったとき
- `mouseout`: マウスが要素から離れたとき
- `keydown`: キーボードのキーが押されたとき
- `keyup`: キーボードのキーが離されたとき
- `submit`: フォームが送信されたとき
- `change`: 入力値が変更されたとき
- `load`: ページや画像などが読み込まれたとき

## デバッグの基本

### コンソールに出力
```javascript
console.log('確認したい値:', myVariable);
console.error('エラーメッセージ');
console.warn('警告メッセージ');
```

### アラートで表示
```javascript
alert('確認用メッセージ');
```

## 非同期処理

### setTimeout（一定時間後に処理を実行）
```javascript
setTimeout(function() {
  console.log('3秒後に実行されます');
}, 3000);  // 3000ミリ秒（3秒）後に実行
```

### setInterval（一定間隔で繰り返し実行）
```javascript
const timerId = setInterval(function() {
  console.log('1秒ごとに実行されます');
}, 1000);  // 1000ミリ秒（1秒）ごとに実行

// 停止する場合
clearInterval(timerId);
```

## よくあるミス

- セミコロン（;）の忘れ
- 括弧（( ), { }）の対応ミス
- 変数名のタイプミス
- 大文字と小文字の区別（JavaScriptは大文字小文字を区別する）
- 文字列の引用符の不一致（開始と終了で同じ種類の引用符を使う）

## JavaScriptの学習ポイント

- コンソールでの出力（console.log）を活用して動作を確認する
- デベロッパーツールのConsoleタブでエラーを確認する
- 小さな機能から実装して段階的に拡張する
- コピー&ペーストよりも自分で書いて理解する
- エラーメッセージをよく読む習慣をつける

## 次のステップ

JavaScriptの基本を理解したら、以下のトピックに進むとよいでしょう：

1. より高度なDOM操作
2. イベント処理のさらなる理解
3. 非同期処理（Promise、async/await）
4. APIからのデータ取得
5. ローカルストレージの活用
6. JavaScriptフレームワーク（React、Vue.jsなど） 