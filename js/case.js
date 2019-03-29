$(document).ready(function(){
	// 案例js开始
	$(".caseBottom .doug").mouseenter(function(){
		$(".caseBottom .picTopImg>span").eq($(this).index()).css({"display":"block"});
		$(".caseBottom .picTopCont a").eq($(this).index()).css({"background":"#13cec1"});
	})
	$(".doug").mouseleave(function(){
		$(".caseBottom .picTopImg>span").eq($(this).index()).css({"display":"none"});
		$(".caseBottom .picTopCont a").eq($(this).index()).css({"background":"#24cde7"});
	})
	
	$(".caseBottom1 .doug").mouseenter(function(){
		$(".caseBottom1 .picTopImg>span").eq($(this).index()).css({"display":"block"});
		$(".caseBottom1 .picTopCont a").eq($(this).index()).css({"background":"#13cec1"});
	})
	$(".doug").mouseleave(function(){
		$(".caseBottom1 .picTopImg>span").eq($(this).index()).css({"display":"none"});
		$(".caseBottom1 .picTopCont a").eq($(this).index()).css({"background":"#24cde7"});
	})
	
	$(".caseBottom2 .doug").mouseenter(function(){
		$(".caseBottom2 .picTopImg>span").eq($(this).index()).css({"display":"block"});
		$(".caseBottom2 .picTopCont a").eq($(this).index()).css({"background":"#13cec1"});
	})
	$(".doug").mouseleave(function(){
		$(".caseBottom2 .picTopImg>span").eq($(this).index()).css({"display":"none"});
		$(".caseBottom2 .picTopCont a").eq($(this).index()).css({"background":"#24cde7"});
	})
	// 案例js结束
	// *************************************************
	// tab切换开始
	$(".caseTop li").click(function(){
		$(this).addClass("bug").siblings("li").removeClass("bug");
		$(".case>div").eq($(this).index()).slideDown(800).siblings("div").slideUp(800);
	})
	// tab切换结束
	
})