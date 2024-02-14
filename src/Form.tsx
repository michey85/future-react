// @ts-expect-error
import { useFormState } from "react-dom";

import { Input } from "./Input";
import { SubmitButton } from "./SubmitButton";
import { useTodos } from "./useTodos";

interface FormProps {
  optimisticAddTodo: (todo: string) => void;
}

const Form = ({ optimisticAddTodo }: FormProps) => {
  const { addTodo } = useTodos((state) => state.actions);
  const [message, formAction] = useFormState(addTodo, "Total todos: 0");

  const handleFormAction = async (formData: FormData) => {
    optimisticAddTodo(formData.get("todo") as string);
    await formAction(formData);
  };

  return (
    // @ts-ignore
    <form action={handleFormAction}>
      <Input placeholder="todo title" name="todo" />
      <SubmitButton>add todo</SubmitButton>

      <br />
      {message}
    </form>
  );
};

export { Form };
