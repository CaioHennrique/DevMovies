
import { useState, useEffect } from "react"

import { Background, ContainerConteudo, Img } from "./style"
import Button from "../../components/button"
import SliderContent from "../../components/slider"
import { ObterImagem } from "../../utils/obterImagem"
import Modal from "../../components/modal"
import { useNavigate } from "react-router-dom"
import { ObterFilme, ObterPopularArtistas, ObterTopFilmes } from "../../services/getData"



function Filmes() {

    const [filme, setFilme] = useState();
    const [index, setIndex] = useState(1)
    const [topFilmes, setTopFilmes] = useState([]);
    const [popularArtistas, setPopularArtistas] = useState();
    const [mostrarModal, setMostrarModal] = useState(false)
    const navegacao = useNavigate()



    useEffect(() => {

        Promise.all([

            ObterFilme(),
            ObterTopFilmes(),
            ObterPopularArtistas()

        ]).then(([filme, topFilmes, popularArtistas]) => {

            setFilme(filme)
            setTopFilmes(topFilmes)
            setPopularArtistas(popularArtistas)

        })
    }, [])

    useEffect(() => {
        if (topFilmes.length > 1) {
            const intervalo = setInterval(() => {
                setIndex((prev) => (prev + 1) % topFilmes.length)
            } ,15000)
            return () => clearInterval(intervalo)
        }
    }, [topFilmes])

    const destaqueAtual = topFilmes[index]

    return (

        <>

            {destaqueAtual && (
                <Background  key={destaqueAtual.id}  imagem={ObterImagem(destaqueAtual.backdrop_path)}>
                    {mostrarModal && <Modal filmeId={destaqueAtual.id} mostrarModal={setMostrarModal} />}
                    <ContainerConteudo>
                        <h1>{destaqueAtual.title}</h1>

                        <p>{destaqueAtual.overview}</p>

                        <Button onClick={() => navegacao(`/detalhe/${destaqueAtual.id}`)} vermelho={true}>Assista agora</Button>
                        <Button vermelho={false} onClick={() => setMostrarModal(true)} >Assista o trailer</Button>

                    </ContainerConteudo>

                    <Img src={ObterImagem(destaqueAtual.poster_path)} />

                </Background>
            )}

            {filme && <SliderContent info={filme} titulo={"Filmes"} />}
            {topFilmes && <SliderContent info={topFilmes} titulo={"Top Filmes"} />}
            {popularArtistas && <SliderContent info={popularArtistas} titulo={"Artistas Populares"} />}

        </>

    )
}

export default Filmes