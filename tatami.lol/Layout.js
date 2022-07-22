import React from 'react'
import Header from './components/Header'
function Layout({ children }) {
    return (
        <>
            <Header></Header>
            <div>{children}</div>
        </>
    )
}

export default Layout