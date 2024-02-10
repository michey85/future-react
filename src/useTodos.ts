import { create } from "zustand";
import { wait } from "./helpers";

type TodoStore = {
  todos: string[];
  actions: {
    addTodo: (prevState: unknown, formData: FormData) => void;
    removeTodo: (todo: string) => void;
  };
};

export const useTodos = create<TodoStore>()((set, get) => ({
  todos: [],
  actions: {
    // addTodo: async (formData) => {
    //   await wait(3000);
    //   set((state) => ({
    //     todos: [...state.todos, formData.get("todo") as string],
    //   }));
    // },
    addTodo: async (prevState, formData) => {
      await wait(3000);

      set((state) => ({
        todos: [...state.todos, formData.get("todo") as string],
      }));

      return "Total todos: " + get().todos.length;
    },

    removeTodo: (todo) =>
      set((state) => ({ todos: state.todos.filter((t) => t !== todo) })),
  },
}));
