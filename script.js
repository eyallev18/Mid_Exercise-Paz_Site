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
  function mouseOver() {
    document.getElementById("non_hover").className = "hover";
    document.getElementById("hover").className = "non_hover";
  }
  function mouseOut() {
    document.getElementById("non_hover").className = "non_hover";
    document.getElementById("hover").className = "hover";
  }
  
  
  