require.config({
	paths: {
		'jquery': "jquery",
		//jquery默认加载
		"js": "js",
		'layer':'../layer/layer'
	}
})

define(['jquery','layer'], function ($,layer) {

	$('*[data-js-tabs]').children().on('click', function () {
		var tabs_obj = $(this).parent().attr('data-js-tabs');
		$(tabs_obj).children().eq($(this).index()).show().siblings().hide();
		$(this).addClass('active').siblings().removeClass('active');
	});
	$.each($('*[data-js-tabs]'), function (index, el) {
		var arg = window.location.search;
		if (arg != '') {
			arg = arg.split('?')[1].split('=')[1];
			console.log(arg);
			$(el).children().eq(arg - 1).trigger('click');

		} else {
			$(el).children().first().addClass('active');
			$($(el).attr('data-js-tabs')).children().eq(0).show().siblings().hide();;
		}
	});
	$('h1').on('click',function() {
		layer.alert('内容')
	})
})