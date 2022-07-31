import {Outlet, Navigate, useLocation} from 'react-router-dom'
import Loading from './Loading'
import { useUser } from '../hooks/useUser'

function ProtectedRoute() {
    
    const location = useLocation()
    const {loading, error} = useUser()


    if(loading) return <Loading />

    if(error) return <Navigate to='/login' replace state={{from: location}} />

    return <Outlet />

}

export default ProtectedRoute