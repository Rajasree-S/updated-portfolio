
var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var phoneError = document.getElementById("phone-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName(){
    var name = document.getElementById('floatingInput').value;
    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    else if(!name.match(/^[a-zA-Z]+(?:-[a-zA-Z]+)*$/)){
        nameError.innerHTML = "write full name";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}


function validatePhone(){
    var phone = document.getElementById('floatingPhone').value;
    if(phone.length == 0){
        phoneError.innerHTML = "Phone number is required";
        return false;
    }
    else if(phone.length !== 10){
        phoneError.innerHTML = "Phone number should be 10 digits";
        return false;
    }
    else if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "Phone number is required";
        return false;
    }
        else {
            phoneError.innerHTML = '<i class="fa-solid fa-check"></i>';
            return true;
        }
}
    

function validateEmail(){
    var email = document.getElementById("floatingEmail").value;
    if(email.length == 0){
        emailError.innerHTML = "email is required";
        return false;
    }
    else if(!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}$/)){
        emailError.innerHTML = "email invalid";
        return false;
}
    else {
        emailError.innerHTML = '<i class="fa-solid fa-check"></i>';
        return true;    
    }
       
}
    
function validateMessage() {
    let message = document.getElementById("floatingMessage").value;
    let error = document.getElementById("message-error");
    if (message.length < 1) {
      error.innerHTML = "Message cannot be empty";
      error.style.color = "red";
      return false;
    } else {
      error.innerHTML = "";
      return true;
    }
  }
  
function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() ||!validateMessage()){
        submitError.innerHTML = "Please fix the errors to send message";
        return false;
    }
    
}