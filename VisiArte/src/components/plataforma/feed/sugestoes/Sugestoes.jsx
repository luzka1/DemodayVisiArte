import React from "react";
import styles from "./Sugestoes.module.css";

import Sugestao from "./sugestao/Sugestao";
import img from "../../../../img/foto-perfil.png";

function Sugestoes() {
    return (
        <div className={styles.sugestoes}>
            <h5>Descubra novos perfis</h5>
            <div className={styles.sugestao}>
                <Sugestao img={img} nome="#username" key={1} />
                <Sugestao img={img} nome="#username" key={2} />
                <Sugestao img={img} nome="#username" key={3} />
                <Sugestao img={img} nome="#username" key={4} />
                <Sugestao img={img} nome="#username" key={5} />
                <Sugestao img={img} nome="#username" key={6} />
                <Sugestao img={img} nome="#username" key={7} />
            </div>
        </div>
    );
}

export default Sugestoes;
