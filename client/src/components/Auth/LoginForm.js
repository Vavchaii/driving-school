import { useContext, useState } from 'react'
import { Context } from '../..'
import classes from './LoginForm.module.css'
import img from './images/img-01.png'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { store } = useContext(Context)

  return (
    <div className={classes.limiter}>
      <div className={classes['container-login100']}>
        <div className={classes['wrap-login100']}>
          <div className={classes['login100-pic'] + ' ' + classes['js-tilt']}>
            <img src={img} alt="IMG" />
          </div>

          <form
            className={
              classes['login100-form'] + ' ' + classes['validate-form']
            }
          >
            <span className={classes['login100-form-title']}>
              Authorization
            </span>

            <div
              className={
                classes['wrap-input100'] + ' ' + classes['validate-input']
              }
            >
              <input
                className={classes.input100}
                type="text"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className={classes['focus-input100']}></span>
              <span className={classes['symbol-input100']}></span>
            </div>

            <div
              className={
                classes['wrap-input100'] + ' ' + classes['validate-input']
              }
              data-validate="Password is required"
            >
              <input
                className={classes.input100}
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className={classes['focus-input100']}></span>
            </div>

            <div className={classes['container-login100-form-btn']}>
              <button
                className={classes['login100-form-btn']}
                onClick={(e) => {
                  e.preventDefault()
                  store.login(email, password)
                }}
              >
                Login
              </button>
            </div>

            <div className={classes['text-center'] + ' ' + classes['p-t-136']}>
              <a className={classes.txt2} href="#212">
                Create your Account
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
