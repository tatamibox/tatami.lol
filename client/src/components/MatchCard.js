import { React, useEffect, useState } from 'react'
import styles from '../styles/MatchCard.module.css'
function MatchCard(matches) {

    const [allMatches, setAllMatches] = useState()
    const [playerMatchData, setPlayerMatchData] = useState()
    useEffect(() => {
        if (matches) {
            setAllMatches(matches.matches)
        }
    }, [matches])
    console.log(allMatches)

    useEffect(() => {
        if (allMatches) {
            const playerData = allMatches.map(matches => {
                return matches.participants

            })
            //     if (playerData) {
            //         const thisPlayerData = playerData.keys.some(matches => {
            //             return matches.summonerName === 'Solara'
            //         })
            //         console.log(thisPlayerData)
            //     }

            //     console.log(playerData)
            // } WORK ON THIS NEEDS TO HAVE THE ACTUAL ITERATION OF OBJECTS TO CHECK FOR SUMMONER NAMES.


        })


    return (
        <>
            {allMatches && allMatches.map((match, i) => (
                <div className={styles.card__container}>
                    <h3>{match.gameMode}</h3>
                </div>

            ))}


        </>
    )
}

export default MatchCard