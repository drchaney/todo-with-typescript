import React from 'react'

interface Props{
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({ todo, setTodo }: Props) => {
  return (
    <form className="input">
      <input type='input' placeholder="enter a task" className="input__box"/>
      <button className="input__submit" type="submit">go</button> 
    </form>
  )
}

export default InputField
