/* Adding a click listener on top of my form "add new patient "
here we are using anonymous function and a native funcion named
event.preventDefault() that override the standard behaviour of forms
" Clen the form + send data to another wegb page " */

var buttonAdd = document.querySelector("#add-patient");

/* REFACTORED CODE */
buttonAdd.addEventListener("click", function(event) {

  event.preventDefault();
  var form   = document.querySelector("#form-add");
  var patient = formDataPatient(form)
  var errors = patientValidation(patient)
  if (errors.length > 0) {
    showErrorMessages(errors);
    return;
  }

  /* Add NEW FUNCTION */
  addtoTable(patient);
  form.reset();
  /* Add to error handling */
  var erroMessages = document.querySelector("#erro-messages");
  erroMessages.innerHTML = "";

});

function formDataPatient (form) {
  var patient = {
    name: form.name.value,
    weight: form.weight.value,
    height: form.height.value,
    fat: form.fat.value,
    bmi: bmiCalculation(form.weight.value, form.height.value) }
    return patient
}

function buildTr(patient) {
    var patientTr = document.createElement("tr");

    patientTr.classList.add("patient");

    patientTr.appendChild(buildTd(patient.name,"info-name"));
    patientTr.appendChild(buildTd(patient.weight,"info-weight"));
    patientTr.appendChild(buildTd(patient.height,"info-height"));
    patientTr.appendChild(buildTd(patient.fat,"info-fat"));
    patientTr.appendChild(buildTd(patient.bmi,"info-bmi"));
    return patientTr;
}

function buildTd(data,classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = data;
    return td;
}

function patientValidation (patient) {

    var errors = [];
    if (!weightValidation(patient.weight)) errors.push("The patient has an invalid weight");
    if (!weightValidation(patient.height)) errors.push("The patient has an invalid height");
    if (patient.name.length == 0) {
      errors.push("The patient must have a name");}
    if (patient.weight.length == 0) {
      errors.push("The patient must have a weight");}
    if (patient.height.length == 0) {
      errors.push("The patient must have a height");}
    if (patient.fat.length == 0) {
      errors.push("The patient must have a percentage of fat");}
    return errors
}

function showErrorMessages(errors) {
    var ul = document.querySelector("#erro-messages");
    ul.innerHTML = ""
    errors.forEach(function(erro){
      var li = document.createElement("li");
      li.textContent = erro;
      ul.appendChild(li);
    });
}

/* NEW FUNCTION - DUE TO REFACTORED CODE */
function addtoTable(patient) {
  var patientTr = buildTr(patient);
  var table = document.querySelector("#table-patients");
  console.log(patientTr);
  table.appendChild(patientTr);
}
