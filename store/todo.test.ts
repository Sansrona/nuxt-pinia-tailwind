import {
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  test,
} from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useTodoStore } from "./useTodoStore";

beforeAll(() => {
  setActivePinia(createPinia());
});

describe("todo", () => {
  let store: ReturnType<typeof useTodoStore>;
  beforeEach(() => {
    store = useTodoStore();
  });

  afterEach(() => {
    store?.$reset();
  });
  test("todo store", () => {
    expect(store).toBeDefined();
  });
  test("initialized store", () => {
    expect(store.items).toStrictEqual([]);
  });
  test("add", () => {
    store.add({ title: "title" });
    expect(store.items[0].title).toBe("title");
  });
  test("item equal", () => {
    store.add({ title: "title" });
    const item = store.items[0];
    const todo = store.getById(item.id);
    expect(todo).toStrictEqual(item);
  });
  test("ordered items", () => {
    const items = [
      { createdAt: new Date(2021, 2, 25) },
      { createdAt: new Date(2019, 2, 25) },
      { createdAt: new Date(2022, 2, 25) },
    ];
    // @ts-ignore
    store.items = items;

    const orderedList = store.getOrderedItems;

    expect(orderedList[0].createdAt.getFullYear()).toBe(2019);
    expect(orderedList[1].createdAt.getFullYear()).toBe(2021);
    expect(orderedList[2].createdAt.getFullYear()).toBe(2022);
  });

  test("item removed", () => {
    store.add({ title: "title" });
    const todo = store.items[0];
    store.remove(todo.id);
    expect(store.items.length).toBe(0);
  });
  test("update a todo", () => {
    store.add({ title: "hey" });
    const todo = store.items[0];
    store.update(todo.id, { done: true });
    
    const pdate = store.items[0];
    expect(pdate.done).toBe(true);
  });
});
