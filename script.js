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
    
    
    
  }
  function mouseOver() {
    document.getElementById("non_hover").className = "hover";
    document.getElementById("hover").className = "non_hover";
  }
  function mouseOut() {
    document.getElementById("non_hover").className = "non_hover";
    document.getElementById("hover").className = "hover";
  }
  function mouseOver_read_m1() {
    document.getElementById("non_hover_read_m1").className = "read_more hover_read_m1";
    document.getElementById("hover_read_m1").className = "read_more non_hover_read_m1";
  }
  function mouseOut_read_m1() {
    document.getElementById("non_hover_read_m1").className = "read_more non_hover_read_m1";
    document.getElementById("hover_read_m1").className = "read_more hover_read_m1";
  }

  var image=document.getElementById("first_swap_pic");
  
  var image_tracker = 'Oz_pic';

  function swap(){
    var image = document.getElementById('first_swap_pic');
    if(image_tracker=='Oz_pic'){
    image.src='250X110668568400.jpg';
    image_tracker='250X110668568400';
    }
    else 
     if (image_tracker=='250X110668568400'){
    image.src='banner_atar.jpg';
    image_tracker='banner_atar';
    }

    else {
        image.src='Oz_pic.JPG';
        image_tracker='Oz_pic';
        }
    }
    var timer = setInterval('swap();',2000); 