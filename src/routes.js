import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { About } from './pages/About/About';

export const routerApp = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" component={<Home />} />
                    <Route path="/about" component={<About />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
