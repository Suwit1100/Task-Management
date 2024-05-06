import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import AddForm from './components/AddForm'
import Item from './components/Item'

function App() {
  const [task, setTask] = useState([
    { id: 1, title: "แมว" }
    ,
    { id: 2, title: "หมา" }
    ,
    { id: 3, title: "ไก่" }
    ,
  ]);
  const [title, setTitle] = useState("");

  function deletetask(id) {
    console.log(id);
    const result_delete = task.filter(item => item.id !== id)
    setTask(result_delete);
  }

  function savetask(e) {
    e.preventDefault();
    if (!title) {
      alert("กรุณากรอกข้อมูล")
    } else {
      const newTask =
      {
        id: Math.floor(Math.random() * 1000),
        title: title
      }
      setTask([...task, newTask])
      console.log(newTask);
      setTitle("")
    }



  }

  return (
    <div className='App'>
      <Header></Header>
      <div className="container">
        <AddForm title={title} setTitle={setTitle} savetask={savetask}></AddForm>
        {task.map((item) => {
          return (
            <Item key={item.id} data={item} deletetask={deletetask}></Item>
          );
        })}
      </div>
    </div>
  )
}

export default App
