import {Link, useLocation, useNavigate} from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { Logo } from "./Logo"
import { useAuth } from '../hooks/useAuth'
import { LOGOUT } from '../graphql/mutations'
import { removeAccessToken } from '../utils/localStorage'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

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


    return (
        <header className="w-full p-[5px] text-white bg-[#23AAAA]">
            <div className="container flex justify-between">
                <Logo width="122px" />

                {user &&
                <ul className='flex justify-around items-center'>
                    <li><Link className='bg-[#FEB708] px-[12px] py-2 rounded' to='/tasks'>Tasks</Link></li>
                    <li><button className="bg-[#FEB708] px-[12px] py-2 rounded" onClick={handleLogout}>Logout</button></li>
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