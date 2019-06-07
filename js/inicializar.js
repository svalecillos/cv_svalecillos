$(document).ready(function(){
		$('.nav').onePageNav(); // -> Inicia el page nav
    $(window).scroll(function(){
        if($(window).scrollTop()>580){
          $('#nav').removeClass('N/A transparent');
          $('#nav').addClass('nav-fijo');
        }else{
          $('#nav').removeClass('nav-fijo');
          $('#nav').addClass('N/A transparent');
        }
      });
    $('.sidenav').sidenav();// -> Iniciamos el boton del menu para moviles
});