import { Swiper, SwiperSlide } from "swiper/react"
import  Container from "./style"
import Card from "../card"


function SliderContent({ info, titulo }) {

    return (

        <Container>
            <h2>{titulo}</h2>
            <Swiper
                grabCursor={true}  // cursor de mao para navegar
                spaceBetween={20} // a distancia de um item para outro valor em pix
                slidesPerView={"auto"} // quantos itens quer que apareca na tela , auto ele define 

            >
                {info.map((topFilme, index) => (

                    <SwiperSlide key={index}>
                        
                          <Card item={topFilme} />
                     
                    </SwiperSlide>

                ))}

            </Swiper>
        </Container>

    )

}

export default SliderContent