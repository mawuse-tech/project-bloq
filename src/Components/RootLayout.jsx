import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'
import axios from 'axios'
const API_URL = 'http://localhost:3000/bloqs'

const RootLayout = () => {

const [bloqs, setBloqs] = useState([]);
const [likes, setLikes] = useState([]);

useEffect(() => {
    const fetchBloqs = async () => {
       try {
         const res = await axios.get(API_URL);
        setBloqs(res.data);
        console.log(res)
       } catch (error) {
        console.log(error)
       }
    };
    fetchBloqs()
}, [])

    return (
        <div>
            <Navbar />
            <Outlet context={{bloqs, setBloqs, likes, setLikes, API_URL}}/>
        </div>
    )
}

export default RootLayout