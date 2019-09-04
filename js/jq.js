/*$(".test").fadeOut(1000);
$(".test").fadeIn(1000);
$(".test").fadeToggle(1000);
$(".test").fadeTo(1000,0.5);

$(".test").slideDown(1000);
$(".test").slideIn(1000);
$(".test").slideToggle(1000);

$(".test").hide(1000);
$(".test").show(1000);
$(".test").Toggle(1000);
*/
// $(".btn").click(function () {
// $(".test").slideDown(4000);
// })

// $("section").animate({width:'100%'},1000);

// $("section").animate({height:'100%'},1000);
// $("section h2").fadeIn(2000,function(){
// 	$("section p").fadeIn(2000,function(){
// 	$("section p").animate({padding:'10px 100px'},1000,function(){


		
// 			$("section .col-md-4").fadeIn(3000)
			

// })	});	});
$(".img-Item").click(function(){
	 let $imgSrc = $(this).attr("src");//getter
	$(".mainImg") .attr("src",$imgSrc);//setter
})