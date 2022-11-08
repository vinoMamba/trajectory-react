import './App.css'
import { useDark } from './hooks/useDark'
import { TextField } from '@mui/material';

export const App = () => {
  const [_, toggleDark] = useDark()
  return (
    <div className="App">
      <button onClick={() => toggleDark()}>toggle</button>
      <TextField label="邮箱" variant="standard" placeholder="请输入邮箱" />
      <TextField label="验证码" variant="standard" placeholder="验证码" />
    </div >
  )
}

