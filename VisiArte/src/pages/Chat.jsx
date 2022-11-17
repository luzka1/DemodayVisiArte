import React from 'react'
import styles from "../components/plataforma/chat/css/Chat.module.css"
import bg from "../img/bg.jpg"
//============================================ Importando CSS como styles ============================================
import Amigos from "../components/plataforma/chat/Amigos.jsx" 
import BatePapo from "../components/plataforma/chat/BatePapo.jsx"


function Chat() {
    return (
        <div>
            <main>
                <Amigos></Amigos>
                <BatePapo></BatePapo>
            </main>
        </div>
    )
}

export default Chat