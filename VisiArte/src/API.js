export const URL_API = "http://localhost:5000/api";
export const URL_SITE = "http://localhost:3000";

export function verificaLogin(){
    let usuario = localStorage.getItem("usuarioLogado");
    if (usuario) {
        return true;
    }
    return false
}


export function logout(){
    try {
        localStorage.removeItem("usuarioLogado");
        localStorage.clear();
        window.location.reload(); 
        return true;
    } catch (error) {
        return false;
    }

}
