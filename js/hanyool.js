$(document).ready(function(){
   //옆에서 날아오는 기능
   let scrTop = 0
   let devHwight = $(window).height() //화면높이
   let coords = $(".a").offset()
   console.log(coords)

   $(window).scroll(function(){
       // scrTop = $(window).scrollTop()
       // if(scrTop> $(".a").offset().top - devHwight*0.5){
       //     $(".a").addClass("on")
       // }else{
       //     $(".a").removeClass("on")
       // }
       scrTop = $(window).scrollTop()
       $(".rightToleft,.leftToRight").each(function(){
           if(scrTop > $(this).offset().top - devHwight*0.6){
               //스크롤바가 화면높이의 위에서 60%지점라인을 넘어섰을 때 실행되는 소스코드
               $(this).addClass("on")
           }else{
               $(this).removeClass("on")
           }
       })
   })

})