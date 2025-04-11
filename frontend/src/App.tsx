import './App.css'
import { test } from './api/imageFetch'

function App() {
  return (
    <>
      <button
        onClick={() => {
          console.log('hey')
          test();
        }}
      >
        hey
      </button>
    </>
  )
}

export default App
