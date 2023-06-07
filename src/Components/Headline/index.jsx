import pokeBattle from '../../assets/pokebattle.jpg'
import { StyledHeadlineSection } from './styles'

export function Headline({headlineRef}) {
    
    return(
        <StyledHeadlineSection ref={headlineRef}>
            <img src={pokeBattle} alt="Pokebattle image" />
        </StyledHeadlineSection>
    )
}