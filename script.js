function toggleSubMenu() {
  var subMenu = document.getElementById("workSubMenu");
  // Toggle the display property
  if (subMenu.style.display === "none") {
    subMenu.style.display = "block";
  } else {
    subMenu.style.display = "none";
  }
}
