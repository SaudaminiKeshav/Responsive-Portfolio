
$(document).ready(function(){

carouselImageClickListener();

portfolioImgaeClickListener();
});

function carouselImageClickListener(){
$("#code-quiz").on('click', function(){
console.log("code quiz clicked");
});
}

// function portfolioImgaeClickListener(){
   
//         $(".vc").click(function(){
//           $(".vc").animate({
//             left: '250px',
//             opacity: '1',
//             height: '150%',
//             width: '150%'
//           });
//         });
      
// }