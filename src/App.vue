<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>

    <CompletedTodo  />
    <AddTodo />
    <!-- <input 
    v-model="todoText"
    type="text" 
    class="w-100"
    placeholder="Type todo" 
    @keyup.enter="addTodo"
    > -->
    <hr>
    <!-- <Todo v-for="todo in todos" :key="todo.id" :todo="todo" @toggle-checkbox="toggleCheckbox" @click-delete="deleteTodo"/> -->
    <TodoList />
    <UserList/>
    {{todos}}
  </div>
  
</template>
<script>
import TodoList from '@/components/TodoList';
import AddTodo from '@/components/AddTodo';
import CompletedTodo from '@/components/CompletedTodo';
import UserList from '@/components/UserList';

export default {
  components :{
    TodoList,
    AddTodo,
    CompletedTodo,
    UserList
  },
  data(){
    return {
      todoText :'',
      // todos :[
      //   { id:1, text:"play game ", checked : false },
      //   { id:2, text:"drink water", checked : false },
      //   { id:3, text:"cooking some foods", checked : false }
      // ]
    }
  },
  methods :{
    //  addTodo(e){
    //   //console.log(e.tartget.value);
    //   // this.todos.push({
    //   //   id: Math.random(),
    //   //   text : value,
    //   //   checked :false

    //   // })
    //   // this.todoText='';
    //  },
    // toggleCheckbox({id,checked}){
    //   console.log(id,checked)
    //   const index =this.todos.findIndex(todo =>{
    //     return todo.id == id;
    //   });
    //   this.todos[index].checked=checked;

    // },
    // deleteTodo(id){
    // //   const index =this.todos.findIndex(todo => {return todo.id=== id
    // //   });
    // //   this.todos.splice(index,1);

    
    // // this.todos = this.todos.filter(todo => todo.id !== id);
    //  }
  }
}
</script>
<style>


</style>
