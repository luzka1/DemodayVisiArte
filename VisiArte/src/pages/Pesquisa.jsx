import React from "react";
import { useParams } from "react-router-dom";
import Resultado from "../components/plataforma/resultado/Resultado";
import Header from "../components/plataforma/reutilizavel/header/Header";
import postagens from "../data/postagens.json";

function Pesquisa({ textoPesquisa, setTextoPesquisa }) {
    let { pesquisa } = useParams();
    return (
        <>
            <Header
                setTextoPesquisa={setTextoPesquisa}
                textoPesquisa={textoPesquisa}
            />
            <Resultado pesquisa={pesquisa} postagens={postagens.postagens} />
        </>
    );
}

export default Pesquisa;
