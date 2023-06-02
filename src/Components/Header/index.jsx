import pokeball from '../../assets/pokeball.png'
import { SearchInput } from './SearchInput'
import { CaughtFilter } from '../subcomponents/CaughtFilter'
import { StyledHeader } from './styles'
import { StyledImg } from './SearchInput/styles'
import { useState } from 'react'
import { MainTitle } from '../../styles/typography'

export function Header({setFilter, filter}) {

    const [background, setBackground] = useState(false)
    const [scrollTop, setScrollTop] = useState(0)

    document.querySelector('html').addEventListener('scroll', () => setScrollTop(document.querySelector('html').scrollTop))

    if(scrollTop > 150 && !background) {setBackground(true)}
    if(scrollTop < 150 && background) {setBackground(false)}
    
    return(
        <StyledHeader bg={background} >
            <div>
                <StyledImg src={pokeball} width={50} />
                <MainTitle>Pokedex</MainTitle>
            </div>
            <div>
                <CaughtFilter isMain={true}/>
            </div>
            <SearchInput setFilter={setFilter} filter={filter} />
        </StyledHeader>
    )
}