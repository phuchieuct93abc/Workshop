var Fintech = Fintech || {};

Fintech.IdentityVerification = {
		
	VIEW_IMAGE_DIALOG: 'viewImageDialog',
	VIEW_IMAGE_BLOCK: '[id$="viewImageBlock"]',
	IMAGE_ON_TAB_CONTAINER: '.identification-verification',
	MAX_HEIGHT_POPUP_RATIO: 0.8,
	MAX_WIDTH_POPUP_RATIO: 0.6,
	
	onShowLargeImage: function(e) {
		var self = this;
		self._onOutSidePopupClickEvent();
		PF(self.VIEW_IMAGE_DIALOG).show(); 
		var image = new Image();
		$(self.VIEW_IMAGE_BLOCK).empty();
		image.src = $(e.target).parent().find('img').attr('src');
		self._getImageRatio(image);
		$(self.VIEW_IMAGE_BLOCK).append(image);
		setTimeout(function(){ PF(self.VIEW_IMAGE_DIALOG).initPosition(); }, 1);
	},
	_onOutSidePopupClickEvent: function() {
		var self = this;
		$('body').click(function(e){
			if($(self.IMAGE_ON_TAB_CONTAINER).has($(e.target)).length == 0){
				if(PF(self.VIEW_IMAGE_DIALOG).isVisible()){
					if(PF(self.VIEW_IMAGE_DIALOG).getJQ().has($(e.target)).length == 0){
						PF(self.VIEW_IMAGE_DIALOG).hide();
					}
				} 
			}
		});	
	},
	
	onHideViewImagePopup: function(){
		$('body').unbind().click();
	},
	
	onConfirmIdDocument: function() {
		PF('isValidId').getJQ().find('input[value="true"]').trigger('click');
	},
	
	_getImageRatio: function(image) {
		var self = this;
		var originalWidth = image.width, originalHeight = image.height;
		var windowWidth = $(window).width(), windowHeight = $(window).height();
		if(image.width > self.MAX_WIDTH_POPUP_RATIO*windowWidth){
			image.width = 0.6*windowWidth;
			image.height = originalHeight*(image.width/originalWidth);
		}
		if(image.height > self.MAX_HEIGHT_POPUP_RATIO*windowHeight){
			image.height = 0.8*windowHeight;
			image.width = originalWidth*(image.height/originalHeight);
		}
		return image;
	}
};
