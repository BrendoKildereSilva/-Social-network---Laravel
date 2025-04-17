const container_error = document.getElementById('container-error')
const message_error = document.getElementById('message_error')


export function ErrorMesage(mesage){
    container_error.style.display = 'flex'
    message_error.innerHTML = mesage;
    
    if(!mesage){
        container_error.style.display = 'none'
        message_error.innerHTML = "";
    }
}
