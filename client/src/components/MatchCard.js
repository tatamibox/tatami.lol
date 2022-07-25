import { React, useEffect, useState } from 'react'
import styles from '../styles/MatchCard.module.css'
import fetchItemData from '../util/fetch-item-data'
import ItemCard from './ItemCard'
function MatchCard(props) {

    // 1. holds info about current hover item on match cards. dynamic hovering for improved performance
    // 2. functionality for fetching an item and then setting it to the item modal hover state.
    const [currentItemId, setCurrentItemId] = useState()
    const [currentItem, setCurrentItem] = useState()
    useEffect(() => {
        if (currentItemId) {
            fetchItemData(currentItemId, setCurrentItem)
        }
    }, [currentItemId])


    // ^^^^ these are the states to hold the individual item hovers



    // holds all match (10 past matches) and the one performance in those games from the specified player
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
    if (playerMatchData) {
        props.extractPlayerMatchData(playerMatchData)

    }
    //

    // calculates the total time played to display on the match card
    const calcTimeSpent = (seconds) => {
        const time = seconds / 60
        return time
    }
    console.log(playerMatchData)
    return (
        <>
            {currentItem && currentItemId && <ItemCard item={currentItem} id={currentItemId}></ItemCard>}
            <section className={styles.matches__section}>
                {allMatches && playerMatchData && allMatches.map((match, i) => (
                    <div key={i} className={styles.card__container} style={{ backgroundColor: `${playerMatchData[i].win ? '#a1c181' : '#dd2d4a'}` }}>
                        <div className={styles.primary__info}>
                            <h3 className={styles.gamemode}>{match.gameMode}</h3>
                            <img className={styles.champion__images} src={`https://ddragon.leagueoflegends.com/cdn/12.13.1/img/champion/${playerMatchData[i].championName}.png`} alt='Champion Sprite'></img>
                            <h5 className={styles.champion__level}>Level {playerMatchData[i].champLevel}</h5>
                            <h4>K/D/A: {playerMatchData[i].kills}/{playerMatchData[i].deaths}/{playerMatchData[i].assists}</h4>
                            <h4 className={styles.player__kda}>{playerMatchData[i].deaths !== 0 ? ((playerMatchData[i].kills + playerMatchData[i].assists) / (playerMatchData[i].deaths)).toFixed(2) : (playerMatchData[i].kills + playerMatchData[i].assists)}</h4>
                            {playerMatchData[i].pentaKills > 0 && <h5 className={styles.pentakill}>{playerMatchData[i].pentaKills} Penta Kill</h5>}
                        </div>
                        <div className={styles.right__section}>
                            <div className={styles.player__build}>

                                {playerMatchData[i].item0 ? <div className={styles.image__dynamic}><img className={styles.item__image} onMouseEnter={() => setCurrentItemId(playerMatchData[i].item0)} onMouseLeave={() => setCurrentItemId(undefined)} src={`https://ddragon.leagueoflegends.com/cdn/12.13.1/img/item/${playerMatchData[i].item0}.png`} ></img></div> : null}
                                {playerMatchData[i].item1 ? <div className={styles.image__dynamic}><img className={styles.item__image} onMouseEnter={() => setCurrentItemId(playerMatchData[i].item1)} onMouseLeave={() => setCurrentItemId(undefined)} src={`https://ddragon.leagueoflegends.com/cdn/12.13.1/img/item/${playerMatchData[i].item1}.png`}></img></div> : null}
                                {playerMatchData[i].item2 ? <div className={styles.image__dynamic}><img className={styles.item__image} onMouseEnter={() => setCurrentItemId(playerMatchData[i].item2)} onMouseLeave={() => setCurrentItemId(undefined)} src={`https://ddragon.leagueoflegends.com/cdn/12.13.1/img/item/${playerMatchData[i].item2}.png`}></img></div> : null}
                                {playerMatchData[i].item3 ? <div className={styles.image__dynamic}><img className={styles.item__image} onMouseEnter={() => setCurrentItemId(playerMatchData[i].item3)} onMouseLeave={() => setCurrentItemId(undefined)} src={`https://ddragon.leagueoflegends.com/cdn/12.13.1/img/item/${playerMatchData[i].item3}.png`}></img></div> : null}
                                {playerMatchData[i].item4 ? <div className={styles.image__dynamic}><img className={styles.item__image} onMouseEnter={() => setCurrentItemId(playerMatchData[i].item4)} onMouseLeave={() => setCurrentItemId(undefined)} src={`https://ddragon.leagueoflegends.com/cdn/12.13.1/img/item/${playerMatchData[i].item4}.png`}></img></div> : null}
                                {playerMatchData[i].item5 ? <div className={styles.image__dynamic}><img className={styles.item__image} onMouseEnter={() => setCurrentItemId(playerMatchData[i].item5)} onMouseLeave={() => setCurrentItemId(undefined)} src={`https://ddragon.leagueoflegends.com/cdn/12.13.1/img/item/${playerMatchData[i].item5}.png`}></img></div> : null}
                                {playerMatchData[i].item6 ? <div className={styles.image__dynamic}><img className={styles.item__image} onMouseEnter={() => setCurrentItemId(playerMatchData[i].item6)} onMouseLeave={() => setCurrentItemId(undefined)} src={`https://ddragon.leagueoflegends.com/cdn/12.13.1/img/item/${playerMatchData[i].item6}.png`}></img></div> : null}
                            </div>

                            <h4>Total Damage: {playerMatchData[i].totalDamageDealt}</h4>
                            <h4 className={styles.player__creepScore}>CS: {(playerMatchData[i].totalMinionsKilled + playerMatchData[i].neutralMinionsKilled)}</h4>
                            <h4 className={styles.player__game__duration}>{calcTimeSpent(playerMatchData[i].timePlayed).toFixed(0)} min.</h4>
                            <h2 className='text-white'>{playerMatchData[i].lane}</h2>
                        </div>
                    </div>

                ))}

            </section>
        </>
    )
}

export default MatchCard