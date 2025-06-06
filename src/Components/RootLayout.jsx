import React, { useState } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'

const RootLayout = () => {

const [bloqs, setBloqs] = useState([]);
const [likes, setLikes] = useState([]);

    return (
        <div>
            <Navbar />
            <Outlet context={{bloqs, setBloqs, likes, setLikes}}/>
        </div>
    )
}

export default RootLayout