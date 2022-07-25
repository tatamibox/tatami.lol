import React from 'react'
import styles from '../styles/Hero.module.css'
function Hero() {
    return (
        <header className={styles.hero__main}>
            <h2> a league statistics tool made with 💖</h2>
            <h4 className={styles.hero__text}>enter your league username below.</h4>

        </header>

    )
}

export default Hero