import { useState, useEffect } from 'react'

export function ChangeBGButton() {
  
  const [color, setColor] = useState("grey")

  const click = color => {
    setColor(color)
  }

   
  useEffect(() => {
    document.body.style.backgroundColor = color
  }, [color])

  
  return (<div className = "App">
    <button onClick = {
      () => click("white")
    }>White</button>
  </div>)
}

