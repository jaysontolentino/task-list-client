import {Outlet, Navigate, useLocation} from 'react-router-dom'
import Loading from './Loading'
import { useUser } from '../hooks/useUser'

function Authenticated() {
    
    const location = useLocation()
    const {loading, data} = useUser()


    if(loading) return <Loading />

    if(data) return <Navigate to='/' replace state={{from: location}} />

    return <Outlet />

}

export default Authenticated