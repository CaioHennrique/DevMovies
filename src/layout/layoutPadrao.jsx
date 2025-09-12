import { Outlet } from "react-router-dom";
import Header from "../components/header";


function LayoutPadrao() {

    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default LayoutPadrao