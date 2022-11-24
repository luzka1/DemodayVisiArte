import React from "react";
import styles from "../components/plataforma/chat/css/Chat.module.css";
import bg from "../img/bg.jpg";
//============================================ Importando CSS como styles ============================================
import Amigos from "../components/plataforma/chat/Amigos.jsx";
import BatePapo from "../components/plataforma/chat/BatePapo.jsx";
import Header from "../components/plataforma/reutilizavel/header/Header";

function Chat({ textoPesquisa, setTextoPesquisa }) {
    return (
        <>
            <Header
                setTextoPesquisa={setTextoPesquisa}
                textoPesquisa={textoPesquisa}
            />
            <main>
                <Amigos />
                <BatePapo />
            </main>
        </>
    );
}

export default Chat;
