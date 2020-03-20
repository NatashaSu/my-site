jQuery(document).ready(function($){$(".nav__menu").on("click",function(){
    $(".bottomhead").toggleClass("active");
  });
});
  
$(".menu_burger").on("click",function(){
    $(".bottomhead").toggleClass("active");
  });


$(".menu_burger").on("click",function(e){
  e.preventDefault;
  $(".header").toggleClass("menu_burger_active");
});

$(".nav__menu").on("click",function(e){
   e.preventDefault; $(".header").toggleClass("menu_burger_active");
  });

function windowSize(){
  if($(window).width()<994) 
  {
    $(".nav .test .nav__news,.phoneforthewindow,.allruso,.voiti").appendTo(".bottomhead ul").wrap("<li class='testjq'></li>");
  }
  else{
    $(".bottomhead ul .testjq .nav__news, .phoneforthewindow,.allruso,.voiti").appendTo(".nav .test")
  }
}

windowSize();

$( window ).resize(function() {
  console.log('RESIZE',$(window).width());
  windowSize();
});

