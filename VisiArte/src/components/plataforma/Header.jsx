import React from "react";
import { Link } from "react-router-dom";

import styles from "../../css/plataforma/Header.module.css";
import Logo from "../../img/logo_header.png";
import icone_pesquisa from "../../img/icone_pesquisa.png";
import icone_home from "../../img/icone_home.png";
import icone_publicar from "../../img/icone_publicar.png";
import icone_chat from "../../img/icone_chat.png";
import icone_perfil from "../../img/icone_perfil.png";

function Header() {
    return (
        <nav className={styles.header}>
            <Link to="/feed">
                <img src={Logo} alt="" className={styles.logo} />
            </Link>

            <form>
                <div className="pesquisa">
                    <img src={icone_pesquisa} alt="" />
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Pesquisar no Visiarte"
                    />
                </div>
            </form>

            <ul>
                <li></li>
            </ul>
        </nav>
    );
}

export default Header;
