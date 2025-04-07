const container_error = document.getElementById('container-error')
const mensage_error_name = document.getElementById('error-input-name')
const mensage_error_email = document.getElementById('error-input-email')
const mensage_error_password = document.getElementById('error-input-password')
const mensage_error_confirm_password = document.getElementById('error-input-confirm-password')


const Errors = {
    name: false,
    email: false,
    password: false,
    confirm_password: false
}


function CheckIfthereAreErrors(){
    const allTrue = Object.values(Errors).every(status => status === false);
    
    if(allTrue){
        container_error.style.display = 'none'
    }
    else{
        container_error.style.display = 'flex'
    }
}

export function ErrorMesage(input, mesage){
    
    if(input == 'name'){
        mensage_error_name.innerHTML = mesage
        Errors.name = true
        
        if(mesage == ""){
            Errors.name = false
        }
    }

    if(input == 'email'){
        mensage_error_email.innerHTML = mesage
        Errors.email = true
        
        if(mesage == ""){
            Errors.email = false
        }
    }

    if(input == 'password'){
        mensage_error_password.innerHTML = mesage
        Errors.password = true
        
        if(mesage == ""){
            Errors.password = false
        }
    }

    if(input == 'confirm_senha'){
        mensage_error_confirm_password.innerHTML = mesage
        Errors.confirm_password = true
        
        if(mesage == ""){
            Errors.confirm_password = false
        }
    }

    CheckIfthereAreErrors()
}
