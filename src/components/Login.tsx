import { Button, TextField } from "@mui/material"
import s from "./login.module.scss"

export const Login = () => {
  return (
    <div className={s.wrapper}>
      <TextField label="邮箱" size="small" placeholder="请输入邮箱" />
      <div className={s.verifyCode}>
        <TextField label="验证码" size="small" placeholder="请输入验证码" />
        <Button variant="contained">发送验证码</Button>
      </div>
      <Button variant="contained">登录</Button>
    </div>
  )
}
