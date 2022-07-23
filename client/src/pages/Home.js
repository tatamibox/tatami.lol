import { React, useRef, useEffect, useState } from 'react'
import axios from 'axios';
function Home() {


    //holds user info after username submit
    const [currentUser, setCurrentUser] = useState()

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



    // searches up user match history
    const getMatchHistory = async () => {
        const matchHistory = await axios.post('http://localhost:3001/getMatchHistory', {
            puuid: currentUser.puuid
        })
            .then((res) => {
                return res.data
            })
        return matchHistory

    }
    //useEffect for getting currentUser's match IDS once currentUser is found
    useEffect(() => {
        if (!currentUser) {
            return
        }
        else {
            const matchHistory = getMatchHistory()
            console.log(matchHistory)
        }
    }, [currentUser])
    console.log(currentUser)
    return (
        <>
            <form>
                <input type='text' placeholder='Enter username...' ref={userSearchRef}></input>
                <button className='btn btn-outline-light' onClick={submitHandler}>Search</button>
            </form>
        </>
    )
}

export default Home