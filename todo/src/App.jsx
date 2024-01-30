import { useState } from 'react'
import './App.css'
import {ChangeBGButton} from "./components/ChangeBGButton"
import {ChangeBGButton2} from "./components/ChangeBGButton2"





function Delete_Button({ onDeleteFunction }) {
  return (
    <button style={{
      backgroundColor: "red",
      color: "white",



    }} onClick={() => {
      onDeleteFunction()
    }}>Delete</button>
  )
}
function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();

    setTodos([...todos, todo])
    setTodo("")
  }





  return (<>
    <form onSubmit={handleSubmit}>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        color: "black",
      }}>

        <p>Eingabe</p>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)} />

        <button style={{
          backgroundColor: "green",
          color: "white",

        }} onClick={() => {
          handleSubmit()
        }}>Add</button>
      </div>

    </form >

    <ChangeBGButton />
    <ChangeBGButton2 />


    <div class="todo-list" >
      {
        todos.map((todo, index) => {
          return (<div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "lightblue",
            margin: 10,
            padding: 10,
            borderRadius: 10,
          }}><p key={index}>{todo}</p >

            <Delete_Button onDeleteFunction={() => {
              const newTodos = todos.filter((todo, i) => {
                return i !== index
              })
              setTodos(newTodos)
            }} />

          </div>)
        })
      }
    </div>
  </>
  )

}
export default App

