import { React, useState, useEffect } from 'react'
import styles from '../styles/StatsCorner.module.css'
function StatsCorner(props) {
    // props.data returns to us a list of the past 10 games. i am doing
    // calculations in here to give small notes in the notes corner. :)
    const [totalKills, setTotalKills] = useState(0)
    const [totalAssists, setTotalAssists] = useState(0)
    const [totalDeaths, setTotalDeaths] = useState(0)

    useEffect(() => {
        if (props.data) {
            let kCounter = 0;
            let aCounter = 0;
            let dCounter = 0;
            for (let game of props.data) {
                kCounter += game.kills
                aCounter += game.assists
                dCounter += game.deaths
            }
            setTotalKills(kCounter)
            setTotalAssists(aCounter)
            setTotalDeaths(dCounter)
        }
    }, [props.data])

    console.log(totalKills)
    return (
        <section className={styles.sc__container}>
            <h2>Stats Corner</h2>
        </section>
    )
}

export default StatsCorner