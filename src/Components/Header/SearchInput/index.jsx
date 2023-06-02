import { StyledImg, StyledInput, StyledSearchDiv } from './styles'
import search from '../../../assets/search.svg'

export function SearchInput() {
    return(
        <StyledSearchDiv>
            <StyledImg src={search} width={30} />
            <StyledInput type="text" placeholder='Nome, ID, tipo...'/>
        </StyledSearchDiv>
    )
}