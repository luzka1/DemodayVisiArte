import React from "react";
import Header from "../components/plataforma/reutilizavel/header/Header";
import ConteudoFeed from "../components/plataforma/feed/ConteudoFeed";
import sugestoes from "../data/descubra.json";
import postagens from "../data/postagens.json";
import sobreMim from "../data/sobreMim.json";

function Feed({ textoPesquisa, setTextoPesquisa }) {
    return (
        <>
            <Header
                setTextoPesquisa={setTextoPesquisa}
                textoPesquisa={textoPesquisa}
            />
            <ConteudoFeed
                sugestoes={sugestoes}
                postagens={postagens}
                sobreMim={sobreMim}
            />
        </>
    );
}

export default Feed;
