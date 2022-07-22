import React from 'react'
import cardStyles from '../styles/Card.module.css'
function Card(props) {
    return (
        <div className={`card ${cardStyles.__mainCard}`} style={{ backgroundColor: props.background }}>
            <div class={cardStyles.card__content}>
                {props.children}
            </div>
        </div>
    )
}

export default Card