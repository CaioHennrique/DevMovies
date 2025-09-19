import styled from "styled-components"
import Breakpoints from "../../styles/breakpoints"

const Container = styled.div`

width: 50%;
position: fixed;
padding: 3rem;
background-color: #000;

iframe{
    border: none;
}

@media ${Breakpoints.grande}{
    width: 95%;
}

@media ${Breakpoints.controleWidthModal} {

    width: 60%;
    
}

@media ${ Breakpoints.medio }, ${ Breakpoints.pequeno} {

    width: 90%;

    iframe {
        
    }
  
    
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
