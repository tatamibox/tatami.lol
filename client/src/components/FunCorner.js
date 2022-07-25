import { useEffect, useState, React } from 'react'
import styles from '../styles/FunCorner.module.css'
import CgMode from './CgMode'
function FunCorner() {

    // cgmode stands for champgenmode, changes the state of the container in inters corner
    // to the random champ generator app

    const [cgMode, setCgMode] = useState(false)


    console.log(cgMode)
    return (
        <section className={styles.fc__container}>
            <h3 className='text-white'>
                Inter's Corner
            </h3>
            <div className={styles.button__container}>
                <button className='btn btn-outline-light' onClick={() => setCgMode(!cgMode)}>Random Champ Gen</button>
                <button className='btn btn-outline-light'>Coming soon...</button>
            </div>
            <div>
                {cgMode && <CgMode />}
            </div>
        </section>
    )
}

export default FunCorner