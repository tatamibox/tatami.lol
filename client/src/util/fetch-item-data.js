import axios from 'axios';

const fetchItemData = (itemId, cb) => {
    axios.get('https://ddragon.leagueoflegends.com/cdn/12.13.1/data/en_US/item.json')
        .then((res) => {
            const allLeagueItems = res.data.data
            const specifiedItem = allLeagueItems[itemId]
            cb(specifiedItem)
        })
}

export default fetchItemData