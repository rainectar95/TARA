// function showmodal(id) {
//   var modal = document.getElementById(id);
//   var overlay = document.getElementsByClassName('overlay')
//   overlay[0].style.display = 'block';
//   overlay[0].style.backgroundColor = "#00000020";
//   modal.style.bottom = "8px";
//   console.warn("OPEN  " +  id); 

// }

// function hidemodal(id) {
//   var modal = document.getElementById(id);
//   var modalHeight = document.querySelector('.modal'); 
//   var height = modalHeight.getBoundingClientRect().height;
//   var overlay = document.getElementsByClassName('overlay');
//   overlay[0].style.display = 'none';
//   overlay[0].style.backgroundColor = "#00000000";
//   modal.style.bottom = -height + "px";
//   console.warn("CLOSE  " +  id);
// }




function showmodal(id) {
  var overlay = document.getElementsByClassName('overlay')
  var modal = document.getElementById(id);
  document.querySelector('.overlay').style.display = 'block';
  overlay[0].style.backgroundColor = "#00000020";
  if (modal) {
    
    modal.style.bottom = "80px";
  }
  // overlay[0].style.backdropFilter = "blur(8px)";
  console.log(id);

}

function hidemodal() {
  var modals = document.querySelectorAll('.modal');
  var overlay = document.getElementsByClassName('overlay')
  var modalHeight = document.querySelector('.modal'); 
  var height = modalHeight.getBoundingClientRect().height;

  document.querySelector('.overlay').style.display = 'none';
  // overlay[0].style.backdropFilter = "blur(0px)";
  // console.log(overlay + id);

  overlay[0].style.backgroundColor = "#00000000";
  modals.forEach(modal => {
    modal.style.bottom = -height - 400 + "px";
  });
}

