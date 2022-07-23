import { React, useRef, useEffect, useState } from 'react'
import searchMatches from './search-matches';
import UserCard from '../components/UserCard';
import MatchCard from '../components/MatchCard';
import analyzeMatches from '../util/analyze-match-history';
import styles from '../styles/Home.module.css'
import axios from 'axios';
function Home() {


    //holds user info after username submit
    const [currentUser, setCurrentUser] = useState()

    // holds users match history information and match data specific
    const [matchHistory, setMatchHistory] = useState()
    const [matchData, setMatchData] = useState()
    // hold input value for username, searches for userdata on riot API
    const userSearchRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        const userParam = userSearchRef.current.value;
        axios.post('http://localhost:3001/userParam', { username: userParam })
            .then((res) => {
                setCurrentUser(res.data)
            })

    }

    // searches up user match history, and then sets the match history
    useEffect(() => {
        if (currentUser) {
            axios.post('http://localhost:3001/getMatchHistory', {
                puuid: currentUser.puuid
            })
                .then((res) => {
                    console.log(res)
                    const pastGames = res.data
                    setMatchHistory(pastGames)
                })
        }

    }, [currentUser])


    useEffect(() => {
        if (matchHistory) {
            axios.post('http://localhost:3001/getMatchData', {
                matchHistory: matchHistory
            })
                .then((res) => {
                    setMatchData(res.data)
                })
        }
    }, [matchHistory])



    console.log(currentUser)

    return (
        <>
            <form style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                <input type='text' placeholder='Enter username...' ref={userSearchRef}></input>
                <button className='btn btn-outline-light' onClick={submitHandler}>Search</button>
            </form>
            <main className={styles.__mainContainer}>
                {currentUser ? <UserCard user={currentUser} /> : <UserCard />}
                <div className={styles.match__container}>
                    {matchData && currentUser && <MatchCard matches={matchData} user={currentUser}></MatchCard>}

                </div>
            </main>
        </>
    )
}

export default Home