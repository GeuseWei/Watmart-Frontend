import { Navigate, useLocation } from 'react-router-dom';
import useAuth from './hooks/useAuth'

const AuthGuard = ({children}) => {
    const { isAuthticated } = useAuth();
    const { pathname } = useLocation();

    if(isAuthticated) return <>{children}</>;

    return <Navigate replace to="/login" state={{from: pathname}}/>
}

export default AuthGuard;