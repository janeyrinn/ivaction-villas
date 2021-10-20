// Validate inputs in registration form 
function validateRegistrationForm() {
    var name = document.getElementById("inputName");
    var surname = document.getElementById("inputSurname");
    var emailaddress = document.getElementById("inputEmail");
    var contact = document.getElementById("contact");
    var property = document.getElementById("accomodationAddress")

    // if statement validates against empty input and special characters,  
    if (name.value.trim() == ""|| !/^[a-zA-Z\s]*$/g.test(name.value) ) {
      errorModal("Απαιτείται όνομα, χωρίς ειδικούς χαρακτήρες");
      name.focus();
      return false;
    }

    if (surname.value.trim() == ""|| !/^[a-zA-Z\s]*$/g.test(surname.value) ) {
        errorModal("Απαιτείται επώνυμο, χωρίς ειδικούς χαρακτήρες");
        surname.focus();
        return false;
      }

    // if statement validates against empty input
    if (property.value.trim() == "") {
        errorModal("Απαιτείται διεύθυνση ακινήτου");
        property.focus();
        return false;
      }

    // if statement validates against empty input
    if (emailaddress.value.trim() == "") {
      errorModal("Απαιτείται email");
      emailaddress.focus();
      return false;
    }
  
    if (contact.value.trim() == "" || isNaN(contact.value) || contact.value.length != 10) {
        errorModal("Απαιτείται αριθμός επικοινωνίας (10 ψηφία)");
        contact.focus();
        return false;
      }
    }

  // Below will change the error message in the validation modal

  function errorModal(errMsg) {
    document.getElementById("validationMessage").innerHTML = errMsg;
    $("#validationModal").modal("show");
  }