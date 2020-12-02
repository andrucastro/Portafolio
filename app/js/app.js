/* from validation */

const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll( "#formulario input")

const expresiones = {
	userName: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{2,5}$/ // 2 a 5 numeros.
}


const validateForm  = (e) =>{
   switch (e.target.name) {
        case"usaerName":
        //evaluate the infueld "userName" input acornding the regular expression userName"
           if(expresiones.userName.test(e.target.value)){
            //change the color of the imput
            document.querySelector('.non_display_error_alert').classList.remove('display_error-alert')
            document.querySelector('.non_display_error_alert').innerHTML="<p>Please enter only letters and numbers, 6 a 10 caracteres</p>"      
            document.getElementById('userName').classList.remove('form_inputerror')
            document.getElementById('userName').classList.add('form_inputValid')
           } else{
            document.querySelector('.non_display_error_alert').classList.add('display_error-alert')   
            document.getElementById('userName').classList.remove('form_inputValid') 
            document.getElementById('userName').classList.add('form_inputerror')
           }
        break;
        case "lastName":
            if(expresiones.userName.test(e.target.value)){
                //change the color of the imput
                document.querySelector('.non_display_error_alert').classList.remove('display_error-alert')
                document.querySelector('.non_display_error_alert').innerHTML="<p>Please enter only letters and numbers, 6 a 10 caracteres</p>"      
                document.getElementById('lastName').classList.remove('form_inputerror')
                document.getElementById('lastName').classList.add('form_inputValid')
               } else{
                document.querySelector('.non_display_error_alert').classList.add('display_error-alert')   
                document.getElementById('lastName').classList.remove('form_inputValid') 
                document.getElementById('lastName').classList.add('form_inputerror')
               }
        
        break;
        case "userEmail":
        
        break;
        case "orderNumber":
        
        break;
   
       default:
           break;
   } e.target.name
}


inputs.forEach((input) => {
    input.addEventListener('keyup', validateForm);
    input.addEventListener('blur', validateForm);
});


formulario.addEventListener('submit', (e) =>{
 e.preventDefault();

}) 