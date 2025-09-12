import { useEffect, useState } from "react"
import { Container, Background, Cover, Info, ContainerTrailers } from "./style"
import { useParams } from "react-router-dom"
import { ObterImagem } from "../../utils/obterImagem"
import { getCredits, getDetalhe, getSimilar, getTrailer } from "../../services/getData"
import Generos from "../../components/generos"
import Creditos from "../../components/creditos"
import SliderContent from "../../components/slider"


function Detalhe() {
  const [trailer, setTrailer] = useState()
  const [credits, setCredits] = useState()
  const [similar, setSimilar] = useState()
  const [detalhe, setDetalhe] = useState()
  const { id } = useParams()

  console.log(trailer)

  useEffect(() => {

    Promise.all([

      getDetalhe(id),
      getTrailer(id),
      getCredits(id),
      getSimilar(id)

    ]).then(([detalhe, trailers, creditos, similares]) => {
      setDetalhe(detalhe)
      setTrailer(trailers)
      setCredits(creditos)
      setSimilar(similares)

    })
  }, [])


  return (
    <>
      {detalhe && (
        <>
          <Background image={ObterImagem(detalhe.backdrop_path)} />

          <Container>
            <Cover>
              <img src={ObterImagem(detalhe.poster_path)} />
            </Cover>
            <Info>
              <h2>{detalhe.title}</h2>
              <Generos generos={detalhe.genres} />
              <p>{detalhe.overview}</p>
              <div>
                <Creditos credits={credits} />
              </div>
            </Info>
            <div>

            </div>

          </Container>
          <ContainerTrailers>

            {trailer && trailer.map(trailer => (
              <div key={trailer.id}>
                <h4>{trailer.name}</h4>
                <iframe src={`https://www.youtube.com/embed/${trailer.key}`}
                  title="Youtube video Player"
                  height="500px"
                  width="100%">
                </iframe>
              </div>

            ))}

          </ContainerTrailers>

          {similar && <SliderContent info={similar} titulo={"Filmes Similares"} />}

        </>
      )}
    </>
  )
}

export default Detalhe