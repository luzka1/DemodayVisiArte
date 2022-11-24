import Styles from "./Escreva.module.css";

function Escreva(props) {
    return(
        <div className={Styles.Iniciando}>
            <input type="text" placeholder={props.placeholder} className={Styles.Nome} />
        </div>
    )
};

export default Escreva;