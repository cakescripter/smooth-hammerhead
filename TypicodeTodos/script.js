const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = () => {
  fetch(apiUrl + '?_limit=10')
    .then(res => res.json())
    .then(data => {
      data.forEach((todo) => {
        const div = document.createElement('div');
        div.appendChild(document.createTextNode(todo.title));

        if (todo.completed) {
          div.classList.add('done');
        }

        document.querySelector('#todo-list').appendChild(div);
      })
    });
};

getTodos();