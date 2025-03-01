import { useState } from "react";
import { set } from "zod";

type Link = {
  id: number;
  url: string;
  text: string;
}

const navLinks = [
  { id: 1, url: 'some url', text: 'some text' },
  { id: 2, url: 'another url', text: 'another text' },
  { id: 3, url: 'another url', text: 'another text' },
]

function Component() {

  const [text, setText] = useState('shakeAndBake')
  const [number, setNumber] = useState<number>(1);
  const [list, setList] = useState<string[]>([])
  const [links, setLinks] = useState<Link[]>(navLinks)

  return (
    <div>
      <h2 className='mb-1'>React & Typescript</h2>
      <div style={{ textAlign: 'center' }}>
        <h3 className='center'>{text}</h3>
        <h3 className='mb-1'>{number}</h3>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          {links.map((link) => (
            <li
              style={{ fontSize: '18px', paddingBottom: '6px', }}
              key={link.id}
            >
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={() => {
          // setText('hello world');
          // setNumber(number + 1)
          // setList(['hello', 'world']);
          setLinks([
            ...links,
            { id: 4, url: 'http://localhost', text: 'hello' },
          ]);
        }}
        className='btn btn-center'
        style={{marginTop: '1rem'}}
      >
        Click Me
      </button>
    </div>
  );
}
export default Component;
