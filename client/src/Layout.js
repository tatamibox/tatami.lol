import React from 'react'
import Navbar from './components/Navbar'
function Layout({ children }) {
    return (
        <>
            <Navbar />
            <div>{children}</div>
        </>
    )
}

export default Layout