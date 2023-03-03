import './style.css';

const toDoTasks = [{
  description: 'Eat food',
  completed: false,
  index: 0,
}, {
  description: 'sleep',
  completed: false,
  index: 1,
}, {
  description: 'Watch videos',
  completed: false,
  index: 2,
}];

const listContainer = document.querySelector('.to-do');

toDoTasks.forEach((task) => {
  listContainer.innerHTML += `
  <li class="listItem"><input type="checkbox" class="check" id="${task.index}">${task.description} <i class="fa-solid icon fa-ellipsis-vertical"></i></li>`;
});
