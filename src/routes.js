import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { About } from './pages/About/About';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

export const RouterApp = () => {
    return (
        < >
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
                < Footer />
            </BrowserRouter>
        </>
    )
}
