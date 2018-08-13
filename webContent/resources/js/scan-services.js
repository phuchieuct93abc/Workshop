var Fintech = Fintech || {};

Fintech.ScanServices = Fintech.ScanServices || {

	POPUP_MESSAGE: {
		SENDING: 'scannerSendingMessageId',
		BUSY: 'scannerBusyMessageId',
		NOT_AVAILABLE: 'scannerNotAvailableMessageId',
		CURRENTLY_NOT_POSSIBLE: 'scannerNotPossibleMessageId',
		CANCEL: 'scannerCancelledMessageId',
		TECHNICAL_ERROR: 'scannerTechicalErrorMessageId',
		NOT_RUNNING: 'scannerNotRunningMessageId',
		COMPLETE: 'scannerCompleteMessageId'
	},

	SERVICE: {
		START_ID_SCAN: 'startIdScan',
		GET_ID_SCAN_STATUS: 'getIdScanStatus',
		GET_ID_SCAN_DOCUMENT: 'getIdScanDocument'
	},

	STATUS: {
		OK: 'OK',
		BUSY: 'BUSY',
		NOT_AVAILABLE: 'DEVICE_NOT_AVAILABLE',
		CURRENTLY_NOT_POSSIBLE: 'CURRENTLY_NOT_POSSIBLE',
		NOT_RUNNING: 'NOT_RUNNING',
		CANCELED: 'CANCELED',
		TECHNICAL_ERROR: 'TECHNICAL_ERROR'
	},

	GIF_LOADING_ON: true,
	GIF_LOADING_OFF: false,

	isCancelledByUser: false,
	WITH_CREDENTIALS: "withCredentials",
	VMAX_ADDRESS: "//localhost:49991/idscanner/",
	MAX_WAIT_MS: 600 * 1000,
	INTERVAL_MS: 3 * 1000,

	SCAN_NOTIFICATION_MESSAGE: "[id$='scanNotificationMessage']",
	LOADING_ICON: "[id$='loadingIcon']",
	RETRY_BUTTON: '[id$="retry_btn"]',
	CANCEL_BUTTON: '[id$="cancel_btn"]',
	OK_BUTTON: '[id$="ok_btn"]',

	_createCORSRequest: function (method, url) {
		var xhr = new XMLHttpRequest();
		if (Fintech.ScanServices.WITH_CREDENTIALS in xhr) {
			// Check if the XMLHttpRequest object has a "withCredentials" property.
			// "withCredentials" only exists on XMLHTTPRequest2 objects.
			xhr.open(method, url, false);
		} else if (typeof XDomainRequest != "undefined") {
			// Otherwise, check if XDomainRequest.
			// XDomainRequest only exists in IE, and is IE's way of making CORS requests.
			xhr = new XDomainRequest();
			xhr.open(method, url, false);
		} else {
			// Otherwise, CORS is not supported by the browser.
			xhr = null;
		}
		return xhr;
	},

	_callVMax: function(url) {

		var self = this;
		url = url + "?_=" + self._getCurrentTime();
		var xhr = self._createCORSRequest('GET', url);

		if (!xhr) {
			throw new Error('CORS not supported');
		}
		var result;
		xhr.onload = function() {
			result = xhr.responseText;
		};

		xhr.onerror = function() {
			console.log('Woops, there was an error making the request.');
		};
		try {
			xhr.send();
		} catch (err) {
			console.log('error sending data: ' + err);
		}
		return result;
	},

	onStart : function() {
		var self = this;
		self.scanDocument("#{ivy.cms.co('/ch/axonivy/fintech/individual_ch/Message/idVerification/scanAppointmentCertificate')}",
				Fintech.Component.AccountHolderRelation.showScannedImages,
				'scanned-document-images',
				Fintech.Component.AccountHolderRelation.scannedDocumentSaveBeanHandler);
	},
	
	scanDocument : function(jobName, showScannedImagesHandler, imagesDivClassName, serverBackupHandler) {
		var self = this;
		self._displayPopupContent(self.POPUP_MESSAGE.SENDING, self.GIF_LOADING_ON);

		var startStatus = self.startScan(jobName);
		var startTime = self._getCurrentTime();

		if (startStatus != self.STATUS.OK) {
			self._displayCurrentStatus(startStatus || self.STATUS.NOT_AVAILABLE);
			return;
		} else {
			self._displayPopupContent(self.POPUP_MESSAGE.SENDING, self.GIF_LOADING_ON);
		}

		var scanStatus = this.getStatus();
		self._next(scanStatus, startTime, showScannedImagesHandler, imagesDivClassName, serverBackupHandler);
	},

	startScan: function(jobname) {
		var self = this;
		var params = self._getStartIdScanParams(jobname);
		return self._getValueFromKeyByParsingXml(self._callVMax(self.VMAX_ADDRESS + self.SERVICE.START_ID_SCAN + '?'
				+ params), key = 'StartIdScanStatus');
	},

	getStatus: function() {
		var self = this;
		return self._getValueFromKeyByParsingXml(self._callVMax(self.VMAX_ADDRESS + self.SERVICE.GET_ID_SCAN_STATUS),
				key = 'IdScanStatus');
	},

	getDocument: function() {
		var self = this;
		return self._callVMax(self.VMAX_ADDRESS + self.SERVICE.GET_ID_SCAN_DOCUMENT);
	},

	onHideStatusDialog: function() {
		this.isCancelledByUser = true;
	},
	
	onShowStatusDialog: function() {
		this.isCancelledByUser = false;
	},

	_displayCurrentStatus: function(status) {
		var self = this;
		switch (status) {
		case self.STATUS.CURRENTLY_NOT_POSSIBLE:
			self._displayPopupContent(self.POPUP_MESSAGE.CURRENTLY_NOT_POSSIBLE, self.GIF_LOADING_OFF, status);
			break;
		case self.STATUS.NOT_RUNNING:
			self._displayPopupContent(self.POPUP_MESSAGE.NOT_RUNNING, self.GIF_LOADING_OFF, status);
			break;
		case self.STATUS.CANCELED:
			self._displayPopupContent(self.POPUP_MESSAGE.CANCEL, self.GIF_LOADING_OFF, status);
			break;
		case self.STATUS.TECHNICAL_ERROR:
			self._displayPopupContent(self.POPUP_MESSAGE.TECHNICAL_ERROR, self.GIF_LOADING_OFF, status);
			break;
		case self.STATUS.NOT_AVAILABLE:
			self._displayPopupContent(self.POPUP_MESSAGE.NOT_AVAILABLE, self.GIF_LOADING_OFF, self.STATUS.NOT_AVAILABLE);
			break;
		case self.STATUS.BUSY:
		    self._displayPopupContent(self.POPUP_MESSAGE.NOT_AVAILABLE, self.GIF_LOADING_OFF, self.STATUS.NOT_AVAILABLE);
		    break;
		default:
			break;
		}
	},

	_displayPopupContent: function(contentSelector, isLoadingGif, status) {
		var self = this;
		$(self.SCAN_NOTIFICATION_MESSAGE).text($("#" + contentSelector).val());
		isLoadingGif ? $(self.LOADING_ICON).show() : $(self.LOADING_ICON).hide();
		$(self.OK_BUTTON).hide();
		$(self.CANCEL_BUTTON).hide();
		$(self.RETRY_BUTTON).hide();
		if (status == self.STATUS.OK) {
			$(self.OK_BUTTON).show();
		} else if (typeof status != 'undefined'
				&& status != self.STATUS.OK
				&& status != self.STATUS.BUSY) {
			$(self.CANCEL_BUTTON).show();
			$(self.RETRY_BUTTON).show();
		}
	},

	_getStartIdScanParams: function(jobname) {
		return $.param({
			displayName: jobname,
			source: 'FLATBED',
			fileType: 'JPG',
			singlePage: true,
			duplex: false
		});
	},

	_getCurrentTime: function() {
		var date = new Date();
		return date.getTime();
	},

	_getValueFromKeyByParsingXml: function(xml, key) {
		var xmlDoc = $.parseXML(xml);
		$xml = $(xmlDoc);
		return $xml.find(key).text();
	},

	_getXmlElementsByNode: function(xml, key) {
		var xmlDoc = $.parseXML(xml);
		$xml = $(xmlDoc);
		return $xml.find(key);
	},

	_next: function(scanStatus, startTime, showScannedImagesHandler, imagesDivClassName, serverBackupHandler) {
		var self = this;

		if (self.isCancelledByUser) {
			return;
		}

		if (scanStatus == self.STATUS.OK || this._getCurrentTime() - startTime > self.MAX_WAIT_MS) {
			var scannedData = this.getDocument();

			var images = self._getXmlElementsByNode(scannedData, "IdScanPage");

			var imagesBase64Array = [];
			if (images.length > 0) {
				images.each(function() {
					imagesBase64Array.push($(this).text());
				});
			}
			var imagesJson = '';
			if (imagesBase64Array.length > 0) {
				imagesJson = JSON.stringify(imagesBase64Array);
			}
			if (typeof serverBackupHandler == 'function') {
				serverBackupHandler(imagesJson);
			}

			if (typeof showScannedImagesHandler == 'function') {
				showScannedImagesHandler(imagesBase64Array, imagesDivClassName);
			}

			self._displayPopupContent(self.POPUP_MESSAGE.COMPLETE, self.GIF_LOADING_OFF, scanStatus);
			return;
		}

		setTimeout(function() {
			scanStatus = self.getStatus();
			if (scanStatus != self.STATUS.OK && scanStatus != self.STATUS.BUSY) {
				self._displayCurrentStatus(scanStatus);
				return;
			}
			self._next(scanStatus, startTime, showScannedImagesHandler, imagesDivClassName, serverBackupHandler);
		}, self.INTERVAL_MS);
	},

	callScan: {}
};