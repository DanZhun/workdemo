import { useAuth } from "./Context";
import { Navigate,Outlet } from 'react-router-dom';

export const ProtectedRoute = ({children}) => {
    const { token } = useAuth();
    if (!token){
        return <Navigate to="/" replace />;
    }
    return <Outlet />
};