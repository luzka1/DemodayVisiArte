import React from "react";
import styles from "./Resultado.module.css";
import Sugestoes from "../feed/sugestoes/Sugestoes";
import sugest from "../../../data/descubra.json";

const Resultado = () => {
    return (
        <div className={styles.containerResultados}>
            <div>
                <span>Resultados da pesquisa: Faz tudo</span>
            </div>
            <Sugestoes data={sugest.descubra_perfis} />
        </div>
    );
};

export default Resultado;
