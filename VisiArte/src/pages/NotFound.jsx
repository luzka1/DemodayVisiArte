import React from "react";
import NaoEncontrado from "../components/NaoEncontrado/NaoEncontrado";
import Header from "../components/plataforma/reutilizavel/header/Header";

const NotFound = ({ textoPesquisa, setTextoPesquisa }) => {
    return (
        <>
            <Header
                setTextoPesquisa={setTextoPesquisa}
                textoPesquisa={textoPesquisa}
            />
            <NaoEncontrado />
        </>
    );
};

export default NotFound;
