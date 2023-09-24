
export default function ValidaLogin(){
    const token = localStorage.getItem('token');
    const expires = localStorage.getItem('expires');
    const now = Date();
    if(!token || expires < now || !expires){
        if (!token || !expires) {
            localStorage.setItem('messageLogin', 'Faça o login para continuar');
        }else if(expires < now){
            localStorage.setItem('messageLogin', 'Sua sessão expirou');
        }
        window.location.href = '/';
    } 
}