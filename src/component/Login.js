import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import axios from "axios"
import { useAuth, useUserName } from "../../utils/Context"
import { sweetAlert, showToast } from '../../utils/sweetalert'

function Login () {
  const { register, handleSubmit, formState: { errors } } = useForm()
  let navigate = useNavigate()
  const { setToken } = useAuth()
  const { setUserName } = useUserName()
  const [loading, setLoading] = useState(false)
  const onSubmit = data => {
    setLoading(true)
    const { email, password } = data
    axios.post(process.env.REACT_APP_API+'/users/sign_in', {
      'user': { 
        'email': email, 
        'password': password
      }
    }).then(res => {
      setToken(res.headers.authorization)
      setUserName(res.data.nickname)
      showToast('Login Success', 'success')
      setLoading(false)
      navigate('/todolist', { replace: true })
    }).catch(err => {
      sweetAlert(err.response.data.message , 'Email or Password wrong.<br>Or register a new one', 'warning')
      setLoading(false)
    })
  }

  return (
    <div>
      <form className="flex flex-col font-bold tracking-wide" onSubmit={ handleSubmit(onSubmit) }>
        <h2 className="text-2xl mb-14 text-white text-center">Future World TodoList Serve</h2>
        <label className="text-sm text-white text-shadow" htmlFor="email">EMAIL</label>
        <input className="w-full mt-2 p-3 border-0 rounded-xl" type="text" id="email" name="email"
        placeholder="enter email..." required defaultValue=""
          { ...register("email", {
            required: {
              value: true,
              message: "Required"
            },
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message: "not follow Email rule"
            }
          })}
        />
        <span className="text-orange-300 text-sm text-shadow mt-1">{ errors.email?.message }</span>
        <label className="text-sm text-white text-shadow mt-4" htmlFor="pwd">PASSWORD</label>
        <input className="w-full mt-2 p-3 border-0 rounded-xl" type="password" name="pwd" id="pwd"
        placeholder="enter password..." required defaultValue=""
          { ...register("password", {
            required: {
              value: true,
              message: "Required"
            },
            minLength: {
              value: 6,
              message: "at least 6 characters"
            }
          })}
        />
        <span className="text-orange-300 text-sm text-shadow">{ errors.password?.message }</span>
        <button className="w-40 mx-auto bg-cyan-500 hover:bg-cyan-600 rounded-xl text-white py-3 mt-8" type="submit">
          {
            loading ? 
              <div className="spinner-border spinner-border-sm text-light" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
          : 'Login'
          }
        </button>
        <Link to={ '/register' } className="text-cyan-300 text-center p-3">Register</Link>
      </form>
    </div>
  )
}

export default Login