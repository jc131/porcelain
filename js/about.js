$(document).ready(function(){
	// 楼层跳跃开始
	var _index = 0;
	$(".initi li").click(function(){
		// 楼层指示器
		$(this).addClass("bg").siblings("li").removeClass("bg");
		// 楼层跳跃
		_index = $(this).index() + 1;
		var _top = $("#louti" + _index).offset().top  -  100;
		
		    $("body,html").animate({
		        scrollTop: _top
		    }, 500);
		
		
	});
	// 楼层跳跃结束
	// **************************************************?
	// 经营理念开始
	$(".manage li").mouseenter(function(){
		$(".manage li div").eq($(this).index()).slideDown();
	})
	$(".manage li").mouseleave(function(){
		$(".manage li div").eq($(this).index()).slideUp();
	})
	// 经营理念结束
	// *******************************************************************
	// 资质荣誉开始
	$(".chaKan>a").click(function(){
		$(".slid").slideToggle();
	})
	// 资质荣誉结束
	
	// 人才招聘开始
	$(".recruit .shuw:eq(0)").click(function(){
		$(".recruitConterB").eq(0).slideToggle(500);
	})
	$(".recruit .shuw:eq(1)").click(function(){
		$(".recruitConterB").eq(1).slideToggle(500);
	})
	$(".recruit .shuw:eq(2)").click(function(){
		$(".recruitConterB").eq(2).slideToggle(500);
	})
	$(".recruit .shuw:eq(3)").click(function(){
		$(".recruitConterB").eq(3).slideToggle(500);
	})
	// console.log($(".recruitConterB"));
	// 人才招聘结束
	
})