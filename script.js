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
    var image = document.getElementById('first_swap_pic');
    document.getElementById("non_hover").className = "hover";
    document.getElementById("hover").className = "non_hover";
  }
  function mouseOut() {
    document.getElementById("non_hover").className = "non_hover";
    document.getElementById("hover").className = "hover";
  }
  function mouseOver_read_m1() {
    document.getElementById('swap_pic_read_m1').src="read_more_blue.jpg";
   
  }
  function mouseOut_read_m1() {
    document.getElementById('swap_pic_read_m1').src="read_more_white.png";
  }
  function mouseOver_read_m2() {
    document.getElementById('swap_pic_read_m2').src="read_more_blue.jpg";
   
  }
  function mouseOut_read_m2() {
    document.getElementById('swap_pic_read_m2').src="read_more_white.png";
  }
  function mouseOver_read_m3() {
    document.getElementById('swap_pic_read_m3').src="read_more_blue.jpg";
   
  }
  function mouseOut_read_m3() {
    document.getElementById('swap_pic_read_m3').src="read_more_white.png";
  }
  function mouseOver_read_de1() {
    document.getElementById('swap_pic_read_de1').src="read_more_blue_white.jpg";
   
  }
  function mouseOut_read_de1() {
    document.getElementById('swap_pic_read_de1').src="read_more_yellow.png";
  }
  function mouseOver_read_de2() {
    document.getElementById('swap_pic_read_de2').src="read_more_blue_white.jpg";
   
  }
  function mouseOut_read_de2() {
    document.getElementById('swap_pic_read_de2').src="read_more_yellow.png";
  }
  function mouseOver_read_nor() {
    document.getElementById('swap_pic_read_nor').src="read_more_blue_white.jpg";
   
  }
  function mouseOut_read_nor() {
    document.getElementById('swap_pic_read_nor').src="read_more_yellow.png";
  }
  function mouseOver_read_cen() {
    document.getElementById('swap_pic_read_cen').src="read_more_blue_white.jpg";
   
  }
  function mouseOut_read_cen() {
    document.getElementById('swap_pic_read_cen').src="read_more_yellow.png";
  }
  function mouseOver_read_sou() {
    document.getElementById('swap_pic_read_sou').src="read_more_blue_white.jpg";
   
  }
  function mouseOut_read_sou() {
    document.getElementById('swap_pic_read_sou').src="read_more_yellow.png";
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