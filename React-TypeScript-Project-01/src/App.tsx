import { useState } from "react"

interface User {
  id: number;
  userName: string
}


const App = () => {
  const [count, setCount] = useState<number>(0)
  const [users, setUsers] = useState<number>(0);
  return (
    <div>App</div>
  )
}
export default App