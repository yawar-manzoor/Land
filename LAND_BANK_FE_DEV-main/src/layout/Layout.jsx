import BreadCrumbs from '../components/BreadCrumbs'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Layout = () => {
    const location = useLocation()
    const pathname = location.pathname
    return (
        <>
            <nav>
                <Header />
            </nav>
            <main className="space-y-4 py-4">
                {pathname !== '/' && <BreadCrumbs />}
                <Outlet />
            </main>
        </>
    )
}

export default Layout
