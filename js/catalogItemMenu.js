var catalogMenuLink = document.querySelector(".header-site-navigation-catalog-link");

var catalogMenu = document.querySelector(".modal-catalog-items-menu");

catalogMenuLink.addEventListener("click", function(evt) {
	evt.preventDefault();
	catalogMenu.classList.toggle("modal-catalog-items-menu-show");
});