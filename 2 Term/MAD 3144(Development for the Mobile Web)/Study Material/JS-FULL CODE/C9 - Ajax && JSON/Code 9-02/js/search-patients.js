/*
    Let's Add the new patients in the table
    First we have to transform the string object received from the server
    JSON into a JavaScript object.
    Afte,  let's refactor the code and add the patient.
*/

var buttonAdd = document.querySelector("#search-patients");

buttonAdd.addEventListener("click", function() {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        /* Let's save the string using a variable */
        var serverResponse = xhr.responseText;
        /* SORRY ... crazy transformation */
        serverResponse = serverResponse.replace(/nome/g,"name");
        serverResponse = serverResponse.replace(/peso/g,"weight");
        serverResponse = serverResponse.replace(/altura/g,"height");
        serverResponse = serverResponse.replace(/gordura/g,"fat");
        serverResponse = serverResponse.replace(/imc/g,"bmi");
        /* Let's PARSE string-> JS object */
        var patients = JSON.parse(serverResponse);
        /* Let's iterate each object to add it in the table using a refactored
            code in form-operations.JS */
        patients.forEach(function(patient) {
          addtoTable(patient);
        });
      });

    xhr.send();
});
