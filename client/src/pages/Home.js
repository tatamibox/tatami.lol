import { React, useRef, useEffect, useState } from 'react'
import searchMatches from './search-matches';
import UserCard from '../components/UserCard';
import MatchCard from '../components/MatchCard';
import StatsCorner from '../components/StatsCorner';
import FunCorner from '../components/FunCorner';
import LoadingMatchCards from '../components/LoadingMatchCards';
import MobileFooter from '../components/MobileFooter';
import ItemCard from '../components/ItemCard';
import Hero from '../components/Hero';
import analyzeMatches from '../util/analyze-match-history';
import styles from '../styles/Home.module.css'
import axios from 'axios';
function Home() {

    const [playerMatchData, setPlayerMatchData] = useState()


    //
    const extractPlayerMatchData = (history) => {
        setPlayerMatchData(history)
        let winCount = 0;
        for (let match of history) {
            if (match.win === true) {
                winCount++;
            }
        }
        setUserWins(winCount)
    }

    //holds user info after username submit
    const [currentUser, setCurrentUser] = useState()
    const [userWins, setUserWins] = useState(0)
    const [loading, setLoading] = useState(false)
    // holds users match history information and match data specific
    const [matchHistory, setMatchHistory] = useState()
    const [matchData, setMatchData] = useState()
    // hold input value for username, searches for userdata on riot API
    const userSearchRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        setLoading(true)
        setCurrentUser('')
        setMatchData('')
        setMatchHistory('')
        setUserWins('')
        setUserError(false)
        setOtherErrors(false)

        const userParam = userSearchRef.current.value;
        axios.post('http://localhost:3001/userParam', { username: userParam })
            .then((res) => {
                setCurrentUser(res.data)
            })
            .catch((err) => {
                console.log('There is an error.', err)
                handleUserError()
            })

        userSearchRef.current.value = ''
    }


    //handles user errors on the front end, other errors
    const [userError, setUserError] = useState(false)
    const handleUserError = () => {
        setUserError(true)
    }
    const [otherErrors, setOtherErrors] = useState(false)
    const [otherErrorMessage, setOtherErrorMessage] = useState('')
    const handleOtherErrors = () => {
        setOtherErrors(true)
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
                .catch((err) => {
                    setOtherErrorMessage(err.response.statusText)
                    handleOtherErrors()
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
                .catch((err) => {
                    setOtherErrorMessage(err.response.statusText)
                    handleOtherErrors()
                })
        }
    }, [matchHistory])

    useEffect(() => {
        if (userWins) {
            setLoading(false)
        }
    }, [userWins])

    return (
        <>
            {!currentUser && <Hero />}

            <form style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }} className={styles.home__form}>
                <input type='text' placeholder='Enter username...' ref={userSearchRef} className={styles.home__input}></input>

                <button className='btn btn-outline-light' onClick={submitHandler}>Search</button>
            </form>

            {userError && <div style={{ color: 'red' }} className='text-center mt-1'>The requested player does not exist.</div>}
            {otherErrors && <div style={{ color: 'red' }} className='text-center mt-1'>Error: {otherErrorMessage}</div>}
            {/* main area for all shown profile content and hero */}
            <main className={styles.__mainContainer}>
                {currentUser ? <section className={styles.left__side}><UserCard user={currentUser} wins={userWins} loadingStatus={loading} /><StatsCorner data={playerMatchData} /><FunCorner /></section> : <UserCard />}

                <div className={styles.match__container}>
                    {matchData && currentUser && <MatchCard matches={matchData} user={currentUser} extractPlayerMatchData={extractPlayerMatchData} ></MatchCard>}
                    {loading && <LoadingMatchCards />}
                </div>
            </main>
            {!currentUser && <MobileFooter />}
        </>
    )
}

export default Home