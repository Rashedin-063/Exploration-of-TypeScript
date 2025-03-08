import { MouseEvent, useCallback, useEffect, useState, useMemo } from "react"

interface User {
  id: number;
  userName: string
}


type FibFunction = (n: number) => number ;

const fib:FibFunction = (n) => {
  if (n < 2) return n;

  return fib(n-1) + fib(n-2);
}

const myNum: number = 27;


const App = () => {
  const [count, setCount] = useState<number>(0)
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    console.log('mounting');
    console.log('Users:', users);
    

    return () => console.log('unmount');
    
    
  }, [users])
  
  const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent): void => setCount(prev => prev + 1), [])

  const result = useMemo<number>(() => fib(myNum), [])

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '90vh'}}>
      <h1 style={{textAlign: 'center', marginBottom: '1rem'}}>{count}</h1>
      <button onClick={addTwo}>Increment</button>
      <h2>{result}</h2>
    </div>
  )
}
export default App