import { React, useState, useEffect } from 'react'
import styles from '../styles/StatsCorner.module.css'
function StatsCorner(props) {

    // open and close the section
    const [open, setOpen] = useState(false)

    // props.data returns to us a list of the past 10 games. i am doing
    // calculations in here to give small notes in the notes corner. :)
    const [totalKills, setTotalKills] = useState(0)
    const [totalAssists, setTotalAssists] = useState(0)
    const [totalDeaths, setTotalDeaths] = useState(0)
    const [totalCreeps, setTotalCreeps] = useState(0)
    useEffect(() => {
        if (props.data) {
            let kCounter = 0;
            let aCounter = 0;
            let dCounter = 0;
            let creepCounter = 0;
            for (let game of props.data) {
                kCounter += game.kills
                aCounter += game.assists
                dCounter += game.deaths
                creepCounter += (game.totalMinionsKilled + game.neutralMinionsKilled)
            }
            setTotalKills(kCounter)
            setTotalAssists(aCounter)
            setTotalDeaths(dCounter)
            setTotalCreeps(creepCounter)
        }
    }, [props.data])

    console.log(totalKills)
    return (
        <section className={styles.sc__container}>
            <h3 className='text-white'>Stats Corner (Past 10 Games)</h3>
            {!open && <button className={`${styles.open__button} btn btn-light`} onClick={() => setOpen(!open)}>Open</button>}


            {open && <>
                <button className={`${styles.open__button} btn btn-light`} onClick={() => setOpen(!open)}>Close</button>
                <div className={styles.stats__section}>
                    <h4>Kills: {totalKills} ({totalKills / 10} / game)</h4>
                    <h4>Assists: {totalAssists} ({totalAssists / 10} / game)</h4>
                    <h4>Deaths: {totalDeaths} ({totalDeaths / 10} / game)</h4>
                    <h5>CS (avg): {totalCreeps / 10}</h5>
                </div> </>}


        </section>
    )
}

export default StatsCorner