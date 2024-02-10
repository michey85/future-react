// @ts-expect-error
import { use } from "react";

interface TodosAsyncProps {
  getTodos: () => Promise<string[]>;
}

const TodosAsync = ({ getTodos }: TodosAsyncProps) => {
  const todos: string[] = use(getTodos());

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
};

export { TodosAsync };
