import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

// PAGINAS -------------------------------

import LandingPage from "./pages/LandingPage";
import Feed from "./pages/Feed";
import Chat from "./pages/Chat";
import FazerLogin from "./pages/FazerLogin";
import FazerCadastro from "./pages/FazerCadastro";
import SobreNos from "./pages/SobreNos";
import Pesquisa from "./pages/Pesquisa";
import NaoEncontrado from "./pages/NotFound";
import Vlibras from "./components/Vlibras/Vlibras"

// -------------------------------

function App() {
    const [textoPesquisa, setTextoPesquisa] = React.useState("");
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/SobreNos" element={<SobreNos />} />

                <Route path="/login" element={<FazerLogin />} />
                <Route path="/cadastro" element={<FazerCadastro />} />

                {/* plataforma */}
                <Route
                    path="/feed"
                    element={
                        <Feed
                        setTextoPesquisa={setTextoPesquisa}
                        textoPesquisa={textoPesquisa}
                        />
                    }
                    />

                <Route
                    path="/chat"
                    element={
                        <Chat
                            setTextoPesquisa={setTextoPesquisa}
                            textoPesquisa={textoPesquisa}
                        />
                    }
                />

                <Route
                    path="/resultado/:pesquisa"
                    element={
                        <Pesquisa
                        setTextoPesquisa={setTextoPesquisa}
                        textoPesquisa={textoPesquisa}
                        />
                    }
                    />

                {/* NOT FOUND 404 */}
                <Route
                    path="/resultado/*"
                    element={
                        <NaoEncontrado
                        setTextoPesquisa={setTextoPesquisa}
                        textoPesquisa={textoPesquisa}
                        />
                    }
                    />
                <Route
                    path="/usuario/*"
                    element={
                        <NaoEncontrado
                        setTextoPesquisa={setTextoPesquisa}
                        textoPesquisa={textoPesquisa}
                        />
                    }
                    />
                <Route
                    path="/postagem/*"
                    element={
                        <NaoEncontrado
                        setTextoPesquisa={setTextoPesquisa}
                        textoPesquisa={textoPesquisa}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
