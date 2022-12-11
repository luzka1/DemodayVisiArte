import React from "react";
import ContainerChat from "../components/plataforma/chat/ContainerChat";
import Header from "../components/plataforma/reutilizavel/header/Header";

function Chat({ textoPesquisa, setTextoPesquisa, usuarioAtual }) {
    return (
        <>
            <Header
                setTextoPesquisa={setTextoPesquisa}
                textoPesquisa={textoPesquisa}
                usuarioAtual={usuarioAtual}
            />
            <main>
                <ContainerChat />
            </main>
        </>
    );
}

export default Chat;
