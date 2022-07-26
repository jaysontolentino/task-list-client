export function getAccessToken() {
    const token = localStorage.getItem('token')
    if(!token) return ''
    return token
}

export function setAccessToken(token: string) {
    localStorage.setItem('token', token)
}

export function removeAccessToken() {
    localStorage.removeItem('token')
}