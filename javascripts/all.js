

var menu = document.querySelector(".mainNav"),
  toggle = document.querySelector(".nav-burger"),
  body = document.getElementsByTagName('body')[0];

function toggleToggle() {
  toggle.classList.toggle("menu-open");
};

function toggleMenu() {
  menu.classList.toggle("active");
  body.classList.toggle("is-active-menu");
};

toggle.addEventListener("click", toggleToggle, false);
toggle.addEventListener("click", toggleMenu, false);

document.onkeydown = check_key;

function check_key(e) {
    e = e || window.event;
    if(e.keyCode == '27') {      
      toggleToggle();
      toggleMenu();
    }
}

$(".expand-text").click(function() {
    $(this).children(".icon").toggleClass("rotate"), $(".expandable-text").slideToggle("fast")
});
