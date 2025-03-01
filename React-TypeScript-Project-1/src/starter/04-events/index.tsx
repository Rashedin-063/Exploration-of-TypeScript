import { useState } from "react";

type Person = {
  name: string;
}

function Component() {

  const [text, setText] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const formData = new FormData(e.target as HTMLFormElement);
    const formData = new FormData(e.currentTarget);

    const data = Object.fromEntries(formData)

    console.log(data);

    //  

    const person: Person = { name: data.text as string }
    
    console.log(person);
    
  }

  return (
    <section>
      <h2>Events Example </h2>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" name="text" id="" className="form-input mb-1" value={text} onChange={(e) => setText(e.target.value)} />
        <input type="email" name="email" id="" className="form-input mb-1" value={email} onChange={handleChange} />
        
        <button type='submit' className="btn btn-block">Submit</button>
      </form>
    </section>
  );
}
export default Component;
