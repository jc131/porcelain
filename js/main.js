$(document).ready(function() {
	// 点击放大镜js
	$(".secret").click(function() {
		$(this).siblings("input").toggle();
	});
	// 点击放大镜js结束
	// **************************************************?
	// 鼠标移入产品显示
	$(".move").mouseenter(function() {
		$(".xumu").slideDown();
	})
	$(".move").mouseleave(function() {
		$(".xumu").slideUp();
	})
	// 鼠标移入结束
	// ****************************************
	// 导航条变色js开始
    $(window).scroll(function(){				
		var Itop=$(window).scrollTop();
		if($(window).width()>=770){
			if(Itop>=$(".carousel").height()){
				$(".navbar-default").css({"background":"#000"});
				$(".navbar-brand img").attr("src","img/logo1_06.png");
			}else{
				$(".navbar-default").css({"background":"none"});
				$(".navbar-brand img").attr("src","img/logo_03.png");
			}
		}else{
			if(Itop>=$(".carousel").height()){
				$(".navbar-default").css({"background":"none"});
				$(".navbar-brand img").attr("src","img/logo1_06.png");
			}else{
				$(".navbar-default").css({"background":"none"});
				$(".navbar-brand img").attr("src","img/logo_03.png");
			}
		}
    })
	// 导航条变色js结束
	// *********************************************?
	// 家禽供应链管理系统js开始
	$(".planBottomConter li").mouseenter(function(){
		$(".planBottomConter li span").eq($(this).index()).css({"display":"none"});
		$(".planBottomConter li .mouse").eq($(this).index()).css({"display":"block"});
	})
	$(".planBottomConter li").mouseleave(function(){
		$(".planBottomConter li span").eq($(this).index()).css({"display":"block"});
		$(".planBottomConter li .mouse").eq($(this).index()).css({"display":"none"});
	})
	
	
// 	$(".planTop b:eq(0)").mouseenter(function(){
// 		$(".planBottomConter").slideDown();
// 		$(".planBottomConter1").slideUp();
// 	})
// 	$(".planTop b:eq(0)").mouseleave(function(){
// 		$(".planBottomConter").slideUp();
// 		$(".planBottomConter1").slideDown();
// 	})
// 	$(".planTop b:eq(1)").mouseenter(function(){
// 		$(".planBottomConter").slideUp();
// 		$(".planBottomConter1").slideDown();
// 	})
// 	$(".planTop b:eq(1)").mouseleave(function(){
// 		$(".planBottomConter").slideDown();
// 		$(".planBottomConter1").slideUp();
// 	})
	// 家禽供应链管理系统js结束
});
