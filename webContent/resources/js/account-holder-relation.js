;var Fintech = Fintech || {};

Fintech.Component = Fintech.Component || {};

Fintech.Component.AccountHolderRelation = Fintech.Component.AccountHolderRelation || {

	showImageInDiv: function(imagesDiv, imageInBase64, imageIndex) {
		var image = new Image();
		image.src = 'data:image/png;base64,' + imageInBase64;
		image.className = 'poa-scanned-image';
		imagesDiv.append('<li class="scanned-image-item image-item-' + imageIndex + '"></li>')
		var scannedImageContainer = $(".scanned-image-item.image-item-" + imageIndex);
		scannedImageContainer.append(image);
	},

	showScannedImages: function(imagesBase64Array, imagesDivClassName) {
		var self = Fintech.Component.AccountHolderRelation;
		var scannedPicturesContainerDiv = $("." + imagesDivClassName);
		if (imagesBase64Array.length != 0) {
			scannedPicturesContainerDiv.empty();
		}
		scannedPicturesContainerDiv.append('<ul class="scanned-images-list"></ul>');
		var scannedPicturesContainer = $(".scanned-images-list");
		for (var i =0; i < imagesBase64Array.length; i++) {
			self.showImageInDiv(scannedPicturesContainer, imagesBase64Array[i], i);
		}
	},

	scannedDocumentSaveBeanHandler: function(imagesJson) {
		passScannedDocumentValueToBean([ {
			name : 'scannedData',
			value : imagesJson
		} ]);
	},

	scannedIdSaveBeanHandler: function(imagesJson) {
		passScannedIdValueToBean([ {
			name : 'scannedData',
			value : imagesJson
		} ]);
	},

	clearScanImages: function(imagesDivClassName) {
		var scanPicturesContainor = $("." + imagesDivClassName);
		scanPicturesContainor.empty();
	}
};