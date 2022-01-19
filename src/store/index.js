import Vue from 'vue'
import Vuex from 'vuex'
import todo from './modules/todo'
import user from './modules/user'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   
    
  },
  mutations: {
    
  
  },
  actions: {
    //데이터베이스의 정보를 요청하고 받아오는동안 시간이 소요됨
    //비동기적으로 실행됨 setTimeOut
    //데이터베이스흉내를 내어 만듦

  

   

  },
  getters:{
    numberOfCompletedTodo: state => { 
      return state.todos.filter(todo => todo.checked).length; 
    }
  },
  modules: {
    todo ,
    user
  }
})
