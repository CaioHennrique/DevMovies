import { ObterImagem } from "../../utils/obterImagem"
import { Container, Title} from "./style"

function Creditos({credits}) {

  return (
    <>
     <Title>Créditos</Title>
      {credits && (
        <Container>
          {credits.slice(0, 5).map(artista => (

           <div key={artista.id}>
            <img src={ObterImagem(artista.profile_path)} />
            <p>{artista.original_name}</p>
           </div>
             
          ))}

        </Container>
      )}
    </>
  )
}

export default Creditos