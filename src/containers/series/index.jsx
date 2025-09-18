
import { useState, useEffect } from "react"

import { Background, ContainerConteudo, Img } from "../Home/style"
import Button from "../../components/button"
import SliderContent from "../../components/slider"
import { ObterImagem } from "../../utils/obterImagem"
import Modal from "../../components/modal"
import { useNavigate } from "react-router-dom"
import { ObterPopularArtistas, ObterPopularSeries, ObterTopSeries } from "../../services/getData"



function Series() {

    const [topSeries, setTopSeries] = useState([]);
    const [index, setIndex] = useState(0)
    const [popularSeries, setPopularSeries] = useState();
    const [popularArtistas, setPopularArtistas] = useState();
    const [mostrarModal, setMostrarModal] = useState(false)
    const navegacao = useNavigate()



    useEffect(() => {

        Promise.all([

            ObterTopSeries(),
            ObterPopularSeries(),
            ObterPopularArtistas()

        ]).then(([topSeries, popularSeries, popularArtistas,]) => {

            setTopSeries(topSeries)
            setPopularSeries(popularSeries)
            setPopularArtistas(popularArtistas)

        })
    }, [])


    useEffect(() => {

        if (topSeries.length > 0) {
            const intervalo = setInterval(() => {
                setIndex((prev) => (prev + 1) % topSeries.length)
            }, 15000)

            return () => clearInterval(intervalo)
        }

    }, [topSeries])

    const destaqueAtual = topSeries[index]

    return (

        <>

            {destaqueAtual && (
                <Background imagem={ObterImagem(destaqueAtual.backdrop_path)}>
                    {mostrarModal && <Modal tipo="serie" filmeId={destaqueAtual.id} mostrarModal={setMostrarModal} />}
                    <ContainerConteudo>
                        <h1>{destaqueAtual.name}</h1>

                        <p>{destaqueAtual.overview}</p>
                        
                        <div>
                            <Button onClick={() => navegacao(`/detalheSerie/${destaqueAtual.id}`)} vermelho={true}>Assista agora</Button>
                            <Button vermelho={false} onClick={() => setMostrarModal(true)} >Assista o trailer</Button>
                        </div>
                    </ContainerConteudo>

                    <Img src={ObterImagem(destaqueAtual.poster_path)} />

                </Background>
            )}

            {popularSeries && <SliderContent info={popularSeries} titulo={"Séries Populares"} />}
            {topSeries && <SliderContent info={topSeries} titulo={"Top Séries"} />}
            {popularArtistas && <SliderContent info={popularArtistas} titulo={"Artistas Populares"} />}

        </>

    )
}

export default Series