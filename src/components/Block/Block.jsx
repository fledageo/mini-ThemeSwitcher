import React from 'react'
import "./styles.css"
export const Block = (props) => {
  const [theme, setTheme] = props.themeState
  const handleChangeTheme = () => {
    if (theme == "dark") {
      setTheme("light")
    }else{
      setTheme("dark")
    }
  }

  return (
    <div className='block'>
      <span>Hello Friend</span>
      <span>
        You can change the Theme
      </span>
      <button onClick={handleChangeTheme} className='changeBtn'>Change Theme</button>
    </div>
  )
}
