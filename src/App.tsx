import s from './App.module.scss'
import { Login } from './components/Login'
import { Logo } from './components/Logo'

export const App = () => {
  return (
    <main className={s.wrapper}>
      <Logo className={s.logo} />
      <Login />
    </main>
  )
}

