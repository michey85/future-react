// @ts-expect-error
import { useOptimistic } from "react";

import { Form } from "./Form";
import { TodoList } from "./TodoList";
import "./App.css";
import { useTodos } from "./useTodos";

const App = () => {
  const todos = useTodos((state) => state.todos);
  // const { optimisticAddTodo } = useTodos((state) => state.actions);

  const [optimisticTodos, optimisticAddTodo] = useOptimistic<string[], string>(
    todos,
    (state: string[], item: string) => [...state, item]
  );

  console.log({ todos, optimisticTodos });

  return (
    <>
      {/* <title>Future of React</title> */}
      {/* <meta name="description" content="New features of React" /> */}
      {/* <style>{`h1 {color: red;}`}</style> */}
      <div className="content">
        <h1>React 19?</h1>
        <Form optimisticAddTodo={optimisticAddTodo} />
        <TodoList optimisticTodos={optimisticTodos} />
      </div>
    </>
  );
};

export default App;
