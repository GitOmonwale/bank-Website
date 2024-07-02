import React, { useState } from 'react'
import { logo, menu, close } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
    const [toogle, setToogle
    ] = useState(false)
    return (
        <div>
            <nav className='w-full flex py-6 justify-between items-center navbar'>
                <img src={logo} alt="hookbank" className='w-32 h-10' />
                <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                    {navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`font-poppins font-normal cursor-pointer text-white text-base ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
                        >
                            <a href={`#${nav.id}`}>
                                {nav.title}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className='sm:hidden flex flex-1 items-center justify-end'>
                    <img
                        src={toogle ? close : menu}
                        alt=""
                        onClick={() => setToogle((prev) => !prev)}
                        className='w-7 h-7' />

                    <div className={`${toogle ? 'flex' : 'hidden'} items-center justify-center`}>
                        <div className='absolute right-0 top-20 max-w-56 bg-black-gradient rounded-xl sidebar p-6'>
                            <ul className='list-none justify-between flex-col flex items-center flex-1'>
                                {navLinks.map((nav, index) => (
                                    <li
                                        key={nav.id}
                                        className={`font-poppins font-normal cursor-pointer text-white text-base ${index === navLinks.length - 1 ? 'mb-0' : 'mb-5'}`}
                                    >
                                        <a href={`#${nav.id}`}>
                                            {nav.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar