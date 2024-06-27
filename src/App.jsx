import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      useState Hook {count}
    </>
  )
}

export default App
