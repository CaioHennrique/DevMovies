import styled, {keyframes} from "styled-components";

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
    background-color: rgba(0,0,0,0.5);
}

&::after{
    position: absolute;
content: "";
bottom: 0;
height: 120px;
width: 100%;
background: linear-gradient(180deg,rgba(56, 56, 56, 0) 0%, rgba(0, 0, 0, 1) 96%);
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


`
const Img = styled.img`

height: 600px;
border-radius: 25px;
z-index: 999;
animation: ${scale} 1s linear;
`

export { Background, ContainerConteudo, Img }