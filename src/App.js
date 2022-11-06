import logo from './logo.svg'
import './App.css'
import '@fontsource/roboto/300.css' //TODO dat nekam jinam
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { TestButton } from './components/TestButton'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <TestButton label="ahoj" />
    </div>
  )
}

export default App
