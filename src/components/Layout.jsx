import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";


export default function Layout(){
    return(
        <div class="min-h-screen flex flex-col">
            <Navbar/>
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer/>
        </div>
    )
}
