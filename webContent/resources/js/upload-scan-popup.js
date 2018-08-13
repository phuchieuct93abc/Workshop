Fintech.UploadScanPopup = {

	EXPIRED_ID_ALERT_AREA:'[id$=":expiredIdAlertArea"]',
	INDIVIDUAL_TAB_WIDGET_VAR: "individualDgTab",
    DOSSIER_TITLE: '[id$=":dossier-title"]',
	AH_TAB_PANEL: '[href$=":accountHolderTabPanel"]',	
	FIRST_NAME: 'input[id$=":personFirstName"]',
	LAST_NAME: 'input[id$=":personLastName"]',
	
	SCANNED_PANEL : '[id$=":scannedPanel"',
	SELECT_ID_TYPE: '[id$=":selectIdType"]',
    SCAN_PICTURES_CONTAINER: '.scanned-image',
    DEFAULT_IMAGE_WIDTH: 300,
    
    onShowScanDialog: function() {
		var self = this;
		self._setDialogTitle();
		JSON.parse($(self.scannedImageData).text() || '[]') ;
		var canShowSwissResidencePermit = PF('canShowSwissResidencePermit');
		
		if(canShowSwissResidencePermit != null && canShowSwissResidencePermit.getJQ().find(':checked').val() == 'true'){
			canShowSwissResidencePermit.getJQ().find(':checked').trigger('change');
		}
		setTimeout(function(){ 
			PF('scanUploadDialog').initPosition(); 
		}, 1);
	},
	
	onShowDialog: function(dialogName) {
			var self = this;
			self._setDialogTitle(dialogName);
			JSON.parse($(self.scannedImageData).text() || '[]') ;
			var canShowSwissResidencePermit = PF('canShowSwissResidencePermit');
			
			if(canShowSwissResidencePermit != null && canShowSwissResidencePermit.getJQ().find(':checked').val() == 'true'){
				canShowSwissResidencePermit.getJQ().find(':checked').trigger('change');
			}
			setTimeout(function(){ 
				PF('scanUploadDialog').initPosition(); 
			}, 1);
		},
	
	_setDialogTitle: function(dialogName){
		var self = this;
		var accountHolderLabel = $(self.AH_TAB_PANEL).text(), firstName = $(self.FIRST_NAME).val(), lastName = $(self.LAST_NAME).val();
		PF(dialogName).getJQ().find(".ui-dialog-title").text(accountHolderLabel + ': ' + firstName + ' ' + lastName);
	},
	
	


	
	onHideDialog: function() {
		var self = this;
		self._updateDossierTitle();
	},
	
	validateBeforeProceed: function() {
		var self = this;
		var isSelected = !$(self.SELECT_ID_TYPE).find('option').eq(0).is(':selected');
		return isSelected;
	},

    startScanProcess: function(name) {
    	var self = this;
    	Fintech.ScanServices.callScan = function(){
    		if(!self.validateBeforeProceed()){
            	return;
            };
            PF('scannerStatusDialog').show();
            
            Fintech.ScanServices.scanDocument(name, self.showScannedImages, '', self.handlePassScannedValueToAccountHolder);
			
		}; 
		Fintech.ScanServices.callScan();
        
    },
    
    finishGetDataFromCumulusPro: function() {
    	var self = this;
    	self._updateDossierTitle();
    	if(PF('isValidId') != null){
    		PF('isValidId').getJQ().find(':checked').trigger('change');
    	}
    },
    

    _updateDossierTitle : function() {
		var self = this;
		var firstName = $(self.FIRST_NAME).val();
		var lastName = $(self.LAST_NAME).val();
		if ($(".accountHolder-1.1.navigator-tabs.active").length != 0) {
			var dossierTitle = self._getDossierTitle(firstName, lastName);
			$(self.DOSSIER_TITLE).html(dossierTitle);
		}
    },    
    
    
    showScannedImages: function(imagesBase64Array) {
    	var self = this;
    	
        var $scanPicturesContainerSelector = $(Fintech.UploadScanPopup.SCAN_PICTURES_CONTAINER);
        $scanPicturesContainerSelector.empty();
        $scanPicturesContainerSelector.append('<ul class="identification-verification-pictures"></ul>');
        
        var scanPicturesContainer = $('.scanned-image .identification-verification-pictures');
        var totalImage = imagesBase64Array.length;
        scanPicturesContainer.not('ul:first').remove();
        for (var i = 0; i < totalImage; i++) {
            var image = new Image();
            image.src = 'data:image/png;base64,' + imagesBase64Array[i];
            
            scanPicturesContainer.append('<li class="identification-verification image-index-' + i + '"></li>');
            var scannedImageContainer = $(".identification-verification.image-index-" + i);
            scannedImageContainer.append(Fintech.UploadScanPopup._getImageSizeRatio(image));
        }
        PF('scannerStatusDialog').hide();
        PF('scanUploadDialog').initPosition();
    }, 
    handlePassScannedValueToAccountHolder : function(imagesJson) {
        var self = Fintech.UploadScanPopup;
        var scanIdType = $(self.SELECT_ID_TYPE).find(':selected').val();

        passScannedValueToAccountHolder([ {
            name : 'scannedData',
            value : imagesJson
        } ]);
    },
    
    
    _getImageSizeRatio: function(image){
        var self = this;
        image.onload = function(){
            var ratio = self.DEFAULT_IMAGE_WIDTH/image.width;
            image.height *=ratio;
            image.width = self.DEFAULT_IMAGE_WIDTH;
        };
        return image;
    },
    
    setErrorStateForIdentificationTab : function(isValidId){
    	var self = this;
		if (isValidId == "false"){
			PF('isValidId').getJQ().find(':checked').trigger('change');
		}
    },
	
	onCompleteScan: function(){
		this._setDialogTitle('scanUploadDialog');
		PF('scanUploadDialog').initPosition(); 
	},
	
	onCompleteUpload: function(){
		this._setDialogTitle('scanUploadDialog');
		PF('scanUploadDialog').initPosition(); 
	},
	
	closeDialog: function(){
		if($(Fintech.UploadScanPopup.SCANNED_PANEL).find('li').length > 0) {
	    	 PF('confirmCancelDialog').show();
	     }else{
	    	 $(PF('confirmCancelDialog').getJQ().find('button:contains("Yes")')).trigger('click');
	     }
	},
	

	_getDossierTitle : function(_firstName, _lastName) {
		if (_firstName == EMPTY_STRING && _lastName == EMPTY_STRING) {
			return Fintech.DataGathering.message.createNewDossierLabel;
		} else {
			var _dossierTitle = Fintech.DataGathering.message.dossierTitle;
			if (_firstName != EMPTY_STRING) {
				_dossierTitle = _dossierTitle + ' ' + _firstName.trim();
			}
			if (_lastName != EMPTY_STRING) {
				_dossierTitle = _dossierTitle + ' ' + _lastName.trim();
			}
			return _dossierTitle;
		}
	},
	showOrHideSpinner:function(idSpinner, displayType){
		$('#'+idSpinner).css('display', displayType);
	}
};