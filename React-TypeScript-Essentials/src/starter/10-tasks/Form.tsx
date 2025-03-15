import { FormEvent, useState } from "react";

const Form = () => {

  const [text, setText] = useState('')

  const handleSubmit = (e: FormEvent) => { 
    e.preventDefault()
  }

  return (
    <form className='form task-form' onSubmit={handleSubmit}>
      <input
        type='text'
        className='form-input'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type='submit' className='btn'>
        add task
      </button>
    </form>
  );
}
export default Form