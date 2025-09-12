
import { useState, useEffect } from "react"

import { Background, ContainerConteudo, Img } from "./style"
import Button from "../../components/button"
import SliderContent from "../../components/slider"
import { ObterImagem } from "../../utils/obterImagem"
import Modal from "../../components/modal"
import { useNavigate } from "react-router-dom"
import {ObterPopularArtistas, ObterPopularSeries, ObterTopSeries} from "../../services/getData"



function Series() {

    const [topSeries, setTopSeries] = useState();
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

    return (

        <>

            {popularSeries && (
                <Background imagem={ObterImagem(popularSeries[1].backdrop_path)}>
                    {mostrarModal && <Modal tipo="serie" filmeId={popularSeries[1].id} mostrarModal={setMostrarModal} />}
                    <ContainerConteudo>
                        <h1>{popularSeries[1].name}</h1>

                        <p>{popularSeries[1].overview}</p>

                        <Button onClick={() => navegacao(`/detalhe/${popularSeries[1].id}`)} vermelho={true}>Assista agora</Button>
                        <Button vermelho={false} onClick={() => setMostrarModal(true)} >Assista o trailer</Button>

                    </ContainerConteudo>

                    <Img src={ObterImagem(popularSeries[1].poster_path)} />

                </Background>
            )}
            
            {popularSeries && <SliderContent info={popularSeries} titulo={"Séries Populares"} />}
            {topSeries && <SliderContent info={topSeries} titulo={"Top Séries"} />}
            {popularArtistas && <SliderContent info={popularArtistas} titulo={"Artistas Populares"} />}

        </>

    )
}

export default Series