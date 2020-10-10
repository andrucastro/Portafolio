
const button = document.getElementById("catch")

button.addEventListener("click", createinvoice)



function createinvoice(){
    

function drawInvoice(userData){
    
    
    localStorage.setItem("user", JSON.stringify(userData))
    const user = JSON.parse(localStorage.getItem("user"));
    
    document.getElementById("invoice_name").innerHTML ="  " + user.userName;
    document.getElementById("invoice_lastname").innerHTML = "  " + user.userLname;
    document.getElementById("invoice_email").innerHTML = "  " + user.userEmail;
    document.getElementById("invoice_phone").innerHTML = "  " + user.userPhone;
    document.getElementById("invoice_shiping").innerHTML = "  " + user.userShiping;
    document.getElementById("invoice_state").innerHTML = "  " + user.userLocation;
       
}


function getData(){

    let name = document.getElementById("userName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let shiping = document.getElementById("shiping").value;
    let state = document.getElementById("stateOption").value;
    

    const userData = {
        userName: name,
        userLname: lastName,
        userEmail: email,
        userPhone: phone,
        userShiping: shiping,
        userLocation: state
    }
    
    return userData
}

drawInvoice(getData())

}

const dataStoraged = JSON.parse(localStorage.getItem("user"))

if(localStorage.getItem("user")){

    document.getElementById("invoice_name").innerHTML ="  " + dataStoraged.userName;
    document.getElementById("invoice_lastname").innerHTML = "  " + dataStoraged.userLname;
    document.getElementById("invoice_email").innerHTML = "  " + dataStoraged.userEmail;
    document.getElementById("invoice_phone").innerHTML = "  " + dataStoraged.userPhone;
    document.getElementById("invoice_shiping").innerHTML = "  " + dataStoraged.userShiping;
    document.getElementById("invoice_state").innerHTML = "  " + dataStoraged.userLocation;
}