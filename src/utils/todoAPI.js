import axios from 'axios'
export const postTodo = async (token, todo) => {
  return await axios({
    headers: { Authorization: token },
    method: 'post',
    url: process.env.REACT_APP_API+'/todos',
    data: { todo : { content: todo } }
  })
}

export const checkLogIn = async (token) => {
  return await axios({
    headers: { Authorization: token },
    method: 'get',
    url: process.env.REACT_APP_API+'/check'
  })
}

export const getTodoList = async (token) => {
  return await axios({
    headers: { Authorization: token },
    method: 'get',
    url: process.env.REACT_APP_API+'/todos'
  })
}

export  const toggleTodo = async (token, id) => {
  return await axios({
    headers: { Authorization: token },
    method: 'patch',
    url: `${process.env.REACT_APP_API}/todos/${ id }/toggle`
  })
}

export const deleteTodo = async (token, id) => {
  return await axios({
    headers: { Authorization: token },
    method: 'delete',
    url: `${process.env.REACT_APP_API}/todos/${ id }`
  })
}