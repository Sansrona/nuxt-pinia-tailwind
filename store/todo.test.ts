import { beforeAll, describe, expect, test } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useTodoStore } from "./useTodoStore";

beforeAll(() => {
    setActivePinia(createPinia());
  });

describe("todo", () => {
  
  test("todo store", () => {
    const todoStore = useTodoStore();
    todoStore.add({title: 'My name is james'});
    expect(todoStore.items[0].title).toBe('My name is james');
  });
});
