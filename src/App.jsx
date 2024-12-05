import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [user, setUser] = useState(null)

  return (
    <>
  <Navbar user={user} />
<h1>Hello word!</h1>
    </>
  )
}

export default App
