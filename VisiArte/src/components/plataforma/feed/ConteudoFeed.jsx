import React from "react";
import styles from "./ConteudoFeed.module.css";

import SobreMim from "./sobreMim/SobreMim";
import Postagens from "./postagens/Postagens";
import Sugestoes from "./sugestoes/Sugestoes";

function ConteudoFeed() {
    return (
        <div className={styles.conteudo_feed}>
            <SobreMim />
            <Postagens />
            <Sugestoes />
        </div>
    );
}

export default ConteudoFeed;
