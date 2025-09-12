import { ObterImagem } from "../../utils/obterImagem"
import  Container  from "./style"

function Card({ item }) {

  return (

    <Container>

      <img src={ObterImagem(item.poster_path || item.profile_path || "" )} />

      <h3>{item.title || item.name }</h3>

    </Container>

  )
}

export default Card