import React, { useState } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'

const RootLayout = () => {

const [bloqs, setBloqs] = useState([]);

    return (
        <div>
            <Navbar />
            <Outlet context={{bloqs, setBloqs}}/>

        </div>
    )
}

export default RootLayout