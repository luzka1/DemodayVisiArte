import { Link } from "react-router-dom";
import Styles from "./BtnCadastroLogin.module.css";

function BtnCadastroLogin(props) {
    return (
        <div
            className={`${Styles.Acessar} ${props.className}`}
            onClick={props.onClick}
        >
            <p>{props.Acessar}</p>
            <span>&#x276F;</span>
        </div>
    );
}

export default BtnCadastroLogin;
