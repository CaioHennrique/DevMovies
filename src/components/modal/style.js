import styled from "styled-components"
import breakpoints from "../../styles/breakpoints"

const Container = styled.div`

width: 50%;
position: fixed;
padding: 3rem;
background-color: #000;

iframe{
    border: none;
}

@media ${breakpoints.medio} {

    width: 95%;
    
}


@media ${breakpoints.pequeno} {

    width: 95%;
    
}
`
const Background = styled.div`

height: 100vh;
width: 100%;
background-color: #00000089;
position: absolute;
display: flex;
align-items: center;
justify-content: center;
z-index: 999999;
`

export { Container, Background }
