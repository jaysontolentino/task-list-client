import { useContext } from 'react'
import {Outlet} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import Footer from './Footer'
import Header from './Header'

function Layout() {

    const context = useContext(AuthContext)

    return (
        <div className=' flex flex-col min-h-screen'>
            <Header />
            <main className='flex flex-col flex-1 justify-center items-center bg-slate-100'>
                <Outlet />

                <pre>{JSON.stringify(context)}</pre>
            </main>
            <Footer />
        </div>
        
    )
}

export default Layout

