import { useEffect, useState } from "react"
import { Container, Background, Cover, Info, ContainerTrailers } from "../detalhe/style"
import { useParams } from "react-router-dom"
import { ObterImagem } from "../../utils/obterImagem"
import { ObterCreditosSeries, ObterDetalheSeries, ObterSimilaresSeries, ObterTrailerSerie } from "../../services/getData"
import Generos from "../../components/generos"
import Creditos from "../../components/creditos"
import SliderContent from "../../components/slider"


function DetalheSerie() {

  const [trailerSerie, setTrailerSerie] = useState()
  const [creditosSerie, setCreditosSerie] = useState()
  const [similaresSerie, setSimilaresSerie] = useState()
  const [detalheSerie, setDetalheSerie] = useState()
  const { id } = useParams()

  useEffect(() => {

    Promise.all([

      ObterDetalheSeries(id),
      ObterTrailerSerie(id),
      ObterCreditosSeries(id),
      ObterSimilaresSeries(id)

    ]).then(([detalheSerie, trailersSerie, creditosSerie, similaresSerie]) => {

      setDetalheSerie(detalheSerie)
      setTrailerSerie(trailersSerie)
      setCreditosSerie(creditosSerie)
      setSimilaresSerie(similaresSerie)

    })
  }, [])


  return (
    <>

      {/* tela de detalhe de serie */}
      {detalheSerie && (
        <>
          <Background image={ObterImagem(detalheSerie.backdrop_path)} />

          <Container>
            <Cover>
              <img src={ObterImagem(detalheSerie.poster_path)} />
            </Cover>
            <Info>
              <h2>{detalheSerie.name}</h2>
              <Generos generos={detalheSerie.genres} />
              <p>{detalheSerie.overview}</p>
              <div>
                <Creditos credits={creditosSerie} />
              </div>
            </Info>
            <div>

            </div>

          </Container>
          <ContainerTrailers>

            {trailerSerie && trailerSerie.map(trailer => (
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

          {similaresSerie && <SliderContent info={similaresSerie} titulo={"Series Similares"} />}

        </>
      )}
    </>
  )
}

export default DetalheSerie