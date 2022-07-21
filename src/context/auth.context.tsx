import { createContext, FC, ReactNode } from 'react'
import { Store, useStore } from '../hooks/useStore'
import { getAccessToken } from '../utils/localStorage'

const accessToken = getAccessToken()

export const AuthContext = createContext<Store | null>(null)

const AuthProvider: FC<{children: ReactNode}> = ({children}) => {

    const store = useStore()

    return (
        <AuthContext.Provider value={store}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider