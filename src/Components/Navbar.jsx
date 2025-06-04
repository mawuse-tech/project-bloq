
import React from 'react'
import { Link, NavLink } from 'react-router'

const Navbar = () => {
    return (
        <div>
            <nav className='flex justify-between items-center text-xl bg-amber-900 p-5'>
                <span className='text-white'>LOGO</span>

                <ul className='flex gap-4 text-white justify-around'>
                    <NavLink to="/">Home</NavLink>
                    <Link to="/bloq">Bloq</Link>
                    <Link to="/add">Add New</Link>
                
                </ul>
            </nav>
        </div>
    )
}

export default Navbar