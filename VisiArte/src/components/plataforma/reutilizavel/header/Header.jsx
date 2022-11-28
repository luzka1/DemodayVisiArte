import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../../../../img/logo_header.png";
import icone_pesquisa from "../../../../img/icone_pesquisa.png";
import icone_home from "../../../../img/icone_home.png";
import icone_publicar from "../../../../img/icone_publicar.png";
import icone_chat from "../../../../img/icone_chat.png";
import icone_perfil from "../../../../img/icone_perfil.png";
import usuarios from "../../../../data/descubra.json";

function Modal({ abrir, setModal, usuarioAtual }) {
    const [foto, setFoto] = React.useState("");

    React.useEffect(() => {
        for (let i = 0; i < usuarios.descubra_perfis.length; i++) {
            if (usuarios.descubra_perfis[i].username == usuarioAtual) {
                setFoto(usuarios.descubra_perfis[i].foto_perfil);
            }
        }
    }, [usuarioAtual]);

    if (abrir) {
        return (
            <div className={styles.containerModal}>
                <form className={styles.modal}>
                    <div className={styles.headerModal}>
                        <h6>Criar publicação</h6>
                        <span onClick={() => setModal(false)}>&#9747;</span>
                    </div>
                    <div className={styles.mainModal}>
                        <div>
                            <img src={foto} alt="" />
                            <p>{usuarioAtual}</p>
                        </div>
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="No que você está pensando?"
                        ></textarea>
                    </div>
                    <div className={styles.footerModal}></div>
                </form>
            </div>
        );
    }
}

function Header({ setTextoPesquisa, textoPesquisa, usuarioAtual }) {
    const navigate = useNavigate();
    const [modal, setModal] = React.useState(false);
    return (
        <>
            <div>
                <nav className={styles.header}>
                    <Link to="/feed">
                        <img src={Logo} alt="" className={styles.logo} />
                    </Link>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
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

                        <a
                            className={styles.acionarModal}
                            onClick={() => setModal((modal) => !modal)}
                        >
                            <img src={icone_publicar} alt="" />
                        </a>

                        <Link to="/chat">
                            <img src={icone_chat} alt="" />
                        </Link>

                        <Link to={`/usuario/${usuarioAtual}`}>
                            <img src={icone_perfil} alt="" />
                        </Link>
                    </div>
                </nav>
                <div className={styles.header_falsa}></div>
            </div>
            <Modal
                abrir={modal}
                setModal={setModal}
                usuarioAtual={usuarioAtual}
            />
        </>
    );
}

export default Header;
