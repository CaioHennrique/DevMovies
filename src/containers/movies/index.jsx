
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
    const [topFilmes, setTopFilmes] = useState();
    const [popularArtistas, setPopularArtistas] = useState();
    const [mostrarModal, setMostrarModal] = useState(false)
    const navegacao = useNavigate()



    useEffect(() => {

        Promise.all([

            ObterFilme(),
            ObterTopFilmes(),
            ObterPopularArtistas()

        ]).then(([filme, topFilmes,popularArtistas]) => {

            setFilme(filme)
            setTopFilmes(topFilmes)
            setPopularArtistas(popularArtistas)

        })
    }, [])

    return (

        <>

            {filme && (
                <Background imagem={ObterImagem(filme[0].backdrop_path)}>
                    {mostrarModal && <Modal filmeId={filme[0].id} mostrarModal={setMostrarModal} />}
                    <ContainerConteudo>
                        <h1>{filme[0].title}</h1>

                        <p>{filme[0].overview}</p>

                        <Button onClick={() => navegacao(`/detalhe/${filme[0].id}`)} vermelho={true}>Assista agora</Button>
                        <Button vermelho={false} onClick={() => setMostrarModal(true)} >Assista o trailer</Button>

                    </ContainerConteudo>

                    <Img src={ObterImagem(filme[0].poster_path)} />

                </Background>
            )}

            {filme && <SliderContent info={filme} titulo={"Filmes"} />}
            {topFilmes && <SliderContent info={topFilmes} titulo={"Top Filmes"} />}
            {popularArtistas && <SliderContent info={popularArtistas} titulo={"Artistas Populares"} />}

        </>

    )
}

export default Filmes