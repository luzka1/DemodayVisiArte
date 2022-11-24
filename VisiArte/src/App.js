import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGINAS -------------------------------

import LandingPage from "./pages/LandingPage";
import Feed from "./pages/Feed";
import Chat from "./pages/Chat";
import FazerLogin from "./pages/FazerLogin";
import FazerCadastro from "./pages/FazerCadastro";

// -------------------------------

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/login" element={<FazerLogin />} />
                <Route path="/cadastro" element={<FazerCadastro />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
