import styles from './styles.module.css'
import pokeball from '../../assets/pokeball.png'
import { SearchInput } from '../subcomponents/SearchInput'
import { CaughtFilter } from '../subcomponents/CaughtFilter'

export function Header() {
    return(
        <header className={styles.header}>
            <div className={styles.logoDiv}>
                <img className={styles.pokeball} src={pokeball} />
                <h1>Pokedex</h1>
            </div>
            <div className={styles.filtersDiv}>
                <CaughtFilter isMain={true}/>
            </div>
            <SearchInput/>
        </header>
    )
}