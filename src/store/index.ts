import { create } from "zustand";
import { ITodo } from "@/interfaces/ITodo";

interface State {
  todos: ITodo[];
  setTodo: (todo: ITodo) => void;
  removeCompletedTodos: () => void;
  changeTodoStatus: (id: ITodo["id"]) => void;
  removeAllTodos: () => void;
}

export const useTodosStore = create<State>()((set) => ({
  todos: [],
  setTodo: (todo) =>
    set((state) => ({
      todos: [todo, ...state.todos],
    })),
  removeCompletedTodos: () =>
    set((state) => ({
      todos: state.todos.filter((item) => item.complete === false),
    })),
  changeTodoStatus: (id) =>
    set((state) => {
      const todoIndex = state.todos.findIndex((item) => item.id === id);
      const newTodos = [...state.todos];
      newTodos[todoIndex].complete = !newTodos[todoIndex].complete;
      return { ...state, todos: newTodos };
    }),
  removeAllTodos: () =>
    set((state) => ({
      ...state,
      todos: [],
    })),
}));
