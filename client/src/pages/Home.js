import { React, useRef, useEffect, useState } from 'react'
import searchMatches from './search-matches';
import UserCard from '../components/UserCard';
import axios from 'axios';
function Home() {


    //holds user info after username submit
    const [currentUser, setCurrentUser] = useState()

    // holds users match history information
    const [matchHistory, setMatchHistory] = useState()

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
                    console.log(res)
                })
        }
    }, [matchHistory])



    console.log(currentUser)



    return (
        <>
            <form>
                <input type='text' placeholder='Enter username...' ref={userSearchRef}></input>
                <button className='btn btn-outline-light' onClick={submitHandler}>Search</button>
            </form>
            {currentUser ? <UserCard user={currentUser} /> : <UserCard />}
        </>
    )
}

export default Home