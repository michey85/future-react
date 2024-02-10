// @ts-expect-error
import { Suspense, useOptimistic } from "react";

import { Form } from "./Form";
import { TodoList } from "./TodoList";
import "./App.css";
import { useTodos } from "./useTodos";
import { TodosAsync } from "./TodosAsync";
import { getTodos } from "./helpers";

const App = () => {
  const todos = useTodos((state) => state.todos);

  const [optimisticTodos, optimisticAddTodo] = useOptimistic<string[], string>(
    todos,
    (state: string[], item: string) => [...state, item]
  );

  return (
    <>
      {/* <title>Future of React</title> */}
      {/* <meta name="description" content="New features of React" /> */}
      {/* <style>{`h1 {color: red;}`}</style> */}
      <div className="content">
        <h1>React 19?</h1>
        {/* <Form optimisticAddTodo={optimisticAddTodo} />
        <TodoList optimisticTodos={optimisticTodos} /> */}
        <Suspense fallback={"Loading..."}>
          <TodosAsync getTodos={getTodos} />
        </Suspense>
      </div>
    </>
  );
};

export default App;
