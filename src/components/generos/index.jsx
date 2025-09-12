import { Container } from "./style"

function Generos({ generos }) {
  return (
    <Container>
      {generos && generos.map(genero => (
        
        <span key={genero.id}>{genero.name}</span>
      ))}
    </Container>
  )
}

export default Generos