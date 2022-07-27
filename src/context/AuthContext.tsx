import { createContext, useState } from 'react'

type IAUthUser = {
    id: number
    name: string
    email: string
}

type IAuthContext = {
    auth: AuthState
    setUser: (user: IAUthUser | null) => void
    removeUser: () => void
}

type AuthState = {
    user: IAUthUser | null
}

const AuthContext = createContext<IAuthContext | null>(null)

function AuthProvider({children}: any) {

    const [auth, setAuth] = useState<AuthState>({
        user: null
    })

    const setUser = (user: IAUthUser | null) => {
        setAuth({
            ...auth,
            user
        })
    }

    const removeUser = () => {
        setAuth({
            ...auth,
            user: null
        })
    }

    return (
        <AuthContext.Provider value={{auth, setUser, removeUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthContext, 
    AuthProvider
}