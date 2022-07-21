import { useState } from 'react'

interface IUserAuth {
    id: number | null
    name: string
    email: string
}

interface IAuth {
    accessToken: string
    user: IUserAuth | null
}

const accessToken = localStorage.getItem('token') || ''

const initialAuthState = {
    accessToken,
    user: null
}

export function useStore() {

    const [auth, setAuth] = useState<IAuth>(initialAuthState)

    const setUser = (payload: IUserAuth) => {
        setAuth({
            accessToken,
            user: payload
        })
    }

    return {
        auth,
        setUser
    }
}

export type Store = ReturnType<typeof useStore>