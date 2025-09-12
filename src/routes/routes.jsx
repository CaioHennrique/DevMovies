import { Route, Routes } from "react-router-dom";
import Home from "../containers/Home"
import Filmes from "../containers/movies"
import Series from "../containers/series"
import LayoutPadrao from "../layout/layoutPadrao";
import Detalhe from "../containers/detalhe";

function Rotas() {

    return (

        <Routes>
            <Route element={<LayoutPadrao />}>
                <Route path="/" element={<Home />} />
                <Route path="/filmes" element={<Filmes />} />
                <Route path="/series" element={<Series />} />
                <Route path="/detalhe/:id" element={<Detalhe />} />
            </Route>
        </Routes>

    )

}

export default Rotas