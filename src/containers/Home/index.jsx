
import { useState, useEffect } from "react"

import { Background, ContainerConteudo, Img } from "./style"
import Button from "../../components/button"
import SliderContent from "../../components/slider"
import { ObterImagem } from "../../utils/obterImagem"
import Modal from "../../components/modal"
import { useNavigate } from "react-router-dom"
import { ObterFilme, ObterPopularArtistas, ObterPopularSeries, ObterTopFilmes, ObterTopSeries } from "../../services/getData"




function Home() {

    const [filme, setFilme] = useState([]);
    const [index, setIndex] = useState(0)
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


    useEffect(() => {

        if (filme.length > 0) {
            const intervalo = setInterval(() => {
                setIndex((prev) => (prev + 1) % filme.length)
            }, 15000)
            return () => clearInterval(intervalo)
        }
    }, [filme])

    const destaqueAtual = filme[index]

    return (

        <>

            {destaqueAtual && (
                <Background key={destaqueAtual.id} imagem={ObterImagem(destaqueAtual.backdrop_path)}>
                    {mostrarModal && <Modal filmeId={destaqueAtual.id} mostrarModal={setMostrarModal} />}
                    <ContainerConteudo>
                        <h1>{destaqueAtual.title}</h1>

                        <p>{destaqueAtual.overview}</p>


                        <div>
                            <Button onClick={() => navegacao(`/detalhe/${destaqueAtual.id}`)} vermelho={true}>Assista agora</Button>
                            <Button vermelho={false} onClick={() => setMostrarModal(true)} >Assista o trailer</Button>
                        </div>

                    </ContainerConteudo>

                    <Img src={ObterImagem(destaqueAtual.poster_path)} />

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