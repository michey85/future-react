import { useTodos } from "./useTodos";

interface TodoListProps {
  optimisticTodos: string[];
}

const TodoList = ({ optimisticTodos }: TodoListProps) => {
  // const todos = useTodos((state) => state.todos);
  return (
    <ul>
      {optimisticTodos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
};

export { TodoList };
