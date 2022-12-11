import React from "react";
import { Link } from "react-router-dom";
import Pessoa from "./pessoa/Pessoa";
import styles from "./Pessoas.module.css";

const Pessoas = ({ userAtivo }) => {
    return (
        <div className={styles.containerPessoas}>
            <div className={styles.logado}> mochileiro </div>
            <div className={styles.pessoas}>
                <Link to={`/chat/fulano1`}>
                    <Pessoa nome="fulano1" userAtivo={userAtivo} />
                </Link>

                <Link to={`/chat/ciclano2`}>
                    <Pessoa nome="ciclano2" userAtivo={userAtivo} />
                </Link>

                <Link to={`/chat/beltrano3`}>
                    <Pessoa nome="beltrano3" userAtivo={userAtivo} />
                </Link>
            </div>
        </div>
    );
};

export default Pessoas;
