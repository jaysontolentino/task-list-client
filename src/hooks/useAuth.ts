import { useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client';
import { LOGIN, LOGOUT } from '../graphql/mutations';
import { removeAccessToken, setAccessToken } from '../utils/localStorage';
import AppContext from '../context/AppContext';
import { useContext, useEffect, useState } from 'react';
import { useUser } from './useUser';
import client from '../graphql/client';

export function useAuth() {

    const navigate = useNavigate()

    const [authenticated, setAuthenticated] = useState(false)

    const context = useContext(AppContext)
    const user = useUser()
    const auth = context?.auth

    const session = useMutation(LOGIN, {
        onCompleted(data) {
            context?.setUser(data.login.user)
            setAccessToken(data.login.access_token)
            navigate('/')
        }
    })

    const [logout, cache] = useMutation(LOGOUT, {
        async onCompleted() {
            removeAccessToken()
            context?.removeUser()
            cache.reset()
            await client.clearStore()
            navigate('/login')
        }
    })

    useEffect(() => {
        if(user.data) {
            context?.setUser(user.data.user)
            setAuthenticated(true)
        } 

        if(user.error) {
            context?.setUser(null)
            setAuthenticated(false)
        }
    // eslint-disable-next-line
    }, [user])

    return {
        user: auth?.user,
        authenticated,
        session,
        logout,
    }
}
