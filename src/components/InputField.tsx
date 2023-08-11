import React from 'react'

const InputField = () => {
  return (
    <form className="input">
      <input type='input' placeholder="enter a task" className="input__box"/>
      <button className="input__submit" type="submit">go</button> 
    </form>
  )
}

export default InputField
