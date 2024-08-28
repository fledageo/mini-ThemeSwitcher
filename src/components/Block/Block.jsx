import React from 'react'
import "./styles.css"
export const Block = ({props}) => {
  const [theme,setTheme] = props.themState
  const handleChangeTheme = () => {
    if(theme == "dark"){
        
    }
  }

  return (
    <div className='block'>
      <span>Hello Friend</span>
        <span>
          You can change the Theme
          <button onClick={handleChangeTheme}>Theme</button>
        </span>
    </div>
  )
}
