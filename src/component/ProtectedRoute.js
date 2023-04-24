import { useAuth } from './Context'
import { Navigate,Outlet } from 'react-router-dom'
import { todolist } from './todoList'

const ProtectedRoute = ({ children }) => {
    const { token } = useAuth()
    if (!token){
        return <Navigate to="/TodoHome" replace />;
    }
    return <todolist />
}

export default ProtectedRoute