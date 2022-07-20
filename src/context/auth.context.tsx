import { createContext, FC, useState } from 'react'

export const AuthContext = createContext<any>(null)

const useToken = function() {

    const [token, setToken] = useState<string>('')

    return {
        token,
        setToken
    }
}

const AuthContextProvider: FC<{children: any}> = ({children}) => {

    return (
        <AuthContext.Provider value={useToken()}>{children}</AuthContext.Provider>
    )
}

export default AuthContextProvider