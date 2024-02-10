// @ts-expect-error
import { useFormStatus } from "react-dom";

interface SubmitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const SubmitButton = ({ children }: SubmitButtonProps) => {
  const { pending, data, method, action } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? `adding ${data.get("todo")}` : children}
    </button>
  );
};

export { SubmitButton };
