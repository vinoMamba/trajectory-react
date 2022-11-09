import { Login } from "../components/Login"
import { Logo } from "../components/Logo"
import s from "./home.module.scss"

export const Home = () => {
  return (
    <main>
      <Logo className={s.logo} />
      <Login />
    </main>
  )
}
