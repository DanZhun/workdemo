import { useNavigate } from "react-router-dom"
import { useEffect } from 'react'
import ListBoard from '../component/todoList/ListBoard'
import { useAuth, useUserName } from "../utils/Context"
import { checkLogIn } from '../utils/todoAPI'
import { showToast } from '../utils/sweetalert'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//image
import Logo from "../image/logo.svg"

function ListPage () {
  let navigate = useNavigate()
  const { token, setToken } = useAuth()
  const { userName } = useUserName()
  useEffect(() => {
    checkLogIn(token).catch(err => {
      console.log(err)
      showToast('Please Login again', 'warning')
      navigate('/todoHome', { replace: true })
    })
  }, [navigate, token])

  const logOut = () => {
    setToken(null)
    showToast('Have been logout', 'success')
  }

  return (
    <div id="todoListPage">
      <nav className="flex justify-between pt-5 px-4 sm:px-8 text-white">
          <img className="w-48 sm:w-60 opacity-75" src={Logo} alt="" />
          <ul className="flex items-center">
            <li className="todo_sm mr-6"><span>{ userName }'s Todo</span></li>
            <li>
              <button onClick={ logOut } title="Logout" className="flex items-center">
                <FontAwesomeIcon className="text-2xl hover:text-orange-300" icon="fa-solid fa-right-from-bracket" />
              </button>
            </li>
          </ul>
      </nav>
      <ListBoard />
    </div>
  )
}

export default ListPage;