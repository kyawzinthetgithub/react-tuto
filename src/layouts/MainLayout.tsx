import { Outlet } from "react-router";
import Headers from "../components/Header";
import Footer from "./Footer";

function MainLayout() {
    return (
        <div>
            <Headers />
            <Outlet />
            <Footer />
        </div>
    );
}

export default MainLayout;
