import axios from "axios";

export default async function searchMatches(matchHistory) {
    const matchData = await axios.post('https://tatsever.vercel.app/getMatchData', {
        matchHistory: matchHistory
    })
        .then((res) => {

            return res.data

        })

    return matchData

}