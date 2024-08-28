import React, { useEffect, useState } from 'react'

export const ThemeProvider = ({ props }) => {
    const [theme, setTheme] = useState("light")

    useEffect(() => {
        if(theme == "dark"){
            document.body.classList.add("dark")
        }else{
            document.body.classList.remove("dark")
        }
    },[theme])

    return (
        <div>
            {props.render([theme,setTheme])}
        </div>
    )
}
