import axios from 'axios'
import { ButtonBackStep02 } from './index'
import { ErrorMesage } from './ErrorMesage'
import { StyleValueFalse } from './style_inputs_false';

const inputDDI = document.getElementById('input-ddi')
const inputPhone = document.getElementById('input-phone')
const inputDateOfBirth = document.getElementById('Date-of-Birth')
const SelectGender = document.getElementById('select-gender')

const buttonBack = document.getElementById('button-back')
const buttonNext = document.getElementById('button-next')
let changePhone = false
var Phone_available = false





const StatusInputs = {
    "ddi": false,
    "phone": false,
    "date_of_Birth": false,
    "gender": false
}

function ValidingInputDDI(){
    var DDI = inputDDI.value
    var regex_init_more = /^\+/
    var regex = /\+(211|212|213|216|218|220|221|222|223|224|225|226|227|228|229|230|231|232|233|234|235|236|237|238|239|240|241|242|243|244|245|246|248|249|250|251|252|253|254|255|256|257|258|260|261|262|263|264|265|266|267|268|269|290|291|297|298|299|350|351|352|353|354|355|356|357|358|359|370|371|372|373|374|375|376|377|378|379|380|381|382|385|386|387|389|420|421|423|500|501|502|503|504|505|506|507|508|509|590|591|592|593|594|595|596|597|598|599|670|672|673|674|675|676|677|678|679|680|681|682|683|685|686|687|688|689|690|691|692|850|852|853|855|856|870|871|872|873|874|878|880|881|882|883|886|888|960|961|962|963|964|965|966|967|968|970|971|972|973|974|975|976|977|992|993|994|995|996|998|1|7|20|27|30|31|32|33|34|36|39|40|41|43|44|45|46|47|48|49|51|52|53|54|55|56|57|58|60|61|62|63|64|65|66|81|82|84|86|90|91|92|93|94|95|98)$/

    if(!DDI){
        StyleValueFalse("ddi")
        ErrorMesage('Please fill in the DDI field.')
        StatusInputs.ddi = false
    }
    else if(!regex_init_more.test(DDI))
    {
        StyleValueFalse("ddi")
        ErrorMesage('The DDI must start with the "+" symbol.')
        StatusInputs.ddi = false
    }
    else if(!regex.test(DDI))
    {
        StyleValueFalse("ddi")
        ErrorMesage('This DDI is not recognized. Please check if it is correct.')
        StatusInputs.ddi = false
    }
    else
    {
        StatusInputs.ddi = true
    }
}


inputPhone.addEventListener('change', () => {
    changePhone = true
})


async function ValidingInputPhone(callback){
    var phone = inputPhone.value.trim()
    var DDI = inputDDI.value.trim()
    var regex = /[0-9]/

    if(!phone){
        StyleValueFalse("phone")
        ErrorMesage('Please fill in the Phone field.')
        StatusInputs.phone = false
    }
    else if(!regex.test(phone))
    {
        ErrorMesage('Please enter numbers only in the phone field.')
        StatusInputs.phone = false
        StyleValueFalse("phone")
    }
    else if(phone.length > 15)
    {
        StyleValueFalse("phone")
        ErrorMesage('The phone number cannot have more than 15 digits')
        StatusInputs.phone = false
    }
    else
    {
        // avoid doing HTTP REQUEST all the time so the app doesn't slow down//
        if(changePhone){
            await axios.post(
            '/validate-phone-number', 
            { 
                "phone":  DDI+phone
            })
            .then(Reponse => { 
                
                if(Reponse.data.status === 'error'){
                    Phone_available = false
                }
                else
                {
                    Phone_available = true
                }

                changePhone = false
            })
        }
        

        if(!Phone_available){
            StyleValueFalse("phone")
            ErrorMesage('This phone is already in use.')
            StatusInputs.phone = false
        }
        else
        {
            callback();
            StatusInputs.phone = true
        }


    }
}

function ValidingInputDateofBirth(){
    var DateofBirth = inputDateOfBirth.value
    var Date_available = ValidateDate();
    
    var regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19\d{2}|20\d{2})$/
    
    if(!DateofBirth){
        StyleValueFalse("date_of_birth")
        ErrorMesage('Please fill in the Date of Birth field.')
        StatusInputs.date_of_Birth = false
    }
    else if(!regex.test(DateofBirth))
    {
        StyleValueFalse("date_of_birth")
        ErrorMesage('Please enter the date in the correct format: DD/MM/YYYY')
        StatusInputs.date_of_Birth = false 
    }
    else if(!Date_available)
    {
        StyleValueFalse("date_of_birth")
        ErrorMesage('The date entered is not valid. Please check and try again.')
        StatusInputs.date_of_Birth = false 
    }
    else
    {
        StatusInputs.date_of_Birth = true
    }
    
}

function ValidingSelectGender(){
    var gender = SelectGender.value
    
    if(!gender){
        StyleValueFalse("gender")
        ErrorMesage('Please fill in the Gender field.')
        StatusInputs.gender = false
    }
    else
    {
        StatusInputs.gender = true
    }
}


function ValidateDate(){
    var DateofBirth = inputDateOfBirth.value
    var [day, month, year] =  DateofBirth.split('/').map(Number); 
    var confirmdata = new Date(year, month - 1, day )

    if(confirmdata >  new Date())
    {
        return false
    }
   
    if(
        confirmdata.getDate() != day ||
        confirmdata.getMonth() != month - 1 ||
        confirmdata.getFullYear() != year 

    )
    {
        return false
    }
    
    return true
}


buttonNext.addEventListener('click', async (e) => {
    e.preventDefault();


    await ValidingInputPhone( () => {
        ValidingSelectGender()
        ValidingInputDateofBirth()
    })

    ValidingInputDDI()


    const allTrue = Object.values(StatusInputs).every(status => status === true);
    if(allTrue){
        console.log(StatusInputs)
        StyleValueFalse(null)
        ErrorMesage(null)
    }


})


buttonBack.addEventListener('click', (e) => {
    ButtonBackStep02()
})


