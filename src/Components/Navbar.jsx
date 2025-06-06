import React from 'react';
import { NavLink, Link } from 'react-router';

const Navbar = () => {
    return (
        <nav className="bg-amber-900 text-white p-5 shadow-md">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <span className="text-2xl font-bold tracking-wide">LOGO</span>

                <ul className="flex gap-6 text-lg font-medium">
                    <NavLink to="/" >
                        Home
                    </NavLink>

                    <NavLink to="/bloq">
                        Bloq
                    </NavLink>

                    <NavLink to="/add" >
                        Add New
                    </NavLink>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;














//  <NavLink
//             to="/add"
//             className={({ isActive }) =>
//               isActive ? 'underline underline-offset-4' : 'hover:text-yellow-300'
//             }
//           >
//             Add New
//           </NavLink>