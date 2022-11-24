import React from "react";
import Resultado from "../components/plataforma/resultado/Resultado";
import Header from "../components/plataforma/reutilizavel/header/Header";

function Pesquisa({ textoPesquisa, setTextoPesquisa }) {
    return (
        <>
            <Header
                setTextoPesquisa={setTextoPesquisa}
                textoPesquisa={textoPesquisa}
            />
            <Resultado textoPesquisa={textoPesquisa} />
        </>
    );
}

export default Pesquisa;
