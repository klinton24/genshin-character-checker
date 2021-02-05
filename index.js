/*const select = document.getElementById("charSelect"); 
const charOptions = ["Zhongli", "Diluc", "Xiao", "Generic"]; 

for(var i = 0; i < charOptions.length; i++) {
    var opt = options[i];
    var el = document.createElement("charOption");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}​
/*

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("charSelect").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }