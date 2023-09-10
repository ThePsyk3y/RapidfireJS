const taskInput = document.getElementById('task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

console.log(addTaskButton);

addTaskButton.addEventListener('click', addTask);

taskList.addEventListener('click', toggleTaskComplete);
taskList.addEventListener('click', editTask);
taskList.addEventListener('click', deleteTask);

let completeIcon = '<ion-icon name="checkmark-done-outline"></ion-icon>';
let editIcon = '<ion-icon name="create-outline"></ion-icon>';
let saveIcon = '<ion-icon name="save"></ion-icon>';
let deleteIcon = '<ion-icon name="close-circle-outline"></ion-icon>';

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    li.innerHTML = `
            <input type="text" value="${taskText}" disabled id="${taskText}"/>
            <div className="buttons">
            <button class="complete-button">${completeIcon}</button>
            <button class="edit-button">${editIcon}</button>
            <button class="delete-button">${deleteIcon}</button>
            </div>
        `;
    taskList.appendChild(li);
    taskInput.value = '';
  }
}

function toggleTaskComplete(e) {
  if (e.target.classList.contains('complete-button')) {
    const taskText = e.target.parentElement.parentElement.querySelector('input');
    taskText.classList.toggle('completed');
  }
}

function deleteTask(e) {
  if (e.target.classList.contains('delete-button')) {
    const listItem = e.target.parentElement.parentElement;
    taskList.removeChild(listItem);
  }
}

function editTask(e) {
  if (e.target.classList.contains('edit-button')) {
    const parentInput = e.target.parentElement.parentElement.firstElementChild;
    if (parentInput.disabled) {
      parentInput.disabled = false;
      e.target.innerHTML = saveIcon;
    } else {
      parentInput.disabled = true;
      e.target.innerHTML = editIcon;
    }
  }
}
