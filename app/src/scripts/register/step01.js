import { ButtonNextStep01 } from './index'
import { ErrorMesage } from './ErrorMesage';
import { StyleValueFalse } from './style_inputs_false';
import axios from 'axios'

const input_name = document.getElementById('input-name')
const input_email = document.getElementById('input-email')
const input_password = document.getElementById('input-password')
const input_confirm_password = document.getElementById('input-confirm-password')

let changeEmail = false
var email_available = false

const buttonNextStep01 = document.getElementById('button-next-step-01')

const StatusInputs = {
    name: false,
    email: false,
    password: false,
    confirm_password: false,
}
 


function ValidingInputName(){
    var name = input_name.value.trim()
    const regex = /^[a-z-A-Z-0-9]+$/g  
    
    
    if(!name){
        StyleValueFalse('name')
        ErrorMesage('Fill in the name field..');
        StatusInputs.name = false
    }
    else if(name.length > 15){
        StyleValueFalse('name')
        ErrorMesage('Maximum 15 characters in the name field.');
        StatusInputs.name = false
    }
    else if(!regex.test(name)){
        StyleValueFalse('name')
        ErrorMesage('Only characters from A to Z and numbers from 0 to 9 in the name field.');
        StatusInputs.name = false
    }
    else
    {
        StatusInputs.name = true
    }
}

input_email.addEventListener('change', () => {
    changeEmail = true
})

async  function ValidingInputEmail(callback){
    var email = input_email.value.trim()
    const form = new FormData();
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    
    if(!email){
        StyleValueFalse("email")
        ErrorMesage('Fill in the email field.');
        StatusInputs.email = false
    }
    else if(!regex.test(email)){
        StyleValueFalse("email")
        ErrorMesage('Invalid email');
        StatusInputs.email = false
    }
    else
    { 
        if(changeEmail){
            await axios.post('/validate-email', { 'email': email }).then(Reponse => {
                if(Reponse.data.mensagem === 'Email is already in use'){
                    email_available = false
                }
                else if(Reponse.data.mensagem === 'Email available')
                {
                    email_available = true
                }
            })

            changeEmail = false
        }

        if(!email_available){
            StyleValueFalse("email")
            ErrorMesage('This email is already in use.');
            StatusInputs.email = false
        }
        else
        {
            StatusInputs.email = true
            callback();
        }
    }
}

function ValidingInputPassword(){
    var password = input_password.value.trim()
    
    var RegexUppeCase = /[A-Z]/
    var RegexlowerCase = /[a-z]/
    var RegexNumber = /[0-9]/
    var Regexspecial = /[^a-zA-Z0-9\s]/
    
    if(!password){
        StyleValueFalse('password')
        ErrorMesage('Fill in the password field..');
        StatusInputs.password = false
    }
    else if(password.length < 6){
        StyleValueFalse('password')
        ErrorMesage('Enter at least 6 characters in the password field.');
        StatusInputs.password = false
    }
    else if(!RegexUppeCase.test(password)){
        StyleValueFalse('password')
        ErrorMesage('Enter at least one capital letter [A-Z] in the password field.');
        StatusInputs.password = false
    }  
    else if(!RegexlowerCase.test(password)){
        StyleValueFalse('password')
        ErrorMesage('least one lowercase letter [a-z] in the password field');
        StatusInputs.password = false
    }
    else if(!RegexNumber.test(password)){
        StyleValueFalse('password')
        ErrorMesage('Enter at least one lowercase letter [0-9] in the password field');
        StatusInputs.password = false
    }
    else if(!Regexspecial.test(password)){
        StyleValueFalse('password')
        ErrorMesage('Enter at least one special characters letter [@#$%&*] in the password field');
        StatusInputs.password = false 
    }
    else{
        StatusInputs.password = true
    }
}

function ValidingInputConfirmPassword(){
    
    if(!input_confirm_password.value){
        StyleValueFalse('confirm_password')
        ErrorMesage('Fill in the confirm password field..');
        StatusInputs.confirm_password = false
    }
    else if(input_confirm_password.value != input_password.value )
    {
        StyleValueFalse('confirm_password')
        ErrorMesage('The passwords do not match..');
        StatusInputs.confirm_password = false
    }
    else
    {
        StatusInputs.confirm_password = true
    }
}

buttonNextStep01.addEventListener('click', async (e) => {
    e.preventDefault();

    await ValidingInputEmail( () => { 
        ValidingInputConfirmPassword();
        ValidingInputPassword();
    })
    ValidingInputName();

    const allTrue = Object.values(StatusInputs).every(status => status === true);
    if(allTrue){
        StyleValueFalse(null)
        ErrorMesage(null)
        ButtonNextStep01()
    }
    
    

    

})





