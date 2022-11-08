import './App.css'
import { useDark } from './hooks/useDark'
import { Outlet } from "react-router-dom"

export const App = () => {
  const [_, toggleDark] = useDark()
  return (
    <div className="App">
      <button onClick={() => toggleDark()}>toggle</button>
      <Outlet />
    </div >
  )
}

