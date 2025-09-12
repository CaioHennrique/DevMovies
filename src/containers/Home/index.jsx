
import { useState, useEffect } from "react"

import { Background, ContainerConteudo, Img } from "./style"
import Button from "../../components/button"
import SliderContent from "../../components/slider"
import { ObterImagem } from "../../utils/obterImagem"
import Modal from "../../components/modal"
import { useNavigate } from "react-router-dom"
import { ObterFilme, ObterPopularArtistas, ObterPopularSeries, ObterTopFilmes, ObterTopSeries } from "../../services/getData"



function Home() {

    const [filme, setFilme] = useState();
    const [topFilmes, setTopFilmes] = useState();
    const [topSeries, setTopSeries] = useState();
    const [popularSeries, setPopularSeries] = useState();
    const [popularArtistas, setPopularArtistas] = useState();
    const [mostrarModal, setMostrarModal] = useState(false)
    const navegacao = useNavigate()



    useEffect(() => {

        Promise.all([

            ObterFilme(),
            ObterTopFilmes(),
            ObterTopSeries(),
            ObterPopularSeries(),
            ObterPopularArtistas()

        ]).then(([filme, topFilmes, topSeries, popularSeries, popularArtistas]) => {

            setFilme(filme)
            setTopFilmes(topFilmes)
            setTopSeries(topSeries)
            setPopularSeries(popularSeries)
            setPopularArtistas(popularArtistas)

        })
    }, [])

    return (

        <>

            {filme && (
                <Background imagem={ObterImagem(filme[1].backdrop_path)}>
                    {mostrarModal && <Modal filmeId={filme[1].id} mostrarModal={setMostrarModal} />}
                    <ContainerConteudo>
                        <h1>{filme[1].title}</h1>

                        <p>{filme[1].overview}</p>

                        <Button onClick={() => navegacao(`/detalhe/${filme[1].id}`)} vermelho={true}>Assista agora</Button>
                        <Button vermelho={false} onClick={() => setMostrarModal(true)} >Assista o trailer</Button>

                    </ContainerConteudo>

                    <Img src={ObterImagem(filme[1].poster_path)} />

                </Background>
            )}

            {filme && <SliderContent info={filme} titulo={"Filmes"} />}
            {topFilmes && <SliderContent info={topFilmes} titulo={"Top Filmes"} />}
            {topSeries && <SliderContent info={topSeries} titulo={"Top Séries"} />}
            {popularSeries && <SliderContent info={popularSeries} titulo={"Séries Populares"} />}
            {popularArtistas && <SliderContent info={popularArtistas} titulo={"Artistas Populares"} />}

        </>

    )
}

export default Home