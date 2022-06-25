<template>
  <div class=" max-w-full min-h-screen bg-gray-100">
    <section class=" pt-7 text-center">
      <h1 class=" text-4xl text-gray-800">Title is here</h1>
    </section>
    <section class=" w-9/12 max-w-lg mx-auto flex items-center justify-center bg-white mt-7 p-5 shadow rounded">
      <form @submit.prevent >
        <input type="text" placeholder="add a todo" class=" py-2 px-4  border border-blue-200 rounded focus:border-blue-300"  />
        <button class=" transition-all duration-200 ml-3 px-4 py-2 border border-blue-200 rounded hover:bg-blue-400 hover:text-white">Add todo</button>
      </form>
    </section>
  </div>
</template>
<script setup>
import { useTodoStore } from './store/useTodoStore';

const counter = useTodoStore();
</script>
