// get the information from the input field 
/* from validation */

const formulario = document.getElementById("user-questions");
const inputs = document.querySelectorAll( "#user-questions input")

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
    document.querySelector('.non_display_error_alert').classList.add('display_error-alert')   
    document.getElementById(field).classList.remove('form_inputValid') 
    document.getElementById(field).classList.add('form_inputerror')
    fileds_validation[field] = false;
    }
}

// validate field every time user type 
inputs.forEach((input) => {
    input.addEventListener('keyup', validateForm);
    input.addEventListener('blur', validateForm);
});


// event listener form submission
formulario.addEventListener('submit', (e) =>{
 e.preventDefault();

 if( fileds_validation.userName && fileds_validation.lastName && fileds_validation.userEmail){     
  
     var user_info ={
        user_name: document.getElementById('userName').value, 
        last_name: document.getElementById('lastName').value,
        email: document.getElementById('userEmail').value,
        description: document.getElementById('request-drescription').value
     } 
        
  // display the content in the modal window    
     document.getElementById("user_name").innerHTML = " " + user_info.user_name;
     document.getElementById("last_name").innerHTML = " " + user_info.last_name;
     document.getElementById("user_email").innerHTML = " " + user_info.email;
     document.getElementById("description").innerHTML = " " + user_info.description;
  

       //disapear modal 
       const modal_out = document.querySelectorAll('.container_modal')[0];
       modal_out.addEventListener("click", () =>{

        billing_information_modal.style.visibility = "hidden";
        modal_out.classList.add('close-modal')

       })

     //make visible the modal window.. 
     let billing_information_modal = document.querySelectorAll(".container_modal")[0];
     modal_out.classList.remove('close-modal')
     billing_information_modal.style.visibility = "visible";


    //submit a request 
    const btn_submit = document.getElementById('submit_request');

    btn_submit.addEventListener('click',  ()=>{

        console.log('event')

        

        function sendEmail(info) {
            Email.send({
          SecureToken :"ef86f175-3efb-431d-b8fb-c5945e32b73b",
            To : 'pagosandrescastro@gmail.com',
            From : "guevaracastroandres@gmail.com",
            Subject : "Customer complaint from :" + info.user_name + " " + info.last_name,
            Body : `Hi, this is a questions from the user: ${info.user_name} ${info.last_name}
                   <br>  email: ${info.email}
                   <br> Description: ${info.description}`, 
            }).then(
                message => alert(message), location.href ="../app/submitionPage.html"
            );
        }

        sendEmail(user_info)
        
    })

 
 }
 // if the form is not properly filled display an error message
 else{
    document.querySelector('.form_error_submit').classList.add('display_error_submit');
    setTimeout(()=>{
        document.querySelector('.form_error_submit').classList.remove('display_error_submit');
    },4000)
 }

}) 