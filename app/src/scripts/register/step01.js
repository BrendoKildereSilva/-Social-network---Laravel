import { ButtonNextStep01 } from './index'
import { ErrorMesage } from './ErrorMesage';
import axios from 'axios'

const input_name = document.getElementById('input-name')
const input_email = document.getElementById('input-email')
const input_password = document.getElementById('input-password')
const input_confirm_password = document.getElementById('input-confirm-password')
//
const label_name = document.getElementById('label_name')
const label_email = document.getElementById('label_email')
const label_password = document.getElementById('label_password')
const label_confirm_password = document.getElementById('label_confirm_password')


const buttonNextStep01 = document.getElementById('button-next-step-01')

const StatusInputs = {
    name: false,
    email: false,
    password: false,
    confirm_password: false,
}
 
function StyleValueFalse(input){

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

function ValidingInputName(){
    StyleValueFalse('name')
    const regex = /^[a-z-A-Z-0-9]+$/g  


    if(!input_name.value){
        ErrorMesage('name', 'Fill in the <b> name </b>field..');
        StatusInputs.name = false
    }
    else if(input_name.value.length > 15){
        ErrorMesage('name', 'Maximum 15 characters in the <b> name </b> field.');
        StatusInputs.name = false
    }
    else if(!regex.test(input_name.value)){
        ErrorMesage('name', 'Only characters from A to Z and numbers from 0 to 9 in the <b> name </b> field.');
        StatusInputs.name = false
    }
    else
    {
        StyleValueFalse()
        ErrorMesage('name', '');
        StatusInputs.name = true
    }
}

async  function ValidingInputEmail(){
    StyleValueFalse('email')
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/    
    
    if(!input_email.value){
        ErrorMesage('email', 'Fill in the <b> email </b>field.');
        StatusInputs.email = false
    }
    else if(!regex.test(input_email.value)){
        ErrorMesage('email', 'Invalid <b>email</b>');
        StatusInputs.email = false
    }
    else if(input_email.value === 'brendokildere@gmail.com')
    {   
        ErrorMesage('email', 'This <b>email</b> is already in use.');
        StatusInputs.email = false
    }
    else
    { 
        StyleValueFalse('')
        ErrorMesage('email', '');
        StatusInputs.email = true
    }
}

function ValidingInputPassword(){
    StyleValueFalse('password')

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
        StyleValueFalse('')
        ErrorMesage('password', '');
        StatusInputs.password = true
    }
}

function ValidingInputConfirmPassword(){
    StyleValueFalse('confirm_password')

    if(!input_confirm_password.value){
        ErrorMesage('confirm_password', 'Fill in the <b>confirm password</b>field..');
        StatusInputs.confirm_password = false
    }
    else if(input_confirm_password.value != input_password.value )
    {
        ErrorMesage('confirm_password', 'The passwords do not match..');
        StatusInputs.confirm_password = false
    }
    else
    {
        StyleValueFalse('')
        ErrorMesage('confirm_password', '');
        StatusInputs.confirm_password = true
    }
}


buttonNextStep01.addEventListener('click', (e) => {
    e.preventDefault();
    ValidingInputName();
    ValidingInputEmail();
    ValidingInputPassword();
    ValidingInputConfirmPassword();

    const allTrue = Object.values(StatusInputs).every(status => status === true);

    if(allTrue){
        ButtonNextStep01()
    }
    else
    {
        if(StatusInputs['name'] === false){
            ValidingInputName();
        }
        else if((StatusInputs['email'] === false))
        {
            ValidingInputEmail();
        }
        else if((StatusInputs['password'] === false))
        {
            ValidingInputPassword();
        }

        else if((StatusInputs['confirm_password'] === false))
        {
            ValidingInputConfirmPassword();
        }
        
    }
    

    

})





