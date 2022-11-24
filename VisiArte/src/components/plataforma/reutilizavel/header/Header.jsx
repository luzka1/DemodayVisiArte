import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../../../../img/logo_header.png";
import icone_pesquisa from "../../../../img/icone_pesquisa.png";
import icone_home from "../../../../img/icone_home.png";
import icone_publicar from "../../../../img/icone_publicar.png";
import icone_chat from "../../../../img/icone_chat.png";
import icone_perfil from "../../../../img/icone_perfil.png";

function Header({ setTextoPesquisa, textoPesquisa }) {
    const navigate = useNavigate();
    return (
        <nav className={styles.header}>
            <Link to="/feed">
                <img src={Logo} alt="" className={styles.logo} />
            </Link>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log("kzsdbhszduhb");
                    let url = `/resultado/${textoPesquisa}`;
                    navigate(url);
                }}
            >
                <div className={styles.pesquisa}>
                    <img src={icone_pesquisa} alt="" />
                    <input
                        type="text"
                        value={textoPesquisa}
                        onChange={({ target }) =>
                            setTextoPesquisa(target.value)
                        }
                        name="p"
                        id=""
                        placeholder="Pesquisar no Visiarte"
                    />
                </div>
            </form>

            <div className={styles.navegacao}>
                <Link to="/feed">
                    <img src={icone_home} alt="" />
                </Link>

                <Link to="/feed">
                    <img src={icone_publicar} alt="" />
                </Link>

                <Link to="/chat">
                    <img src={icone_chat} alt="" />
                </Link>

                <Link to="/feed">
                    <img src={icone_perfil} alt="" />
                </Link>
            </div>
        </nav>
    );
}

export default Header;
