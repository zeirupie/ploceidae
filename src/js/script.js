const sideBar = document.getElementById("sideBar");

function open_sidebar() {
    sideBar.style.display = "block";
}

function close_sidebar() {
  sideBar.style.display = "none";
}

window.addEventListener('resize', () => {
  if(window.innerWidth > 769)
  {
    sideBar.style.display = "block";
  }
});
