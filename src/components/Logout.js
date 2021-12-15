import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Logout = () => {
    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.post('http://localhost:9000/api/logout')
            .then(res => {
                localStorage.removeItem('token')
                push('/login')
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    return (
        <>
        </>
    )
}

export default Logout