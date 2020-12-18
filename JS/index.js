let toggleClass = document.getElementsByClassName("toggle");
let overlayClass = document.getElementsByClassName("overlay");
let menuClass = document.getElementsByClassName("menu");

function openMenu() {
  this.classList.toggle('active');
  for (let i = 0; i < overlayClass.length; i++) {
    overlayClass[i].classList.toggle('active');
  }
  for (let i = 0; i < menuClass.length; i++) {
    menuClass[i].classList.toggle('active');
  }
}

function closeMenuByMenuButtons() {
  this.classList.toggle('active');
  for (let i = 0; i < overlayClass.length; i++) {
    overlayClass[i].classList.toggle('active');
  }
  for (let i = 0; i < toggleClass.length; i++) {
    toggleClass[i].classList.toggle('active');
  }
}

function closeMenuByOverlayClick() {
  this.classList.toggle('active');
  for (let i = 0; i < menuClass.length; i++) {
    menuClass[i].classList.toggle('active');
  }
  for (let i = 0; i < menuClass.length; i++) {
    toggleClass[i].classList.toggle('active');
  }
}



for (let i = 0; i < toggleClass.length; i++) {
  toggleClass[i].addEventListener("click", openMenu)
}

for (let i = 0; i < overlayClass.length; i++) {
  overlayClass[i].addEventListener("click", closeMenuByOverlayClick)
}

for (let i = 0; i < menuClass.length; i++) {
  menuClass[i].addEventListener("click", closeMenuByMenuButtons)
}
