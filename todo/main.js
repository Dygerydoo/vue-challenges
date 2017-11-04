var setDate = new Date(),
    locale = "es-ES",
    dateOptions = { weekday: 'long', month: 'long', day: 'numeric' }
    readableDate = setDate.toLocaleDateString(locale, dateOptions);

var todayDate = readableDate.charAt(0).toUpperCase() + readableDate.slice(1);

new Vue({
  el: '#app',
  data: {
    todoDate: todayDate,
    taskList: [
      'Hacer la compra',
      'Pasear al perro',
      'Llevar el coche al taller',
      'Comprarme camisetas',
    ],
    taskItem: '',
  },
  methods: {
    addTask: function() {
      if (this.taskItem === '') {
        alert('Debes escribir una tarea');
      } else {
        this.taskList.push(this.taskItem);
        this.taskItem = '';
      }
    }
  }
});