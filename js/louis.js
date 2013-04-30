function init(){
	
	
	$("#gco2").click(function(){
		$('#myModal').modal('show');
	});
	$("#gco2").mouseover(function(){
		$(this).popover('show');
	});
	$("#gco2").mouseout(function(){
		$(this).popover('hide');
	});

	$("#coal").mouseover(function(){
		$(this).popover('show');
	});
	$("#coal").mouseout(function(){
		$(this).popover('hide');
	});

	$("#factory").mouseover(function(){
		$(this).popover('show');
	});
	$("#factory").mouseout(function(){
		$(this).popover('hide');
	});

}
