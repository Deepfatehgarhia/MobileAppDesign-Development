var fieldFilter = document.querySelector("#filter-table");

fieldFilter.addEventListener("input", function() {
  /*console.clear();
  console.log(this.value)*/
  var patients = document.querySelectorAll(".patient");

  if (this.value.length > 0) {
  /* Do I have something typed .. if yes
      run a search via for and add the class invisible to clean up */
    for (var i = 0; i < patients.length; i++) {
      var patient = patients[i];
      var tdName = patient.querySelector(".info-name");
      var name = tdName.textContent;
      if (name != this.value) {
        /* Adding a class that makes the patient invisible */
        patient.classList.add("invisible");
      } else {
        patient.classList.remove("invisible");
      }
    }

    } else {
      for (var i = 0; i < patients.length; i++) {
        var patient = patients[i];
        patient.classList.remove("invisible");
      }
    }
});
