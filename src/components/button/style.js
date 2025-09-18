import styled, {css} from "styled-components"
import Breakpoints from "../../styles/breakpoints"

const btn = css`

padding: 1rem;
border-radius: 30px;
border: none;
font-size: 1.2rem;
font-weight: 600;
cursor: pointer;
background-color: transparent;
color: white;
border: 3px solid white;
transition: all .3s;
letter-spacing: 2px;

&:hover{

    background-color: white;
    color: #FF0000;

}

@media ${Breakpoints.pequeno} {

    font-size: 1rem;
    padding: .5rem .8rem;
    
}

` 

const BtnRed = styled.button`
${btn}

margin-right: 1.5rem;
background-color: #ff0000;
border: 3px solid transparent;
box-shadow: 0px 0px 7px 8px rgb(255 0 0 /30%);

&:hover{
    box-shadow: 0px 0px 7px 15px rgb(255 0 0 /30%);
    background-color: #ff0000;
    color: white;
}


`
const BtnWhite = styled.button`
${btn}
`

export {BtnRed, BtnWhite}
