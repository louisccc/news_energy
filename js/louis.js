function init(){
	
	
	$("#gco2").click(function(){
		$('#myModal').modal('show');
	});
	$("#gco2").mouseover(function(){
		$("#gco2").popover('show');
	});
	$("#gco2").mouseout(function(){
		$("#gco2").popover('hide');
	});
}
