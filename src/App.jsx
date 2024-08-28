import './App.css'
import { Block } from './components/Block/Block'
import { ThemeProvider } from './components/ThemeProvider'
function App() {

  return (
    <>
      <div className="container">
        <ThemeProvider render={(themeState) => {
          return <>
            <Block themeState={themeState}/>
          </>
        }}>
        </ThemeProvider>
      </div>
    </>
  )
}

export default App
