const form = document.querySelector('#form');
const formOfInput = document.querySelector('#taskInput');
const tasksList = document.querySelector('#tasksList');
const emptyList = document.querySelector('#emptyList');

form.addEventListener('submit',addTask)//submit - срабатывает приотправке формы

function addTask(event){
    event.preventDefault();// при отправке евента событие на странице не произойдет
    //Достаем текст задачи для поля ввода
    const taskText = formOfInput.value;
    //Формируем разметку для новой задачи
    const taskHTML =
    `<li class="list-group-item d-flex justify-content-between task-item">
    <span class="task-title">${taskText}</span>
    <div class="task-item__buttons">
        <button type="button" data-action="done" class="btn-action">
            <img src="./img/tick.svg" alt="Done" width="18" height="18">
        </button>
        <button type="button" data-action="delete" class="btn-action">
            <img src="./img/cross.svg" alt="Done" width="18" height="18">
        </button>
    </div>
    </li>`
        // Добавляем эелемент с разметкой и данными из инпута перед концом элемента
    tasksList.insertAdjacentHTML('beforeend', taskHTML); 
        //очищаем поле ввода и возвращаем фокус на инпут
    formOfInput.value = '';
    formOfInput.focus();
        //Проверка если в списке задачь больше одного элемента то мы его крываем
    if(emptyList.children.length > 1){
        emptyList.classList.add('none');
    };
};

