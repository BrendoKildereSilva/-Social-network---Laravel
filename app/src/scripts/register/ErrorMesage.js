const container_error = document.getElementById('container-error')
const message_error = document.getElementById('message_error')






export function ErrorMesage(input, mesage){
    container_error.style.display = 'flex'
    if(input == 'name'){
        message_error.innerHTML = mesage;
    }

    if(input == 'email'){
        message_error.innerHTML = mesage;
    }

    if(input == 'password'){
        message_error.innerHTML = mesage;
    }

    if(input == 'confirm_password'){
        message_error.innerHTML = mesage;
    }

    if(!mesage){
        container_error.style.display = 'none'
        message_error.innerHTML = "";

    }
}
