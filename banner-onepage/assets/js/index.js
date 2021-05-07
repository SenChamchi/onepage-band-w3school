var header = document.getElementById('header');
var mobileMenu = document.getElementById('menuMobile');
var headerH = header.clientHeight;

// op/close menu
mobileMenu.onclick = function(){
    var isClose = header.clientHeight === headerH;
    if(isClose){
        header.style.height = 'auto';
    } else{
        header.style.height = null;
    }
}

// auto close menu
var menuItems = document.querySelectorAll('#nav li a[href *="#"]')
console.log(menuItems);
