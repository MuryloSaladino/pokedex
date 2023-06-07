import pokeball from '../../assets/pokeball.png'
import search from '../../assets/search.svg'
import { StyledHeader, StyledCaughtButton, StyledImg, StyledSearchDiv, StyledInput, StyledFavoriteButton } from './styles'
import { useState } from 'react'
import { MainTitle } from '../../styles/typography'

import star from '../../assets/star.svg'
import blankStar from '../../assets/blankstar.svg'
import pokebg from '../../assets/pokeball.svg'

export function Header({setFilter, filter, headlineRef}) {

    const [background, setBackground] = useState(false)
    const [scrollTop, setScrollTop] = useState(0)
    const [headlineHeight, setHeadlineHeight] = useState(300)

    window.addEventListener('scroll', () => {
        setScrollTop(window.pageYOffset)
        setHeadlineHeight(headlineRef.current.offsetHeight)
    })

    if(scrollTop > headlineHeight && !background) {setBackground(true)}
    if(scrollTop < headlineHeight && background) {setBackground(false)}
    
    return(
        <StyledHeader bg={background} >
            <div>
                <StyledImg src={pokeball} width={50} />
                <MainTitle>Pokedex</MainTitle>
            </div>
            <div>
                <StyledCaughtButton
                    filter={filter}
                    onClick={() => filter[1] ? setFilter([filter[0], false, false]) : setFilter([filter[0], true, false])}
                >
                    {filter[1] ? <StyledImg width={'100%'} src={pokebg} /> : null}
                </StyledCaughtButton>
                <StyledFavoriteButton
                    filter={filter}
                    onClick={() => filter[2] ? setFilter([filter[0], false, false]) : setFilter([filter[0], false, true])}
                >
                    {filter[2] ? <StyledImg width={'100%'} src={blankStar} /> : <StyledImg width={'100%'} src={star} />}
                </StyledFavoriteButton>
            </div>
            <SearchInput setFilter={setFilter} filter={filter} />
        </StyledHeader>
    )
}



function SearchInput({ setFilter, filter }) {

    return(
        <StyledSearchDiv>
            <StyledImg src={search} width={30} />
            <StyledInput type="text" placeholder='Nome do pokémon...' onChange={(e) => setFilter([e.target.value, filter[1], filter[2]])} value={filter[0]}/>
        </StyledSearchDiv>
    )
}