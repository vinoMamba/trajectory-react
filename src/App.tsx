import './App.css'
import { useDark } from './hooks/useDark'

export const App = () => {
  const [_, toggleDark] = useDark()
  return (
    <div className="App">
      <button onClick={() => toggleDark()}>toggle</button>
    </div >
  )
}

