import styles from './styles.module.css'
import lupe from '../../assets/search.svg'

export function SearchInput() {
    return(
        <div className={styles.searchDiv}>
            <img src={lupe}/>
            <input type="text" placeholder='Nome, ID, tipo...'/>
        </div>
    )
}