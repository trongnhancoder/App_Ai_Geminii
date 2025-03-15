import { useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import "../components/Sidebar/Sidebar.css";
import Main from '../components/Main/Main';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Sidebar/>
     <Main/>
    </>
  )
}

export default App
