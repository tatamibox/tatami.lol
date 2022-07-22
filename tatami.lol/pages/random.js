import React from 'react'
import axios from 'axios';
import randomStyles from '../styles/randomStyles.module.css'
import Randomizer from '../components/Randomizer';
function random({ champions }) {

    console.log(champions)
    return (
        <>
            <section className={randomStyles.__randomizerSection}>
                <div className={randomStyles.left__side}>
                    <img src={`https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/${'Teemo'}.png`}></img>
                    <div>random</div>
                </div>
                <Randomizer className={randomStyles.randomizer__card}>
                </Randomizer>
            </section>
        </>

    )
}
// https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Aatrox.png
// fetching champion data from Riot API, static rendering
export async function getStaticProps() {
    try {
        const res = await axios.get('https://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/champion.json');
        console.log(res)
        const champions = res.data;
        return {
            props: {
                champions
            }
        }
    } catch (e) {
        return { e };
    }
}



export default random;