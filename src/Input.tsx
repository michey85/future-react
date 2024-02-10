interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}


const Input = (props: InputProps) => {
  return (
    <input {...props} />
  )
}

export {Input};