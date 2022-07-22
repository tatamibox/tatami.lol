import React from 'react'
import Card from './Card'
import randomStyles from '../styles/Random.module.css'
import random from '../pages/random'

function Randomizer() {
    return (
        <Card background='#ffcdb2' className={randomStyles.randomizer__card}>Test</Card>
    )
}

export default Randomizer