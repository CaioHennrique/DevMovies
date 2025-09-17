import styled from "styled-components"
import Breakpoints from "../../styles/breakpoints"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
img {
    height: 500px;
    width: auto;
    border-radius: 20px;
}

h3{
    color: white;
    margin: 1rem 0;

}

@media ${Breakpoints.pequeno} {
  
  img{
    height: 250px;
  }

  h3{
    font-size: 1rem;
  }
}

`



export default Container
