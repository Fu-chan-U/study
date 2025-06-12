// 1. HTMLの要素を取得する

// IDが "message" の要素（<p>タグ）を見つけて、'messageElement' という名前の箱（変数）に入れる
const messageElement = document.getElementById('message');

// IDが "changeButton" の要素（<button>タグ）を見つけて、'changeButtonElement' という名前の箱（変数）に入れる
const changeButtonElement = document.getElementById('changeButton');


// 2. ボタンがクリックされたときの処理を設定する

// 'changeButtonElement'（ボタン）に対して、「クリック」されたら、以下の {} の中の処理を実行するように命令する
changeButtonElement.addEventListener('click', () => {
  // 3. メッセージ要素のテキストを変更する
  messageElement.textContent = 'こんにちは、JavaScriptの世界へ！ようこそ！';
}); 