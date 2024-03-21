/*=============== Show Menu =============== */
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navclose = document.getElementById('nav-close');

/*===== Menu Show =====*/
/* Validate if constant exists */
if(navToggle){
  navToggle.addEventListener('click', ()=> {
    navMenu.classList.add('show-menu');
  });
}

/*===== Hide Show =====*/
/* Validate if constant exists */
if(navClose){
  navClose.addEventListener('click', ()=> {
    navMenu.classList.remove('show-menu');
  });
}


/*===== Hide Show =====*/
/* Validate if constant exists */

/*=============== Remove Menu Mobile =============== */

/*===============================Background Header=================================*/
function scrollHeader(){
  const header = document.getElementById('header');
   if(this.scrollY >=50) header.classList.add('scroll-header');
   else header.classList.remove('scroll-header');
  }
   window.addEventListener('scroll', scrollHeader);
  
/*=============== Contact Form =============== */

/*=============== Style Switcher =============== */
