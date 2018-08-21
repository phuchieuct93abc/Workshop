$('#wrapper').on('focusin', '.ui-inputfield, .ui-selectonemenu', function(){
	var id = $(this).attr("id");
	$('.ui-outputlabel[for*=' + id.split(':').pop() + ']').addClass("ui-state-focus");
});
$('#wrapper').on('focusout', '.ui-inputfield, .ui-selectonemenu', function(){
	var id = $(this).attr("id");
	$('.ui-outputlabel[for*=' + id.split(':').pop() + ']').removeClass("ui-state-focus");
});

$(window).resize(function(){
	 clearTimeout(this.timeout);
     this.timeout = setTimeout(function() {
    	$('.ui-dialog').each(function(){
    		var item = Fintech.GuiFrameWork.getWidgetVarById($(this).attr('id')); 
    		if(item) {
    			item.initPosition();
    		}
    	})
     }, 250);
	
});
