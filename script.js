function submitForm() {
    document.getElementById("my-form").className = "was-validated";
  }
  
  function updateGradeValue() {
    // read value from range input
    var gradeValue = document.getElementById("grade").value;
    
    // update value in span (ui)
    document.getElementById("grade-value").innerHTML = gradeValue;
  }
  
  function bodyLoad() {
    updateGradeValue();
    
    
    setInterval(function() {
      
      var currentValue = document.getElementById("progress").value;
      document.getElementById("progress").value = currentValue + 1;
      
    }, 1000);
  }
  
  
  