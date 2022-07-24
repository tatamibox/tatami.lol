import React from 'react'
import styles from '../styles/LoadingMatchCards.module.css'
function LoadingMatchCards() {
    return (
        <section className={styles.matches__section}>
            <div className={styles.card__container}>
                <div className={styles.primary__info}>
                    <h3 className={styles.gamemode}></h3>
                    <img className={styles.champion__images}></img>
                    <h3 className={styles.gamemode}></h3>

                </div>
            </div>
        </section>
    )
}

export default LoadingMatchCards