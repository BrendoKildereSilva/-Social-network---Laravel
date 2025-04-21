const input_name = document.getElementById('input-name')
const input_email = document.getElementById('input-email')
const input_password = document.getElementById('input-password')
const input_confirm_password = document.getElementById('input-confirm-password')
const input_ddi = document.getElementById('input-ddi')
const input_phone = document.getElementById('input-phone')
const input_date_of_birth = document.getElementById('Date-of-Birth')
const select_gender = document.getElementById('select-gender')
//
const label_name = document.getElementById('label_name')
const label_email = document.getElementById('label_email')
const label_password = document.getElementById('label_password')
const label_confirm_password = document.getElementById('label_confirm_password')
const label_ddi = document.getElementById('label-ddi')
const label_phone = document.getElementById('label-phone')
const label_date_of_birth = document.getElementById('label_Date-of-Birth')
const label_gender  = document.getElementById('label-gender')



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
    //
    input_ddi.removeAttribute('class')
    label_ddi.removeAttribute('class')
    //
    input_phone.removeAttribute('class')
    label_phone.removeAttribute('class')
    //
    input_date_of_birth.removeAttribute('class')
    label_date_of_birth.removeAttribute('class')
    //
    select_gender.removeAttribute('class')
    label_gender.removeAttribute('class')


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

    if(input === "ddi"){
        input_ddi.setAttribute('class', 'i-false')
        label_ddi.setAttribute('class', 'l-false')
    }

    if(input === "phone"){
        input_phone.setAttribute('class', 'i-false')
        label_phone.setAttribute('class', 'l-false')
    }

    if(input === "date_of_birth"){
        input_date_of_birth.setAttribute('class', 'i-false')
        label_date_of_birth.setAttribute('class', 'l-false')
    }

    if(input === "gender"){
        select_gender.setAttribute('class', 'i-false')
        label_gender.setAttribute('class', 'l-false')
    }

}