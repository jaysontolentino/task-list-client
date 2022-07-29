import { createContext, useState } from 'react'

type IAUthUser = {
    id: number
    name: string
    email: string
}

export type IAuthContext = {
    auth: AuthState
    openModal: boolean
    setUser: (user: IAUthUser | null) => void
    removeUser: () => void
    toggleModal: () => void
}

type AuthState = {
    user: IAUthUser | null
}

const AuthContext = createContext<IAuthContext | null>(null)

function AuthProvider({children}: any) {

    const [auth, setAuth] = useState<AuthState>({
        user: null
    })

    const [openModal, setOpenModal] = useState(false)

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

    const toggleModal = () => setOpenModal(!openModal)

    return (
        <AuthContext.Provider value={{auth, openModal, setUser, removeUser, toggleModal}}>
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthContext, 
    AuthProvider
}