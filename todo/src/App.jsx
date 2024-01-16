import { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();

    setTodos([...todos, todo])
  }

  return (<>
    <form onSubmit={handleSubmit}>
      <label>Enter your todo:
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)} />

      </label>
      <input type="submit" />
    </form>

  



    <div class="todo-list">
      {
        todos.map((todo, index) => {
          return (<><p key={index}>{todo}</p >

            <button> Löschen </button>

          </>)
        })
      }
    </div>
  </>
  )

}
export default App

