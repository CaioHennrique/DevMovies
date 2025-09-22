import styled from "styled-components"
import Breakpoints from "../../styles/breakpoints"
import { IoMdCloseCircle } from "react-icons/io";

const Container = styled.div`

width: 50%;
position: fixed;
padding: 3rem;
display: flex;
flex-direction: column;
align-items: center;
background-color: #000; ;

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
    height: 40%;
    padding: 2rem;

    iframe {
        height: 100%;
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
padding-top: 10rem;
z-index: 999999;

    @media ${ Breakpoints.medio }, ${ Breakpoints.pequeno} {

    padding: 0;

}
`

const FecharIcon = styled(IoMdCloseCircle)`

    color: white;
    font-size: 5rem;
    cursor: pointer;
    margin-bottom: 1rem;
    position: absolute;
    top: -20%;
    

    &:hover{
        color:#ff0000
    }

    @media ${ Breakpoints.medio }, ${ Breakpoints.pequeno} {

    top: -40%;
}


`

export { Container, Background, FecharIcon }
