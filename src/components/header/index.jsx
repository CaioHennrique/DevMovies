import Logo from "../../assets/logo.png"
import { Container, Menu, Li } from "./style.js"
import { Link, useLocation } from "react-router-dom"
import { useState } from "react"

function Header() {

  const [mudarBackground, setMudarBackground] = useState(false)
  const { pathname } = useLocation()

  window.onscroll = () => {
    
    if(!mudarBackground && window.pageYOffset > 150){
      setMudarBackground(true)
    }
    if(mudarBackground && window.pageYOffset <= 150){
      setMudarBackground(false)
    }

  }

  return (

    <Container $mudarCor={mudarBackground}>

      <img src={Logo} alt="logo-dev-movies" />
      <Menu>
        <Li $estaAtivo={pathname === "/"}>
          <Link to={"/"} >Home</Link>
        </Li>
        <Li $estaAtivo={(pathname.includes("filmes"))}>
          <Link to={"/filmes"} >Filmes</Link>
        </Li>
        <Li $estaAtivo={(pathname.includes("series"))}>
          <Link to={"/series"}  >Series</Link>
        </Li>
      </Menu>

    </Container>

  )
}

export default Header