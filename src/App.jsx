import { useState } from 'react'
import LandingPage from './LandingPage';
import 'App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <LandingPage />
    </div>
  )
}

export default App
