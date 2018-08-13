var Fintech = Fintech || {};
Fintech.DocumentFooter = Fintech.DocumentFooter || {};
Fintech.DocumentFooter = {
	toggleDocumentContainer: function () {
		$(".document-footer").toggleClass('toggled');
	},
	isDocumentFooterToggled: function() {
		if(!$(".document-footer").hasClass('toggled')){
			this.toggleDocumentContainer();
		}
	}
};