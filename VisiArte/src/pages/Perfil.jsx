import React from "react";
import Header from "../components/plataforma/reutilizavel/header/Header";
import ContainerPerfil from "../components/plataforma/perfil/ContainerPerfil";
import Usuarios from "../data/descubra.json";
import posts from "../data/postagens.json";
import { useParams } from "react-router-dom";

const Perfil = () => {
    let { usuario } = useParams();
    let postagensFiltradas = [];

    for (let i = 0; i < Usuarios.descubra_perfis.length; i++) {
        if (Usuarios.descubra_perfis[i].username == usuario) {
            var user = Usuarios.descubra_perfis[i];
        }
    }

    for (let i = 0; i < posts.postagens.length; i++) {
        if (posts.postagens[i].username == usuario) {
            postagensFiltradas.push(posts.postagens[i]);
        }
    }

    return (
        <>
            <Header />
            <ContainerPerfil user={user} postagens={postagensFiltradas} />
        </>
    );
};

export default Perfil;
