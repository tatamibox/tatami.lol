const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
require('dotenv').config()
const axios = require('axios')
const API_KEY = process.env.RIOT_API_KEY
app.use(express.json());
app.use(cors())

app.listen(3001, () => {
    console.log('Listening on port 3001')
})

app.post('/userParam', async (req, res) => {
    const { username } = req.body;
    const userInfo = await axios.get(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}?api_key=${API_KEY}`)
        .then((res) => {
            return res.data
        })
    res.json(userInfo)
})
// 

app.post('/getMatchHistory', async (req, res) => {
    const { puuid } = req.body
    const userMatchHistory = await axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?api_key=${API_KEY}`)
        .then((res) => {
            return res.data
        })
    res.json(userMatchHistory)
})