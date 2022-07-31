import { createContext, ReactNode, useState } from 'react'

type IAUthUser = {
    id: number
    name: string
    email: string
}

type ModalState = {
    type: 'add' | 'edit'
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
    addModal: () => void
    editModal: (id: string | number) => void
    closeModal: () => void
}



const AppContext = createContext<IAuthContext | null>(null)

export const AppProvider = ({children}: {children: ReactNode}) => {

    const [auth, setAuth] = useState<AuthState>({
        user: null
    })

    const [modal, setModal] = useState<ModalState>({
        type: 'add',
        isOpen: false
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

    const addModal = () => {
        setModal({
            ...modal,
            type: 'add',
            isOpen: true
        })
    }

    const editModal = (id: string | number) => {
        setModal({
            ...modal,
            type: 'edit',
            isOpen: true,
            id
        })
    }

    const closeModal = () => {
        setModal({
            type: 'add',
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
            addModal,
            editModal,
            closeModal
            }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext