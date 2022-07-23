import { React, useEffect, useState } from 'react'
import styles from '../styles/MatchCard.module.css'
function MatchCard(props) {
    console.log(props)
    const [allMatches, setAllMatches] = useState()
    const [playerMatchData, setPlayerMatchData] = useState()
    useEffect(() => {
        if (props.matches) {
            setAllMatches(props.matches)
        }
    }, [props.matches])

    // checks for all matches, and returns an array of the given player's specific past 10 games
    useEffect(() => {
        if (allMatches) {
            const playerData = allMatches.map(matches => {
                return matches.participants

            })
            if (playerData) {
                let playerMatches = []
                for (let players of playerData) {
                    const thisPlayer = players.filter(players => {
                        return players.summonerId === props.user.id
                    })

                    playerMatches.push(thisPlayer[0])
                }
                setPlayerMatchData(playerMatches)
            }


        }


    }, [allMatches])
    console.log(playerMatchData)

    return (
        <>
            <section className={styles.matches__section}>
                {allMatches && playerMatchData && allMatches.map((match, i) => (
                    <div className={styles.card__container} style={{ backgroundColor: `${playerMatchData[i].win ? '#a1c181' : '#dd2d4a'}` }}>
                        <div className={styles.primary__info}>
                            <h3 className={styles.gamemode}>{match.gameMode}</h3>
                            <img className={styles.champion__images} src={`https://ddragon.leagueoflegends.com/cdn/12.13.1/img/champion/${playerMatchData[i].championName}.png`} alt='Champion Sprite'></img>
                            <h4>K/D/A: {playerMatchData[i].kills}/{playerMatchData[i].deaths}/{playerMatchData[i].assists}</h4>
                        </div>
                        <div className={styles.player__build}>
                            {playerMatchData[i].item0 ? <img src={`https://ddragon.leagueoflegends.com/cdn/12.13.1/img/item/${playerMatchData[i].item0}.png`}></img> : null}
                            {playerMatchData[i].item1 ? <img src={`https://ddragon.leagueoflegends.com/cdn/12.13.1/img/item/${playerMatchData[i].item1}.png`}></img> : null}
                            {playerMatchData[i].item2 ? <img src={`https://ddragon.leagueoflegends.com/cdn/12.13.1/img/item/${playerMatchData[i].item2}.png`}></img> : null}
                            {playerMatchData[i].item3 ? <img src={`https://ddragon.leagueoflegends.com/cdn/12.13.1/img/item/${playerMatchData[i].item3}.png`}></img> : null}
                            {playerMatchData[i].item4 ? <img src={`https://ddragon.leagueoflegends.com/cdn/12.13.1/img/item/${playerMatchData[i].item4}.png`}></img> : null}
                            {playerMatchData[i].item5 ? <img src={`https://ddragon.leagueoflegends.com/cdn/12.13.1/img/item/${playerMatchData[i].item5}.png`}></img> : null}
                            {playerMatchData[i].item6 ? <img src={`https://ddragon.leagueoflegends.com/cdn/12.13.1/img/item/${playerMatchData[i].item6}.png`}></img> : null}

                        </div>
                    </div>

                ))}

            </section>
        </>
    )
}

export default MatchCard