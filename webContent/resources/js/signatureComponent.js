function updateSignatureData() {
	var value = $("[id$='clientSignature_value']").val();
	if (value == '' || value == '{"lines":[]}') {
		console.log(value);
		$(".addSignature").addClass("noSignature");
	} else {
		console.log(value);
		$(".addSignature").removeClass("noSignature");
	}

};