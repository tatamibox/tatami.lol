import axios from "axios";

export default async function searchMatches(matchHistory) {
    const matchData = await axios.post('http://localhost:3001/getMatchData', {
        matchHistory: matchHistory
    })
        .then((res) => {

            return res.data

        })

    return matchData

}