import {Outlet, Navigate, useLocation} from 'react-router-dom'
import {useQuery} from '@apollo/client'
import { PROFILE } from '../graphql/queries'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'

function ProtectedRoute() {
    const location = useLocation()
    const {error, loading, data} = useQuery(PROFILE)
    const context = useContext(AuthContext)

    const [isLoading, setLoading] = useState(true)

    useEffect(() => {

        if(data) {
            setLoading(false)
            context?.setUser(data.user)
        }

    }, [loading, context, data])

    if(loading) return (
        <div className="w-screen h-screen flex justify-center items-center absolute top-0 left-0 bg-[#23AAAA]">
          <span className='font-bold text-2xl text-white'>Loading...</span>
        </div>
      )

    if(error) return <Navigate to='/login' replace state={{from: location}} />

    return <Outlet />

}

export default ProtectedRoute