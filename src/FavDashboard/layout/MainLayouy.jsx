import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

function MainLayouy() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default MainLayouy