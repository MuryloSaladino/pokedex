import styles from './styles.module.css'

export function CaughtFilter({ isMain }) {

    const svg = <svg height="40" width="40"></svg>
    const circle = <circle onClick={(e) => {e.target.append(path)}} cx="20" cy="20" r="16" stroke="#343A40" strokeWidth="2" fill="transparent" />
    const path = <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z"/>

    if(isMain){
        
        return(
            circle
        )
    }
    return(
        <svg height="30" width="30">
            <circle cx="15" cy="15" r="12" stroke="#343A40" stroke-width="2" fill="transparent" />
        </svg>
    )
}