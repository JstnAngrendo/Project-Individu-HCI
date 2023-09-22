function checkForm() {

    const form = document.forms['formCont'];

    const firstName = form['firstName'].value;
    const lastName = form['lastName'].value;
    const phoneNum = form['phoneNum'].value;
    const dateOfBirth = form['dateOfBirth'].value;
    const email = form['emails'].value;
    const password = form['password'].value;
    const confPass = form['confPass'].value;
    const address = form['addressForm'].value;
    const terms = form['terms'].checked;
    

    document.getElementById('fnameError').innerHTML = "";
    document.getElementById('lnameError').innerHTML="";
    document.getElementById('phoneNumError').innerHTML="";
    document.getElementById('dateOfBirthError').innerHTML="";
    document.getElementById('emailError').innerHTML="";
    document.getElementById('passwordError').innerHTML="";
    document.getElementById('confPassError').innerHTML="";
    document.getElementById('addressError').innerHTML = "";
    document.getElementById('errorCheck').innerHTML = "";
    let isValid = true;

    let errorFname = "";
    let errorLname = "";
    let errorPhoneNum = "";
    let errorDateOfBirth = "";
    let errorEmail = "";
    let errorPassword = "";
    let errorConfPass = "";
    let errorAddress = "";
    let errorCheck = "";


    if (!firstName) {
        errorFname = "Name must not be empty";
        isValid = false;
    } else if (firstName.length < 5) {
        errorFname = "First name must be at least 5 characters";
        isValid = false;
    }

    // Validate last name (minimum 5 characters)
    if (!lastName) {
        errorLname = "Name must not be empty";
        isValid = false;
    } else if (lastName.length < 5) {
        errorLname = "Last name must be at least 5 characters";
        isValid = false;
    }

    // Validate phone number (you can add your validation logic here)
    if (!phoneNum) {
        errorPhoneNum = "Field Required";
        isValid = false;
    }

    // Validate date of birth (you can add your validation logic here)
    if (!dateOfBirth) {
        errorDateOfBirth = "Field Required";
        isValid = false;
    }

    // Validate email (you can add your validation logic here)
    if (!email) {
        errorEmail = "Invalid Email Address";
        isValid = false;
    }

    // Validate password (you can add your validation logic here)
    if (!password) {
        errorPassword = "Field Required";
        isValid = false;
    }

    // Validate confirm password (you can add your validation logic here)
    if (password != confPass) {
        errorConfPass = "Password doesn’t match";
        isValid = false;
    }

    // Validate address (you can add your validation logic here)
    if (!address) {
        errorAddress = "Field Required";
        isValid = false;
    }

    // Validate terms checkbox
    if (!terms) {
        errorCheck = "You must agree to the terms & conditions";
        isValid = false;
    }

    // Display error messages
    
    document.getElementById('fnameError').innerHTML = errorFname;
    document.getElementById('lnameError').innerHTML= errorLname ;
    document.getElementById('phoneNumError').innerHTML = errorPhoneNum ;
    document.getElementById('dateOfBirthError').innerHTML= errorDateOfBirth;
    document.getElementById('emailError').innerHTML= errorEmail;
    document.getElementById('passwordError').innerHTML= errorPassword;
    document.getElementById('confPassError').innerHTML= errorConfPass;
    document.getElementById('addressError').innerHTML = errorAddress;
    document.getElementById('errorCheck').innerHTML = errorCheck;

    if(isValid == true){
        var confirmed = confirm("Your data has been saved");
        return confirmed;
    }else{
        return isValid;
    }
}
