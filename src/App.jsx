import './App.css'
import { Block } from './components/Block/Block'
import { ThemeProvider } from './components/ThemeProvider'
function App() {

  return (
    <>
      <div className="container">
        <ThemeProvider render={(themState) => {
          return <>
            <Block themState={themState}/>
          </>
        }}>
        </ThemeProvider>
      </div>
    </>
  )
}

export default App
