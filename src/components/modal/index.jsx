import { useState, useEffect } from "react"


import { Container, Background } from "./style"
import { ObterTrailer, ObterTrailerSerie } from "../../services/getData"





function Modal({ tipo, filmeId, mostrarModal }) {
  const [trailer, setTrailer] = useState()
  const [trailerSerie, setTrailerSerie] = useState()

  useEffect(() => {

    async function obterTrailer() {


      if (tipo == "serie") {
        setTrailerSerie(await ObterTrailerSerie(filmeId))
      }
      else {
        setTrailer(await ObterTrailer(filmeId))
      }


    }
    obterTrailer()

  }, [])



  return (

    <Background onClick={() => mostrarModal(false)}>
      {trailerSerie && (
        <Container>
          <iframe src={`https://www.youtube.com/embed/${trailerSerie[0].key}`}
            title="Youtube video Player"
            height="500px"
            width="100%">
          </iframe>

        </Container>
      )}
      {trailer && (
        <Container>
          <iframe src={`https://www.youtube.com/embed/${trailer[0].key}`}
            title="Youtube video Player"
            height="500px"
            width="100%">
          </iframe>

        </Container>
      )}
    </Background >
  )
}

export default Modal