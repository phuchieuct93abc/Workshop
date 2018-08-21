var Fintech = Fintech || {};
Fintech.DocumentComponent = Fintech.DocumentComponent || {};

Fintech.DocumentComponent.monitorDownloadDocument = function() {
	PrimeFaces.monitorDownload(null, updateDocumentListAfterDownload);
};