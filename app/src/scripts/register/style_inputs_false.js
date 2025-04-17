const input_name = document.getElementById('input-name')
const input_email = document.getElementById('input-email')
const input_password = document.getElementById('input-password')
const input_confirm_password = document.getElementById('input-confirm-password')
//
const label_name = document.getElementById('label_name')
const label_email = document.getElementById('label_email')
const label_password = document.getElementById('label_password')
const label_confirm_password = document.getElementById('label_confirm_password')

export function StyleValueFalse(input){

    input_name.removeAttribute('class')
    label_name.removeAttribute('class')
    //
    input_email.removeAttribute('class')
    label_email.removeAttribute('class')
    //
    input_password.removeAttribute('class')
    label_password.removeAttribute('class')
    //
    input_confirm_password.removeAttribute('class')
    label_confirm_password.removeAttribute('class')


    if(input === 'name'){
        input_name.setAttribute('class', 'i-false')
        label_name.setAttribute('class', 'l-false')
    }

    if(input == 'email'){
        input_email.setAttribute('class', 'i-false')
        label_email.setAttribute('class', 'l-false')
    }
    
    if(input == 'password'){
        input_password .setAttribute('class', 'i-false')
        label_password.setAttribute('class', 'l-false')
    }

    if(input == 'confirm_password'){
        input_confirm_password.setAttribute('class', 'i-false')
        label_confirm_password.setAttribute('class', 'l-false')
    }

}