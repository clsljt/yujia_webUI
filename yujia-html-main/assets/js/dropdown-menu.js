window.onload = function(){
  let dropdownBtn = document.getElementById("dropdownBtn");
  let menu = document.getElementById("menu");

  dropdownBtn.onclick = function(){
    if(menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  }
}