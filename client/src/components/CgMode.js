import { useState, useEffect, React } from 'react'
import styles from '../styles/CgMode.module.css'
import championsByRoles from '../data/champ-roles'

function CgMode() {
    const [role, setRole] = useState(0)
    const [currentChamp, setCurrentChamp] = useState()
    const rollChampion = () => {
        let counter = 0;
        const champPic = setInterval(() => {
            setCurrentChamp(championsByRoles[role][Math.floor(Math.random() * championsByRoles[role].length)])
            counter += 1
            if (counter === 10) {
                clearInterval(champPic)
            }
        }, 50);




    }
    return (
        <div className={styles.cg__container}>
            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                <div class="btn-group me-2" role="group" aria-label="First group">
                    <button type="button" class="btn btn-primary" onClick={() => setRole(0)}>Jg</button>
                    <button type="button" class="btn btn-primary" onClick={() => setRole(2)}>Supp</button>
                    <button type="button" class="btn btn-primary" onClick={() => setRole(3)}>ADC</button>
                    <button type="button" class="btn btn-primary" onClick={() => setRole(4)}>Mid</button>
                    <button type="button" class="btn btn-primary" onClick={() => setRole(1)}>Top</button>
                </div>

            </div>
            {currentChamp &&
                <>
                    <img src={`https://ddragon.leagueoflegends.com/cdn/12.13.1/img/champion/${currentChamp}.png`}></img>
                </>
            }
            <button onClick={() => rollChampion(role)} className='btn btn-light' >Roll</button>
        </div>
    )
}

export default CgMode