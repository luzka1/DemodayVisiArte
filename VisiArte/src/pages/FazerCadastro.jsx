import Cadastro from "../components/Cadastro_Login/Cadastro/Cadastro.jsx";
import { logout, verificaLogin } from "../API";

function FazerCadastro(){
    verificaLogin() && logout()

    return(
        <>
            <Cadastro/>
        </>
    )
}

export default FazerCadastro;