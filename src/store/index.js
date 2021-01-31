import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        title: "uno",
      },
      {
        id: 2,
        title: "dos",
      },
      {
        id: 3,
        title: "tres",
      },
    ],
  },
  getters:{
    allTodos:(state)=>state.todos,
  },
  actions: {
    addTodo({commit},todo){
      commit("add_todo",todo);
    },
  },
  mutations: {
    add_todo(state,todo){
      state.todos.push(todo);
      console.log(todo);
    },
  },
  modules: {},
});
