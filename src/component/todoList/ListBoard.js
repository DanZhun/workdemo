import { useState, useEffect } from "react"
import { useAuth } from '../../utils/Context'
import ListTags from './ListTags'
import Lists from './Lists'
import { getTodoList, postTodo, deleteTodo } from '../../utils/todoAPI'
import { sweetAlert, showToast } from '../../utils/sweetalert'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//image
import Moon from "../../image/moon.png"

function ListBoard () {
  const [todoInput, setTodoInput] = useState('')
  const [filterType, setFilterType] = useState('all')
  const [todoList, setTodoList] = useState([])
  const [loading, setLoading] = useState(false)
  const [waitDelete, setWaitDelete] = useState(false)
  const { token } = useAuth()

  useEffect(() => {
    setLoading(true)
    getTodoList(token).then(res => {
      setTodoList(res.data.todos)
      setLoading(false)
    }).catch(err => {
      showToast('Get Todo Fail', 'error')
      setLoading(false)
    })
  }, [token])

  const handleSetTodoInput = (e) => {
    const { value } = e.target
    setTodoInput(value)
  }
  const handleSendTodoAPI = (e) => {
    e.preventDefault()
    if (todoInput.trim() === '' || todoInput === '') {
      sweetAlert('No Enter Todo', 'Wake up!!', 'info')
      return
    }
    setLoading(true)
    postTodo(token, todoInput).then(res => {
      getTodoList(token).then(res => {
        setTodoList(res.data.todos)
        showToast('Add Todo Success', 'success')
        setLoading(false)
      }).catch(err => {
        showToast('Get Todo Fail', 'error')
        setLoading(false)
      })
      setTodoInput('')
    }).catch(err => {
      showToast('Add Todo Fail', 'error')
    })
  }

  const cleanFinishedTodo = async (e) => {
    e.preventDefault()
    setWaitDelete(true)
    const finishedTodo = todoList.filter(item => item.completed_at).map(item => {
      return new Promise(async resolve => {
        await deleteTodo(token, item.id)
        resolve()
      })
    })
    await Promise.all(finishedTodo)
    getTodoList(token).then(res => {
      setTodoList(res.data.todos)
      setWaitDelete(false)
      showToast('Delete Completed Todo Success', 'success')
    }).catch(err => {
      console.log(err)
      setWaitDelete(false)
      showToast('Delete Completed Todo Fail', 'error')
    })
  }
  return (
    <div className="todoList_content mx-auto mt-10 pb-10">
      <div className="flex relative mb-4 shadow-lg">
        <input type="text" placeholder="enter todo list..." className="w-full h-12 rounded-lg pl-4"
        onChange={ handleSetTodoInput } value={ todoInput } />
        <button onClick={ handleSendTodoAPI } className="w-10 h-10 rounded-lg absolute top-2/4 right-1 -translate-y-1/2 bg-cyan-500 hover:bg-cyan-600 text-white flex items-center justify-center">
          {
            loading ? <FontAwesomeIcon icon="fa-solid fa-spinner" className="fa-spin" />
            : <FontAwesomeIcon icon="fa-solid fa-plus" />
          }
        </button>
      </div>
      {
        todoList.length !== 0 ? (
          <div className="bg-white/90 shadow-lg rounded-lg">
            <ListTags filterType={ filterType } onFilterChange={ setFilterType } />
            <div className="px-6 pb-5 pt-4">
              <Lists filterType={ filterType } todoList={ todoList }
              onListChange={ setTodoList } />
              <div className="text-sm flex justify-between mt-5">
                <p className="text-cyan-600"> { todoList.filter(item => item.completed_at===null).length } pending item</p>
                { 
                  todoList.filter(item => item.completed_at).length>0 ?
                  <button onClick={ cleanFinishedTodo } className="text-neutral-500 hover:text-neutral-600">
                    <FontAwesomeIcon icon="fa-solid fa-eraser" /> Delete Completed
                    { waitDelete ? <FontAwesomeIcon icon="fa-solid fa-spinner" className="fa-spin ml-1" /> : '' }
                  </button> : <FontAwesomeIcon title="plz tick todo list" className="text-xl text-cyan-400" icon="fa-regular fa-face-laugh-wink" />
                }
              </div>
            </div>
          </div>
        ) : 
        <div className="relative pt-4 overflow-hidden text-center">
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <span className="block animate-pulse text-cyan-100 text-xl font-bold cursor-not-allowed">
              <FontAwesomeIcon className="relative -top-2" icon="fa-solid fa-robot" /><br/>NO DATA<br/>PLZ ENTER
            </span>
          </p>
          <img src={Moon} className="w-5/6 md:w-3/5 mx-auto opacity-50 drop-shadow-lg animate-moon" alt="moon" />
        </div>
      }
    </div>
  )
}

export default ListBoard