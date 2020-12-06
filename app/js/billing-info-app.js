// get the information from the input field 
/* from validation */

const formulario = document.getElementById("billing-informaiton");
const inputs = document.querySelectorAll( "#billing-informaiton input")

const expresiones = {
	name_lastname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    id: /^\d{6,10}$/, // 6 a 10 numeros.
    order: /^\d{2,5}$/ // 2 a 5 numeros
}

const fileds_validation = {

    userName: false,
    lastName: false, 
    userEmail: false,
    id: false, 
    orderN:false 
}


const validateForm  = (e) =>{
   switch (e.target.name) {
        case"userName":
        //evaluate the infueld "userName" input acornding the regular expression userName"
            validateFields(expresiones.name_lastname, e.target, "userName")
        break;
        case "lastName":
        //evaluate the infueld "lastName" input acornding the regular expression userName"
            validateFields(expresiones.name_lastname, e.target, "lastName")    
        break;
        case "userEmail":
            validateFields(expresiones.email,e.target,"userEmail" )
        break;
        case "id":
            validateFields(expresiones.id,e.target,"id" )
        break;
        case "orderNumber":
            validateFields(expresiones.order,e.target,"orderNumber" )
        break;
   
       default:
           break;
   } e.target.name
}

const validateFields = (expresion, input, field) =>{
if(expresion.test(input.value)){
    //if the user inmput is valid 
    document.querySelector('.non_display_error_alert').classList.remove('display_error-alert')   
    document.getElementById(field).classList.remove('form_inputerror')
    document.getElementById(field).classList.add('form_inputValid')
    fileds_validation[field] = true;

    } else{

    //if the user inmput is not valid     
    if (field === "userName" || "lastName") {
        document.querySelector('.non_display_error_alert').innerHTML="<p>Please enter only letters</p>"  
    }
    if (field == "userEmail") {
        document.querySelector('.non_display_error_alert').innerHTML="<p>Invalid e-mail</p>"  
    }
    if (field == "id") {
        document.querySelector('.non_display_error_alert').innerHTML="<p>Invalid ID</p>"  
    }
    if (field == "orderNumber") {
        document.querySelector('.non_display_error_alert').innerHTML="<p>Invalid Order number</p>"  
    }
    document.querySelector('.non_display_error_alert').classList.add('display_error-alert')   
    document.getElementById(field).classList.remove('form_inputValid') 
    document.getElementById(field).classList.add('form_inputerror')
    fileds_validation[field] = false;
    }
}


inputs.forEach((input) => {
    input.addEventListener('keyup', validateForm);
    input.addEventListener('blur', validateForm);
});


formulario.addEventListener('submit', (e) =>{
 e.preventDefault();

 if( fileds_validation.userName && fileds_validation.lastName && fileds_validation.userEmail && fileds_validation.id){     
  
     var user_info ={
        user_name: document.getElementById('userName').value, 
        last_name: document.getElementById('lastName').value,
        email: document.getElementById('userEmail').value,
        id: document.getElementById('id').value,
        billing_address: document.getElementById('billing-address').value,
        order_number: document.getElementById('orderNumber').value
     } 

     console.log(user_info);
 }
 else{
    document.querySelector('.form_error_submit').classList.add('display_error_submit');
    setTimeout(()=>{
        document.querySelector('.form_error_submit').classList.remove('display_error_submit');
    },4000)
 }
}) 