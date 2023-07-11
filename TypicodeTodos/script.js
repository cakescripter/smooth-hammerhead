const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = () => {
  fetch(apiUrl + '?_limit=15')
    .then(res => res.json())
    .then(data => {
      data.forEach((todo) => addTodoToDOM(todo));
    });
};

const addTodoToDOM = (todo) => {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(todo.title));
  div.setAttribute('data-id', todo.id)

  if (todo.completed) {
    div.classList.add('done');
  }

  document.querySelector('#todo-list').appendChild(div);
}

const createTodo = (e) => {
  e.preventDefault();


  const newTodo = {
    title: e.target.firstElementChild.value,
    completed: false
  }

  fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => addTodoToDOM(data))
}

const init = () => {
  document.addEventListener('DOMContentLoaded', getTodos)
  document.querySelector('#todo-form').addEventListener('submit', createTodo);
}

init();

