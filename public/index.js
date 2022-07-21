
let hamburger = document.querySelector('#hamburger')
let navlinks = document.querySelector('#navlinks')


hamburger.addEventListener('click', function (){
    if (navlinks.classList.contains('hidden')){
        navlinks.classList.remove('hidden')
       
    } else{
        navlinks.classList.add('hidden')
      
    }
})
 
 var ml4 = {};
 ml4.opacityIn = [0,1];
 ml4.scaleIn = [0.2, 1];
 ml4.scaleOut = 3;
 ml4.durationIn = 800;
 ml4.durationOut = 600;
 ml4.delay = 500;
 
 anime.timeline({loop: true})
   .add({
     targets: '.ml4 .letters-1',
     opacity: ml4.opacityIn,
     scale: ml4.scaleIn,
     duration: ml4.durationIn
   }).add({
     targets: '.ml4 .letters-1',
     opacity: 0,
     scale: ml4.scaleOut,
     duration: ml4.durationOut,
     easing: "easeInExpo",
     delay: ml4.delay
   }).add({
     targets: '.ml4 .letters-2',
     opacity: ml4.opacityIn,
     scale: ml4.scaleIn,
     duration: ml4.durationIn
   }).add({
     targets: '.ml4 .letters-2',
     opacity: 0,
     scale: ml4.scaleOut,
     duration: ml4.durationOut,
     easing: "easeInExpo",
     delay: ml4.delay
   }).add({
     targets: '.ml4 .letters-3',
     opacity: ml4.opacityIn,
     scale: ml4.scaleIn,
     duration: ml4.durationIn
   }).add({
     targets: '.ml4 .letters-3',
     opacity: 0,
     scale: ml4.scaleOut,
     duration: ml4.durationOut,
     easing: "easeInExpo",
     delay: ml4.delay
   }).add({
     targets: '.ml4',
     opacity: 0,
     duration: 500,
     delay: 500
   });


   window.addEventListener('scroll', reveal);

   function reveal(){
     var reveals = document.querySelectorAll('.reveal');

     for(var i = 0; i < reveals.length; i++){

       var windowheight = window.innerHeight;
       var revealtop = reveals[i].getBoundingClientRect().top;
       var revealpoint = 150;

       if(revealtop < windowheight - revealpoint){
         reveals[i].classList.add('active');
       }
       else{
         reveals[i].classList.remove('active');
       }
     }
   }
   setInterval(() => {
     
   
   const time =document.querySelector (".time");
    let date = new Date();
    let hour =date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
     let =day_night= "AM";
     if (hour > 12){
        day_night ="PM";
       hour =hour-12
     }
     if (hour < 10)
         hour = "0" + hour;
     if (minutes < 10)
         minutes ="0" + minutes;
      if (seconds < 10)
          seconds = "0" + seconds;
     time.textContent = hour + ":"+ minutes + ":"+ seconds + " " + day_night ;
   });
         
   $(window).scroll(function(){

    var scroll= $(window).scrollTop();
    $(".zoom img").css({
     width: (100 + scroll/5)+ "%"
    
    })
    });
    /*
    $(document).ready(function () {
      $(".nav-toggler").each(function (_, navToggler) {
        var target = $(navToggler).data("target");
        $(navToggler).on("click", function () {
          $(target).animate({
            height: "toggle",
          });
        });
      });
    }); */