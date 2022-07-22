import React from 'react'
import headerStyles from '../styles/Header.module.css'
// na1.api.riotgames.com
function Header() {
    return (
        <h1 className={`has-text-centered my-5 ${headerStyles.__mainHeader}`}>tatami.lol</h1>
    )
}

export default Header