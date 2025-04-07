import { ButtonNextStep01 } from './index'
import { ErrorMesage } from './ErrorMesage';
import axios from 'axios'

const input_name_user = document.getElementById('input-name')
const input_email = document.getElementById('input-email')
const input_password = document.getElementById('input-password')
const input_confirm_password = document.getElementById('input-confirm-password')
const buttonNextStep01 = document.getElementById('button-next-step-01')

const StatusInputs = {
    name: false,
    email: false,
    password: false,
    confirm_password: false,
}


input_name_user.addEventListener('keyup', () => {
    ValidingInputName();
})

input_email.addEventListener('keyup', () => { 
    ValidingInputEmail();
})

input_password.addEventListener('keyup', () => {    
    ValidingInputPassword()
    ValidingInputConfirmSenha();
})

input_confirm_password.addEventListener('keyup', () => {
    ValidingInputConfirmSenha();
})
 

function ValidingInputName(){
    const regex = /[^a-zA-Z0-9\s]/

    if(!input_name_user.value){
        ErrorMesage('name', 'Fill in the <b> name </b>field..');
        StatusInputs.name = false
    }
    else if(input_name_user.value.length > 15){
        ErrorMesage('name', 'Maximum 15 characters in the <b> name </b> field.');
        StatusInputs.name = false
    }
    else if(regex.test(input_name_user.value)){
        ErrorMesage('name', 'Only characters from A to Z and numbers from 0 to 9 in the <b> name </b> field.');
        StatusInputs.name = false
    }
    else
    {
        ErrorMesage('name', '');
        StatusInputs.name = true
    }
}

async  function ValidingInputEmail(){
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    var checkEmail = ''
    
    var form = new FormData();
    form.append('email', input_email.value);
    await axios.post('/check-email', form).then(Response => { 
        checkEmail = Response.data
    })

    if(!input_email.value){
        ErrorMesage('email', 'Fill in the <b> email </b>field.');
        StatusInputs.email = false
    }
    else if(!regex.test(input_email.value)){
        ErrorMesage('email', 'Invalid <b>email</b>');
        StatusInputs.email = false
    }
    else if(checkEmail === 'email is in use')
    {   
        ErrorMesage('email', 'This <b>email</b> is already in use.');
        StatusInputs.email = false
    }
    else
    { 
        ErrorMesage('email', '');
        StatusInputs.email = true
    }
}

function ValidingInputPassword(){
    var RegexUppeCase = /[A-Z]/
    var RegexlowerCase = /[a-z]/
    var RegexNumber = /[0-9]/
    var Regexspecial = /[^a-zA-Z0-9\s]/

    if(!input_password.value){
        ErrorMesage('password', 'Fill in the <b>password</b>field..');
        StatusInputs.password = false
    }
    else if(input_password.value.length < 6){
        ErrorMesage('password', 'Enter at least 6 characters in the <b>password</b>field.');
        StatusInputs.password = false
    }
    else if(!RegexUppeCase.test(input_password.value)){
        ErrorMesage('password', 'Enter at least one capital letter [A-Z] in the <b>password</b> field.');
        StatusInputs.password = false
    }  
    else if(!RegexlowerCase.test(input_password.value)){
        ErrorMesage('password', 'Enter at least one lowercase letter [a-z] in the  <br>password</b>field');
        StatusInputs.password = false
    }
    else if(!RegexNumber.test(input_password.value)){
        ErrorMesage('password', 'Enter at least one lowercase letter [0-9] in the <b>password</b> field');
        StatusInputs.password = false
    }
    else if(!Regexspecial.test(input_password.value)){
        ErrorMesage('password', 'Enter at least one special characters letter [@#$%&*] in the <b>password</b> field');
        StatusInputs.password = false 
    }
    else{
        ErrorMesage('password', '');
        StatusInputs.password = true
    }
}

function ValidingInputConfirmSenha(){
    if(!input_confirm_password.value){
        ErrorMesage('confirm_senha', 'Fill in the <b>confirm password</b>field..');
        StatusInputs.confirm_password = false
    }
    else if(input_confirm_password.value != input_password.value )
    {
        ErrorMesage('confirm_senha', 'The passwords do not match..');
        StatusInputs.confirm_password = false
    }
    else
    {
        ErrorMesage('confirm_senha', '');
        StatusInputs.confirm_password = true
    }
}



buttonNextStep01.addEventListener('click', (e) => {
    e.preventDefault();
    const allTrue = Object.values(StatusInputs).every(status => status === true);

    if(allTrue){
        ButtonNextStep01()
    }
    else
    {
        ValidingInputName();
        ValidingInputEmail();
        ValidingInputPassword();
        ValidingInputConfirmSenha();
    }
    

    

})





