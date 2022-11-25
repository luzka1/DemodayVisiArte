import React from "react";
import Resultado from "../components/plataforma/resultado/Resultado";
import Header from "../components/plataforma/reutilizavel/header/Header";
import postagens from "../data/postagens.json";

function Pesquisa({ textoPesquisa, setTextoPesquisa }) {
    return (
        <>
            <Header
                setTextoPesquisa={setTextoPesquisa}
                textoPesquisa={textoPesquisa}
            />
            <Resultado
                textoPesquisa={textoPesquisa}
                postagens={postagens.postagens}
            />
        </>
    );
}

export default Pesquisa;
