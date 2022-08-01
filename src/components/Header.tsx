import {Link, useLocation} from 'react-router-dom'
import { Logo } from "./Logo"
import { useAuth } from '../hooks/useAuth'
import Button from './Button'

function Header() {

    const {pathname} = useLocation()
    const {user, authenticated, logout} = useAuth()

    function handleLogout() {
        logout()
    }

    return (
        <header className="w-full p-[5px] text-white bg-[#23AAAA]">
            <div className="container flex justify-between">
                <Logo width="122px" />

                <nav className='flex justify-between gap-x-3 items-end'>
                    {(user && authenticated) 
                    ? 
                    <Button xs="px-[12px] py-2" onClick={handleLogout} text="Logout" />
                    :
                    <Link to={pathname === '/login' ? '/register' : '/login' } 
                    className="bg-[#FEB708] px-[12px] py-2 rounded">
                    {pathname === '/login' ?  'Register' : 'Login'}
                    </Link>
                    }
                </nav>
                
                
            </div>
        </header>
    )
}

export default Header