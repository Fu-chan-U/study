// 要素を取得
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// ローカルストレージからタスクを読み込む
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// 初期表示時にタスクを表示
renderTasks();

// 追加ボタンのクリックイベント
addButton.addEventListener('click', addTask);

// Enterキーでもタスク追加できるようにする
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

// タスクを追加する関数
function addTask() {
    // 入力値を取得
    const taskText = taskInput.value.trim();
    
    // 空の場合は何もしない
    if (taskText === '') {
        return;
    }
    
    // 新しいタスクを作成
    const newTask = {
        id: Date.now(), // 一意のIDとして現在時刻を使用
        text: taskText,
        completed: false
    };
    
    // タスク配列に追加
    tasks.push(newTask);
    
    // ローカルストレージに保存
    saveToLocalStorage();
    
    // タスクを画面に表示
    renderTasks();
    
    // 入力欄をクリア
    taskInput.value = '';
    
    // 入力欄にフォーカスを戻す
    taskInput.focus();
}

// タスクを画面に表示する関数
function renderTasks() {
    // リストをクリア
    taskList.innerHTML = '';
    
    // タスク配列をループして表示
    tasks.forEach(task => {
        // リストアイテム要素を作成
        const li = document.createElement('li');
        
        // タスクの状態によってクラスを追加
        if (task.completed) {
            li.classList.add('completed');
        }
        
        // タスクの内容を設定
        li.innerHTML = `
            <span onclick="toggleTask(${task.id})">${task.text}</span>
            <button class="delete-btn" onclick="deleteTask(${task.id})">削除</button>
        `;
        
        // リストに追加
        taskList.appendChild(li);
    });
}

// タスクの状態を切り替える関数
function toggleTask(id) {
    // 該当するタスクを探して状態を反転
    tasks = tasks.map(task => {
        if (task.id === id) {
            task.completed = !task.completed;
        }
        return task;
    });
    
    // ローカルストレージに保存
    saveToLocalStorage();
    
    // 画面を更新
    renderTasks();
}

// タスクを削除する関数
function deleteTask(id) {
    // 該当するタスクを除外
    tasks = tasks.filter(task => task.id !== id);
    
    // ローカルストレージに保存
    saveToLocalStorage();
    
    // 画面を更新
    renderTasks();
}

// ローカルストレージに保存する関数
function saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
} 