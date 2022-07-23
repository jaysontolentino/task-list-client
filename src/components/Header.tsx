import {Link, useLocation, useNavigate} from 'react-router-dom'
import { useMutation, useQuery } from '@apollo/client'
import { Logo } from "./Logo"
import { useAuth } from '../hooks/useAuth'
import { LOGOUT } from '../graphql/mutations'
import { PROFILE } from '../graphql/queries'

function Header() {


    const {data, error} = useQuery(PROFILE)
    const [logout, cache] = useMutation(LOGOUT) 
    const {pathname, } = useLocation()
    const navigate = useNavigate()
    const user = useAuth()

    function handleLogout() {
        logout()
        localStorage.clear()
        cache.reset()

        navigate('/login')
    }


    return (
        <header className="w-full p-[5px] text-white bg-[#23AAAA]">
            <div className="container flex justify-between">
                <Logo width="122px" />

                {user && <button className="bg-[#FEB708] px-[12px] py-2 rounded" onClick={handleLogout}>Logout</button>}

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