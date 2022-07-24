import React from 'react'
import styles from '../styles/ItemCard.module.css'
import gold from '../assets/gold.png'
function ItemCard({ item, id }) {
    return (
        <div className={`${styles.position__relative}`}>
            <section className={styles.card__container}>
                {item && id &&
                    <>
                        <img className={styles.card__image} src={`https://ddragon.leagueoflegends.com/cdn/12.13.1/img/item/${id}.png`}></img>
                        <h4 className={styles.item__name}>{item.name}</h4>
                        <h5 className={styles.item__price}>{item.gold.total}<img src={gold} className={styles.gold__image}></img></h5>
                        <p className={styles.item__plaintext}>{item.plaintext ? item.plaintext : 'Riot did not provide a description. :('}</p>
                    </>
                }
            </section>
        </div>
    )
}

export default ItemCard