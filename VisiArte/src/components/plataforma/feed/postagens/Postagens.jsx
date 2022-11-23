import React from "react";
import Postagem from "./postagem/Postagem";
import styles from "./Postagens.module.css";
import { Link } from "react-router-dom";

function Postagens({ data }) {
    return (
        <div className={styles.postagens}>
            {data.map((post) => (
                <Postagem
                    key={post.id_postagem}
                    id={post.id_postagem}
                    img_perfil={post.foto_perfil_usuario}
                    nome={post.username}
                    texto={post.conteudo_postagem.texto_postagem}
                    img_postagem={post.conteudo_postagem.foto_postagem}
                />
            ))}
        </div>
    );
}

export default Postagens;
