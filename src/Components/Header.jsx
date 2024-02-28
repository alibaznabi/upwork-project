import React,{useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Logo } from '../assets'
import { VscCallOutgoing } from "react-icons/vsc";
import { LuMenu } from "react-icons/lu";

const Header = () => {
    const[isMenuOpen, setIsMenuOpen] = useState(false)
    const data=[
        {
            img:Logo
        }
    ]

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
return (
    <header className="shadow sticky z-50 top-0">
            <nav className="bg-gray-100 border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="" className="flex items-center">
                        <img
                            src={Logo}
                            className="w-[9rem] h-20"
                            alt="Logo"
                        />
                    </Link>
                    <button onClick={toggleMenu} className='lg:hidden' aria-label='Toggle Menu'><LuMenu /></button>
                    <div className="flex items-center lg:order-2">
                        <a
                            href="tel:+92554266757"
                            className="text-white bg-green-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-100 font-bold rounded-lg text-lg px-4 lg:px-7 py-2 lg:py-5 mr- focus:outline-none"
                        >
                        <VscCallOutgoing  className='w-[100%]'/>
                        </a>
                    </div>
                    <div
                        className={`hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ${isMenuOpen ? 'block' : 'hidden' }"
                        id="mobile-menu-2`}
                    >
                        <ul className="flex flex-col mt-4 font-bold lg:flex-row lg:space-x-9 lg:mt-0">
                            <li>
                                <NavLink
                                    to=""
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3  duration-200 border-b ${isActive ? "text-orange-700" : "text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/packages"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-orange-700" : "text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Packages
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/gallery"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-orange-700" : "text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Gallery
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/attraction"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-orange-700" : "text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Attraction
                                </NavLink>
                            </li>                            
                            <li>
                                <NavLink
                                to="/contactus"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-orange-700" : "text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
  )
}

export default Header
