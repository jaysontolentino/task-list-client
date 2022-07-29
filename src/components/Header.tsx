import {Link, useLocation, useNavigate} from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { Logo } from "./Logo"
import { useAuth } from '../hooks/useAuth'
import { LOGOUT } from '../graphql/mutations'
import { removeAccessToken } from '../utils/localStorage'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import Button from './Button'

function Header() {

    const context = useContext(AuthContext)

    const [logout, cache] = useMutation(LOGOUT, {
        onCompleted() {
            removeAccessToken()
            context?.removeUser()
            cache.reset()
            navigate('/login', {
                replace: true
            })
        }
    }) 
    const {pathname} = useLocation()
    const navigate = useNavigate()
    const user = useAuth()

    function handleLogout() {
        logout()
    }


    useEffect(() => {
    }, [context]);


    return (
        <header className="w-full p-[5px] text-white bg-[#23AAAA]">
            <div className="container flex justify-between">
                <Logo width="122px" />

                {user &&
                <ul className='flex justify-around items-center'>
                    <li><Button xs="px-[12px] py-2" onClick={context?.toggleModal} text="New Task" /></li>
                    <li><Button xs="px-[12px] py-2" onClick={handleLogout} text="Logout" /></li>
                </ul>
                }

                {!user &&
                <Link 
                to={pathname === '/login' ? '/register' : '/login' } 
                className="bg-[#FEB708] px-[12px] py-2 rounded">
                    {pathname === '/login' ?  'Register' : 'Login'}
                </Link>}
            </div>
        </header>
    )
}

export default Header