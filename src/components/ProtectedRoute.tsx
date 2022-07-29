import {Outlet, Navigate, useLocation} from 'react-router-dom'
import {useQuery} from '@apollo/client'
import { PROFILE } from '../graphql/queries'
import { useContext, useEffect } from 'react'
import { AuthContext, IAuthContext } from '../context/AuthContext'
import Loading from './Loading'

function ProtectedRoute() {
    const location = useLocation()
    const {error, loading, data} = useQuery(PROFILE)
    const {setUser} = useContext(AuthContext) as IAuthContext

    useEffect(() => {

        if(data) {
            setUser(data.user)
        }

    }, [loading])

    if(loading) return <Loading />

    if(error) return <Navigate to='/login' replace state={{from: location}} />

    return <Outlet />

}

export default ProtectedRoute