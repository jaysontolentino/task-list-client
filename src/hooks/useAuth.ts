import jwtDecode from 'jwt-decode'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { refreshToken } from '../graphql/client'
import { getAccessToken } from '../utils/localStorage'

type DecodedToken = {
    user_id: string
    email: string
    iat: number
    exp: number
}

export function useAuth() {

    const context = useContext(AuthContext)

    return context?.auth.user
}
