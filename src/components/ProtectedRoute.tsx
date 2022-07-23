import {Outlet, Navigate, useLocation} from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { PROFILE } from '../graphql/queries'

function ProtectedRoute() {

    const {data, error} = useQuery(PROFILE)

    const location = useLocation()

    console.log(data)

    if(error) return <Navigate to='/login' replace state={{from: location}} />

    return <Outlet />

}

export default ProtectedRoute