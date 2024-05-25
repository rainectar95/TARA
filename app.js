const navLinks = document.querySelectorAll('nav input[type="radio"]');

navLinks.forEach(link => {
  link.addEventListener('change', () => {
    document.querySelector('h2.hero').textContent = link.value;
  });
});

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  
  // Add leading zeros if necessary
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  // Display the time
  const timeString = `${hours}:${minutes}`;
  document.getElementById('time').textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Set up the initial clock display
updateClock();

function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {  
      document.documentElement.requestFullScreen();  
    } else if (document.documentElement.webkitRequestFullScreen) {  
      document.documentElement.webkitRequestFullScreen();  
    } else if (document.documentElement.webkititRequestFullScreen) {  
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
    }  
  } else {  
    if (document.cancelFullScreen) {  
      document.cancelFullScreen();  
    } else if (document.mozCancelFullScreen) {  
      document.mozCancelFullScreen();  
    } else if (document.webkitCancelFullScreen) {  
      document.webkitCancelFullScreen();  
    }  
  }  
}


var elem = document.getElementById("full");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}




const tabs = document.querySelectorAll('nav input[type="radio"]');
const tabPanels = document.querySelectorAll('.content');
   tabs.forEach((tab) => {
   tab.addEventListener('change', (e) => {
       // Hide all tab panels
       tabPanels.forEach((panel) => {
       panel.style.display = 'none';
       });

       // Show the current tab panel
       const panelId = `panel${e.target.id.slice(-1)}`;
       document.getElementById(panelId).style.display = 'block';
   });
   });