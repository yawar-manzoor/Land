import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.svg'
import Avatar from '../assets/Avatar.svg'

const Header = () => {
    return (
        <header className="px-12 2xl:px-24 py-6">
            <div className="mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img src={Logo} alt="Logo" className="" />
                </div>

                <nav className="flex space-x-8">
                    <Link
                        to={'/landbank'}
                        className="text-primary-600 font-bold hover:text-primary-300"
                    >
                        Land Bank
                    </Link>
                    <Link
                        to={'/analytics'}
                        className="text-primary-600 font-bold hover:text-primary-300"
                    >
                        More Analytics
                    </Link>
                    <Link
                        to={'/reports'}
                        className="text-primary-600 font-bold hover:text-primary-300"
                    >
                        Reports
                    </Link>
                </nav>

                <div className="flex items-center space-x-4">
                    <img
                        src={Avatar}
                        alt="Profile"
                        className="h-10 w-10 rounded-full"
                    />
                    <span className="text-gray-600">Faisal Alshugry</span>
                </div>
            </div>
        </header>
    )
}

export default Header
