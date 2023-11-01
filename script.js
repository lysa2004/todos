// script.js
document.addEventListener('DOMContentLoaded', function () {
    const taskList = document.querySelector('ul');
    const newTaskInput = document.querySelector('#new-task');
    const addTaskButton = document.querySelector('#add-task');

    addTaskButton.addEventListener('click', function () {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <input type="checkbox">
                <span>${taskText}</span>
                <button class="delete-button">X</button>
            `;
            taskList.appendChild(listItem);
            newTaskInput.value = '';
        }
    });

    newTaskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTaskButton.click();
        }
    });

    taskList.addEventListener('click', function (event) {
        if (event.target.type === 'checkbox') {
            const task = event.target.nextElementSibling; // Sélectionne le texte
            task.style.textDecoration = event.target.checked ? 'line-through' : 'none';
        } else if (event.target.classList.contains('delete-button')) {
            event.target.parentElement.remove();
        }
    });
});
