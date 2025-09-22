import styled, { keyframes } from "styled-components";
import Breakpoints from "../../styles/breakpoints";

const scale = keyframes`

from{
    transform: scale(0.7);
}to{
    transform: scale(1);
}

`
const fadeIn = keyframes`

from{
    opacity: 0.5;
}to{
    opacity: 1;

}

`

const Background = styled.div`
background-image: url( ${(props) => props.imagem});
height: 100vh;
background-position: center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
position: relative;
animation:  ${fadeIn} 1.2s ease-in-out ;
 

&::before{
    content:"" ;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: rgba(0,0,0,0.6);
}

&::after{
    position: absolute;
content: "";
bottom: 0;
height: 120px;
width: 100%;
background: linear-gradient(180deg,rgba(56, 56, 56, 0) 0%, rgba(0, 0, 0, 1) 96%);
}


@media ${Breakpoints.pequeno}, ${Breakpoints.medio}  {

    flex-direction: column-reverse;

}

`
const ContainerConteudo = styled.div`
padding: 2rem;
width: 40%;
margin-right: 5rem;
color: white;
z-index: 999;

h1{

    font-size: 4rem;
    
}

p{
    font-size: 1.2rem;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
}

div{
    display: flex;
}

@media ${Breakpoints.grande} {

    width: 50%;
    margin: 0;

    h1{
        font-size: 2.5rem;
    }
    
    p{
        margin: 1rem 0;
    }
}

@media ${Breakpoints.medio} {

    width: 100%;
    margin: 0 auto ;

    h1{
        font-size: 2.5rem;
    }
    
    p{
        margin: 1rem 0;
    }
}

@media ${Breakpoints.pequeno} {

    width: 100%;
    margin: 0 auto ;

    h1{
        font-size: 1.5rem;
    }
    
    p{
        font-size:1rem;
        margin: 1rem 0;
    }
}



`
const Img = styled.img`

height: 600px;
border-radius: 25px;
z-index: 999;
animation: ${scale} 1s linear;

@media ${Breakpoints.grande}{
    margin-right: 2rem;
    height: 450px;
 
    
}


@media ${Breakpoints.medio}{
    margin-top: 5.5rem;
    height: 380px;
 
    
}

@media ${Breakpoints.pequeno}{
 
    height: 200px;   
    margin-top: 4rem;
}

`

export { Background, ContainerConteudo, Img }