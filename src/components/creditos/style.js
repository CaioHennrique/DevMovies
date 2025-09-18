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
    overflow: hidden;

}

@media ${Breakpoints.medio} {

     flex-wrap: wrap;
    img{
        height: 250px;
    }
}


@media ${Breakpoints.pequeno} {

     flex-wrap: wrap;
    img{
        height: 200px;
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

export {Container, Title}
