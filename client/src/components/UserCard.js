import { useEffect, useState, React, useRef } from 'react'
import styles from '../styles/UserCard.module.css'
import axios from 'axios'
import changeBadgeColor from '../util/badge-color'

function UserCard({ user }) {

    // fetches user rank on user load & holds league info (current user rank, etc) and 
    const [leagueInfo, setLeagueInfo] = useState()
    const [counter, setCounter] = useState(0)
    const [badgeColor, setBadgeColor] = useState('#edf2f4')

    useEffect(() => {
        if (user) {
            axios.post('http://localhost:3001/getRankedData', { id: user.id })
                .then((res) => {
                    setLeagueInfo(res.data[0])
                    setCounter(counter + 1)
                })
        }
        else { return }

    }, [user])

    // uses the counter state, checks if the returned leagueInfo is undefined.
    // if undefined, sets leagueInfo to unranked
    let ssString = '';
    useEffect(() => {
        if (leagueInfo === undefined) {
            setLeagueInfo({
                tier: 'Unranked',
                rank: '',
            })

        }
        else if (leagueInfo !== undefined) {
            //uses badge color change from util to change rank backgrounds
            changeBadgeColor(leagueInfo.tier, setBadgeColor)
        }

    }, [counter])


    //
    console.log(leagueInfo)

    return (
        <>
            {user && leagueInfo ? <section className={styles.userCard__container}>
                <img src={`https://ddragon.leagueoflegends.com/cdn/12.13.1/img/profileicon/${user.profileIconId}.png`} alt='Summoner Icon'></img>
                <div className={styles.summonerInfo}>
                    <h2>{user.name}</h2>
                    <h3>Level {user.summonerLevel}</h3>
                    <h3 style={{ backgroundColor: `${badgeColor}` }} className={styles.summoner__rank}>{`${leagueInfo.tier} ${leagueInfo.rank}`}</h3>
                </div>
                <div className={styles.summonerInfo} style={{ gap: '0.5rem' }}>
                    <h4>Ranked wins: <span style={{ backgroundColor: '#96e072', padding: '0.1rem 0.2rem' }}>{leagueInfo.wins}</span></h4>
                    <h4>Ranked losses: <span style={{ backgroundColor: '#f45b69', padding: '0.1rem 0.2rem' }}>{leagueInfo.losses}</span></h4>
                    <h4>Win / Loss (10 Games): </h4>

                </div>
            </section> : <div></div>}
        </>
    )
}

export default UserCard