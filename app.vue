<template>
  <div>
    <div class=" mt-2.5 bg-red-900">
      hi
    </div>
    <div class=" mt-2.5 bg-yellow-400">{{ counter.counter }} | {{counter.doubleCount}}</div>
    <button class=" border-2 border-solid border-green-700 text-white bg-indigo-900" @click="counter.increment">Increment</button>
  </div>
</template>
<script setup>
import { useTodoStore } from './store/useTodoStore';

const counter = useTodoStore();
</script>
