import {Outlet, Navigate, useLocation} from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

function ProtectedRoute() {

    const auth = useAuth()
    const location = useLocation()

    return (
        (auth?.accessToken) ? <Outlet /> : <Navigate to='/login' replace state={{from: location}} />
    )
}

export default ProtectedRoute