<template>
  <div>
    <div class="row">
      <input v-model="todoText" class="col form-control mx-2" type="text" />
      <button @click="addTodo(todoText)" class="btn btn-primary">add</button>
    </div>
  </div>
</template>

<script>

import {mapActions} from 'vuex'

export default {
    data(){
        return {
            TodoText : "",
        };
    },
    methods:{
        ...mapActions(['addTodo'])
    },
   
};
</script>

<style lang="scss" scoped></style>
