import {Outlet} from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

function Layout() {

    return (
        <div className=' flex flex-col min-h-screen'>
            <Header />
            <main className='flex flex-col flex-1 justify-center items-center bg-slate-100 py-4'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout

