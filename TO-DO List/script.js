const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;
        li.className = 'task-item';
        li.addEventListener('click', toggleTask);
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function toggleTask(event) {
    const taskItem = event.target;
    taskItem.classList.toggle('completed');
}

// You can add more functionality like deleteTask, saving tasks to localStorage, etc.