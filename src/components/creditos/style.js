import styled from "styled-components"
import Breakpoints from "../../styles/breakpoints"

const Container = styled.div`

display: flex;
align-items: flex-start;
justify-content: center;
gap: 1rem;

img{
    height: 300px;
    width: auto;
}

@media ${Breakpoints.grande}, ${Breakpoints.medio} {

     flex-wrap: wrap;
    img{
        height: 250px;
    }
    p{
        font-size: 1.2rem;
        margin: 0;
    }
}


@media ${Breakpoints.pequeno} {

     flex-wrap: wrap;
    img{
        height: 230px;
    }
    p{
        font-size: 1.2rem;
        margin: 0;
    }
}


`
const Title = styled.h3`

font-size: 3rem;
margin: 1.5rem 0 ;

@media ${Breakpoints.pequeno} {
    font-size: 2rem;
}

`

export { Container, Title }
