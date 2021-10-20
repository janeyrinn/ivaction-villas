// Validate inputs in registration form 
function validateRegistrationForm() {
    var name = document.getElementById("inputName");
    var surname = document.getElementById("inputSurname");
    var emailaddress = document.getElementById("inputEmail");
    var contact = document.getElementById("contact");
    var property = document.getElementById("accomodationAddress")

    // if statement validates against empty input and special characters,  
    if (name.value.trim() == ""|| !/^[a-zA-Z\s]*$/g.test(name.value) ) {
      errorModal("Name required, no special characters");
      name.focus();
      return false;
    }

    if (surname.value.trim() == ""|| !/^[a-zA-Z\s]*$/g.test(surname.value) ) {
        errorModal("Surname required, no special characters");
        surname.focus();
        return false;
      }

    // if statement validates against empty input
    if (property.value.trim() == "") {
        errorModal("Property address required");
        property.focus();
        return false;
      }

    // if statement validates against empty input
    if (emailaddress.value == "") {
      errorModal("Email required");
      emailaddress.focus();
      return false;
    }
  
    if (contact.value == "" || isNaN(contact.value) || contact.value.length != 10) {
        errorModal("Contact number required (10 digits)");
        contact.focus();
        return false;
      }
    }

  // Below will change the error message in the validation modal

  function errorModal(errMsg) {
    document.getElementById("validationMessage").innerHTML = errMsg;
    $("#validationModal").modal("show");
  }