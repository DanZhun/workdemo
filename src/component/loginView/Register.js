import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import axios from "axios"

import { useAuth, useUserName } from "../../utils/Context"
import { sweetAlert, showToast } from '../../utils/sweetalert'

function SignUp () {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()
  let navigate = useNavigate()
  const { setToken } = useAuth()
  const { setUserName } = useUserName()
  const onSubmit = data => {
    setLoading(true)
    const { email, password, checkPassword, nickname } = data
    if (password !== checkPassword) {
      sweetAlert('Password is not the same', 'Please confirm password', 'warning')
      setLoading(false)
      return
    }
    axios.post(process.env.REACT_APP_API_URL+'/users', {
      'user': { 
        'email': email,
        'password': password,
        'nickname': nickname
      }
    }).then(res => {
      setToken(res.headers.authorization)
      setUserName(res.data.nickname)
      setLoading(false)
      navigate('/TodoHome', { replace: true })
      showToast('Register Success', 'success')
    }).catch(err => {
      if (err.response && err.response.data && err.response.data.error) {
        sweetAlert(err.response.data.message, err.response.data.error[0], 'warning')
      } else {
        console.log(err)
        sweetAlert('Something went wrong', 'Please try again later', 'warning')
      }
      setLoading(false)
    })
  }


  return (
    <div>
      <form className="flex flex-col font-bold tracking-wide" onSubmit={ handleSubmit(onSubmit) }>
        <h2 className="text-2xl mt-10 text-white text-center">&lt; REGISTER &gt;</h2>
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
        <span className="text-orange-300 text-sm text-shadow">{ errors.email?.message }</span>
        <label className="text-sm text-white text-shadow mt-4" htmlFor="name">NICKNAME</label>
        <input className="w-full mt-2 p-3 border-0 rounded-xl" type="text" name="name" id="name"
        placeholder="enter nickname..." required defaultValue=""
          { ...register("nickname", {
            required: {
              value: true,
              message: "Required"
            },
            minLength: {
              value: 2,
              message: "at least 2 characters"
            }
          })}
        />
        <span className="text-orange-300 text-sm text-shadow">{ errors.nickname?.message }</span>
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
        <label className="text-sm text-white text-shadow mt-4" htmlFor="rePwd">PASSWORD AGAIN</label>
        <input className="w-full mt-2 p-3 border-0 rounded-xl" type="password" name="pwd" id="rePwd"
        placeholder="enter password again..." required defaultValue=""
          { ...register("checkPassword", {
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
        <span className="text-orange-300 text-sm text-shadow">{ errors.checkPassword?.message }</span>
        <button className="w-40 mx-auto bg-cyan-500 hover:bg-cyan-600 rounded-xl text-white py-3 mt-8" type="submit">
          {
            loading ? 
              <div className="spinner-border spinner-border-sm text-light" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
          : 'Register'
          }
          
        </button>
        <Link to={ '/login' } className="text-cyan-300 text-center p-3">Login</Link>
      </form>
      
    </div>
  )
}

export default SignUp