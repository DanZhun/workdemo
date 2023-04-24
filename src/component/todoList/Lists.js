import { useState } from "react"
import { getTodoList, toggleTodo, deleteTodo } from '../../utils/todoAPI'
import { useAuth } from '../../utils/Context'
import { showToast } from '../../utils/sweetalert'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Lists (props) {
  const [loading, setLoading] = useState('')
  const { filterType, todoList, onListChange } = props
  const { token } = useAuth()

  const handleToggle = (token, id) => {
    setLoading(id)
    toggleTodo(token, id).then(res => {
      getTodoList(token).then(res => {
        onListChange(res.data.todos)
        setLoading('')
        showToast('Change Todo State', 'success')
      }).catch(err => {
        showToast('Get Todo Fail', 'error')
        setLoading('')
      })
    }).catch(err => {
      showToast('Change Todo State Fail', 'error')
      setLoading('')
    })
  }

  const handleDeleteTodo = (e, token, id) => {
    e.preventDefault()
    setLoading(id)
    deleteTodo(token, id).then(res => {
      getTodoList(token).then(res => {
        onListChange(res.data.todos)
        setLoading('')
        showToast('Delete Todo Success', 'success')
      }).catch(err => {
        showToast('Get Todo Fail', 'error')
        setLoading('')
      })
    }).catch(err => {
      showToast('Delete Todo Fail', 'error')
      setLoading('')
    })
  }

  const filteredData = (filterType === 'all')
    ? todoList
    : (filterType === 'wait')
    ? todoList.filter(item => item.completed_at === null)
    : todoList.filter(item => item.completed_at !== null)
  console.log(filteredData)
  return (
    <ul>
      { filteredData.length===0 ? <li className="text-center text-neutral-400 mt-2"><FontAwesomeIcon className="fa-beat mr-3" icon="fa-solid fa-person-running" />NO DATA</li> : '' }
      { filteredData.map(item => {
        return (
          <li key={ item.id } className="group flex justify-between py-3 border-b border-solid border-gray-300">
            <label className="flex items-center text-stone-700 relative">
              <input className="todoList_check cursor-pointer w-5 h-5 rounded-md bg-stone-300 mr-3 appearance-none checked:bg-cyan-500 duration-300" type="checkbox" value={ item.completed_at ? item.completed_at : '' }
              checked={ item.completed_at ? 'checked' : '' } onChange={ () => handleToggle(token, item.id) } />
              <i className="absolute hidden left-2 bottom-1.5 rotate-45 w-2 h-4 border-b-4 border-r-4 border-white"></i>
              <span className="cursor-pointer">{ item.content }</span>
              {
                loading === item.id ? <FontAwesomeIcon icon="fa-solid fa-spinner" className="fa-spin ml-1" /> : ''
              }
            </label>
            <button className="opacity-0 group-hover:opacity-100" onClick={ (e) => handleDeleteTodo(e, token, item.id) }>
              <FontAwesomeIcon icon="fa-solid fa-xmark" />
            </button>
          </li>
        )
      }) }
    </ul>
  )
}

export default Lists