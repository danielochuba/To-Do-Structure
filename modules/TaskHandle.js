const todoList = document.querySelector('.todo-list');

//  function updateTodos(newTodos) {
//   const updatedTodos = [];
//   for (let i = 0; i < newTodos.length; i += 1) {
//     updatedTodos.push({ ...newTodos[i], id: i + 1 });
//   }

//   localStorage.setItem('todos', JSON.stringify(updatedTodos));

//   const description = updatedTodos.map((todo) => `
//   <li class="card todo-list-item ${todo.completed ? 'completed' : ''}" data-id="${todo.id}">
//     <input type="checkbox" ${todo.completed ? 'checked' : ''} class="checkbox"/>
//     <input type="text" value="${todo.description}" class="inputtext" id="${todo.id}"/>
//     <button type="button">🗑</button>
//   </li>
// `).join('');

//   todoList.innerHTML = description;
// }
/**
 * Updates the todos list with new items.
 *
 * @param {Array} newTodos An array of new todo items to update the list with.
 */
const updateTodos = (newTodos) => {
  const updatedTodos = newTodos.map((todo, index) => ({ ...todo, id: index + 1 }));

  localStorage.setItem('todos', JSON.stringify(updatedTodos));

  const description = updatedTodos
    .map(
      (todo) => `
        <li class="card todo-list-item ${todo.completed ? 'completed' : ''}" data-id="${todo.id}">
          <input type="checkbox" ${todo.completed ? 'checked' : ''} class="checkbox"/>
          <input type="text" value="${todo.description}" class="inputtext" id="${todo.id}"/>
          <button type="button">🗑</button>
        </li>
      `,
    )
    .join('');

  todoList.innerHTML = description;
};

export default updateTodos;
