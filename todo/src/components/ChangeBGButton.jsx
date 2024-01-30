import { useState, useEffect } from 'react'

export function ChangeBGButton() {
  
  const [color, setColor] = useState("white")

  const click = color => {
    setColor(color)
  }

   
  useEffect(() => {
    document.body.style.backgroundColor = color
  }, [color])

  
  return (<div className = "App">
    <button onClick = {
      () => click("darkgrey")
    }>Grey</button>
  </div>)
}

