var Fintech = Fintech || {};

Fintech.UploadService = Fintech.UploadService || {
	onStart: function(element) {
		if(!$(element).hasClass('ui-state-disabled')) {
			$(element).parent().find('input[type=file]').click();
		}
	},
	checkHandleAfterMultipleUpload: function(fileuploadWidgetVarString) {
		var self = Fintech.UploadService;
		if (self.isLastUploadedFile(fileuploadWidgetVarString)) {
			handleAfterMultipleUpload();
        }
	},
	
	onCompleteMultipleUpload: function(fileuploadWidgetVarString){
		var self = Fintech.UploadService;
		if (self.isLastUploadedFile(fileuploadWidgetVarString)) {
			PF('scanUploadDialog').hide();
		}
	},
	isLastUploadedFile: function(fileuploadWidgetVarString){
		var fileUpload = PF(fileuploadWidgetVarString);
		return fileUpload != undefined && fileUpload.files!= undefined && fileUpload.files.length === 0;
	},
	blockPage: function() {
		$.blockUI({ message: '<span class="fa-3x"><i class="fa fa-spinner fa-spin"/></span>'});
	},
	unblockPage: function() {
		$.unblockUI();
	}
};