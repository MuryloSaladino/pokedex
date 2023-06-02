import pokeball from '../../assets/pokeball.png'
import { SearchInput } from './SearchInput'
import { CaughtFilter } from '../subcomponents/CaughtFilter'
import { StyledHeader } from './styles'
import { StyledImg } from './SearchInput/styles'
import { useState } from 'react'
import { MainTitle } from '../../styles/typography'

export function Header() {

    const [background, setBackground] = useState(false)
    
    return(
        <StyledHeader bg={background} >
            <div>
                <StyledImg src={pokeball} width={50} />
                <MainTitle>Pokedex</MainTitle>
            </div>
            <div>
                <CaughtFilter isMain={true}/>
            </div>
            <SearchInput/>
        </StyledHeader>
    )
}