Vue.createApp({
  data() {
    return {
      todos: [],
      enteredValue: ''
    };
  },
  methods: {
    addTodo() {
      if (this.enteredValue != "") {
        this.todos.push(this.enteredValue);
        this.enteredValue = ""
      } else {
        alert('Type something')
      }

    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    }
  }
}).mount('#app');