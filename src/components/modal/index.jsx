import { useState, useEffect } from "react"


import { Container, Background } from "./style"
import { getTrailer } from "../../services/getData"





function Modal({ filmeId, mostrarModal }) {
  const [trailer, setTrailer] = useState()

  useEffect(() => {

    async function obterTrailer() {

      setTrailer(await getTrailer(filmeId))

    }
    obterTrailer()

  }, [])



  return (

    <Background onClick={() => mostrarModal(false)}>
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