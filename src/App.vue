<template>
  <v-app>
    <Nav/>
    <v-main>
     <div id="app" class="container">
       <TodoInput />
       <TodoList />
     </div>
      
    </v-main>
  </v-app>
</template>

<script>
import Nav from "@/components/Nav";
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";

export default {
  name: "App",

  components: {
    Nav,
    TodoInput,
    TodoList,
  },

  data: () => ({
    //
  }),
};
</script>
