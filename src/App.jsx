import { useState } from 'react'
import Sidebar from './components/Sidebar';
import Index from './components';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#002D62]'>
  <Index/>
{/* <Navbar /> */}
{/* <Sidebar /> */}
    </div>
  )
}

export default App
