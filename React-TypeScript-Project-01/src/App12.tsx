import { useState } from "react";
import Counter from "./components/Counter"
import Heading from "./components/Heading"
import Section from "./components/Section"
import List from "./components/List";

const items = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grape',
  'Honeydew',
  'Kiwi',
  'Lemon',
  'Mango',
  'Nectarine',
  'Orange',
  'Pineapple',
  'Quince',
  'Raspberry',
  'Strawberry',
  'Tangerine',
  'Uva',
  'Watermelon',
  'Yankee',
  'Zucchini', // Add more fruits as needed!
];

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
      <List items={items} render={(item: string) => <span className="gold">{item}</span>} />
    </div>
  )
}
export default App