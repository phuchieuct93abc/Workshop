$(document).ready(function(){
	
	clickOnImage();
});

var clickOnImage = function(){
	$("input[type='file']").attr("accept",".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|images/*");
	$(".addImage").click(function(){
		$("input[type='file']").click();
	});
};