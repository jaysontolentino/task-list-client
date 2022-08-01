import { createContext, ReactNode, useState } from 'react'

type IAUthUser = {
    id: number
    name: string
    email: string
}

type ModalState = {
    isOpen: boolean
    id?: string | number
}

type AuthState = {
    user: IAUthUser | null
}


export type IAuthContext = {
    auth: AuthState
    modal: ModalState
    setUser: (user: IAUthUser | null) => void
    removeUser: () => void
    openModal: (id: string | number) => void
    closeModal: () => void
}



const AppContext = createContext<IAuthContext | null>(null)

export const AppProvider = ({children}: {children: ReactNode}) => {

    const [auth, setAuth] = useState<AuthState>({
        user: null
    })

    const [modal, setModal] = useState<ModalState>({
        isOpen: false,
        id: ''
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

    const openModal = (id: string | number) => {
        setModal({
            ...modal,
            isOpen: true,
            id
        })
    }

    const closeModal = () => {
        setModal({
            isOpen: false,
            id: ''
        })
    }

    return (
        <AppContext.Provider value={{
            auth,
            modal, 
            setUser,
            removeUser,
            openModal,
            closeModal
            }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext