import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

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
                <Route path="/FazerLogin" element={<FazerLogin />} />
                <Route path="/FazerCadastro" element={<FazerCadastro />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
