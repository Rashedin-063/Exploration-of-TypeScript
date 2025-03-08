import { useEffect, useState } from "react"

interface User {
  id: number;
  userName: string
}


const App = () => {
  const [count, setCount] = useState<number>(0)
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    console.log('mounting');
    console.log('Users:', users);
    

    return () => console.log('unmount');
    
    
  },[users])

  return (
    <div>App</div>
  )
}
export default App