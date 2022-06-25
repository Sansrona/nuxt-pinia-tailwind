import { defineStore } from "pinia";
import { v4 as uuid } from "uuid";

export interface Todo {
  id: string;
  title: string;
  done: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface TodoAdd {
  title: string;
}

export interface TodoUpdate {
  title?: string;
  done?: boolean;
}

export interface TodoState {
  items: Todo[] | undefined[];
}

export const useTodoStore = defineStore("todoStore", {
  state: (): TodoState => ({
    items: [],
  }),
  getters: {
    getById: (state: TodoState) => (id: string) => {
      return state.items.find((item: Todo) => item.id === id);
    },
    getOrderedItems: (state: TodoState) => {
      return [...state.items].sort(
        (a: Todo, b: Todo) =>
          a.createdAt.getTime() - b.createdAt.getTime()
      );
    },
  },
  actions: {
    add(partialTodo: TodoAdd) {
      const todo: Todo = {
        id: uuid(),
        ...partialTodo,
        done: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      this.items.push(todo);
    },
    remove(id: string) {
      this.items = this.items.filter((item: Todo) => item.id !== id);
    },
    update(id: string, update: TodoUpdate) {
      this.items = this.items.map(
        (item: Todo) =>
          item.id === id && { ...item, ...update, updatedAt: new Date()});
    },
  },
});
