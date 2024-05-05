import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import AddForm from './components/AddForm'
import Item from './components/Item'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Header></Header>
      <div className="container">
        <AddForm></AddForm>
        <Item></Item>
      </div>
    </div>
  )
}

export default App
