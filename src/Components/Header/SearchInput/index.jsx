import { StyledImg, StyledInput, StyledSearchDiv } from './styles'
import search from '../../../assets/search.svg'

export function SearchInput({ setFilter, filter }) {

    return(
        <StyledSearchDiv>
            <StyledImg src={search} width={30} />
            <StyledInput type="text" placeholder='Nome, ID, tipo...' onChange={(e) => setFilter(e.target.value)} value={filter}/>
        </StyledSearchDiv>
    )
}