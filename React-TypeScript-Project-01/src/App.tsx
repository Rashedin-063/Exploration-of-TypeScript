import { useState } from "react";
import Counter from "./components/Counter"
import Heading from "./components/Heading"
import Section from "./components/Section"

const App = () => {
  const [count, setCount] = useState<number>(1);
  
  return (
    <div>
      <Heading title='Hello Title' />
      <Section title="Different Title">
        <p>This is a section</p>
      </Section>
      <Counter setCount={setCount}>
        Count is {count}</Counter>
    </div>
  )
}
export default App