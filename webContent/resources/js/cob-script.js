var Fintech = Fintech || {};
Fintech.Acrevis = Fintech.Acrevis || {};
Fintech.Acrevis.ClientOnBoarding = Fintech.Acrevis.ClientOnBoarding || {};
Fintech.Acrevis.ClientOnBoarding = {
	showErrorMessageMaestroCard : function(indexesOfInvalidMaestroCardProducts) {
		var indexs = indexesOfInvalidMaestroCardProducts.split(',');
		var maestroCardProductsCheckboxes = $('.maestroCardProductsCheckbox');
		maestroCardProductsCheckboxes.find('.ui-helper-hidden-accessible').next().removeClass('ui-state-error');
		maestroCardProductsCheckboxes.find('.ui-helper-hidden-accessible').next().addClass('ui-state-default');

		for (var i = 0; i < indexs.length; i++) {
			var id = indexs[i];
			if (id !== '' && !isNaN(id)) {
				var maestroCardProductsCheckbox = maestroCardProductsCheckboxes.eq(id);
				maestroCardProductsCheckbox.find('.ui-helper-hidden-accessible').next().removeClass('ui-state-default');
				maestroCardProductsCheckbox.find('.ui-helper-hidden-accessible').next().addClass('ui-state-error');
			}
		}
	},

	showErrorMessageShippingInstruction : function(indexesOfInvalidShippingInstructions) {
		var cob = Fintech.Acrevis.ClientOnBoarding;
		var indexs = indexesOfInvalidShippingInstructions.split(',');
		var maestroCardShippingInstructions = $('.maestroCardShippingInstruction');
		cob._resetItemDefaultState(maestroCardShippingInstructions);
		for (var i = 0; i < indexs.length; i++) {
			var id = indexs[i];
			if (id !== '' && !isNaN(id)) {
				var maestroCardShippingInstruction = maestroCardShippingInstructions.eq(id);
				cob._makeItemErrorState(maestroCardShippingInstruction);
			}
		}
		$("[id$='additionalMaestroCard_label']").removeClass('ui-state-error');
	},

	handleMandatoryMaestroCardLimitation : function(indexesOfLimitation) {
		var cob = Fintech.Acrevis.ClientOnBoarding;
		var indexs = indexesOfLimitation.split(',');
		var limitations = $('.maestroCardLimitation');
		cob._resetItemDefaultState(limitations);
		for (var i = 0; i < indexs.length; i++) {
			var id = indexs[i];
			if (id !== '' && !isNaN(id)) {
				var limitation = limitations.eq(id);
				cob._makeItemErrorState(limitation);
			}
		}
		$("[id$='limit_label']").removeClass('ui-state-error');
	},

	showErrorMessageShippingInstructionForPaying: function(indexesOfInvalidShippingInstructions) {
		var cob = Fintech.Acrevis.ClientOnBoarding;
		var indexs = indexesOfInvalidShippingInstructions.split(',');
		var payingShippingInstructions = $('.payingShippingInstruction');
		cob._resetItemDefaultState(payingShippingInstructions);
		for (var i = 0; i < indexs.length; i++) {
			var id = indexs[i];
			if (id !== '' && !isNaN(id)) {
				var payingShippingInstruction = payingShippingInstructions.eq(id);
				cob._makeItemErrorState(payingShippingInstruction);
			}
		}
		$("[id$='shippingInstructions_label']").removeClass('ui-state-error');
	},

	addOnChangeLisenerToAllMaestroCardRadio: function() {
		$("input[id$='isMastroCardValid_input']").change();
	},
	
	addOnChangeLisenerToAllPayingMaestroCardRadio: function() {
		$("input[id$='isPayingMastroCardValid_input']").change();
	},

	replaceLineBreakForJointAccountDocumentTab: function(fullNameAh1, fullNameAh2) {
		var regrexPattern = "(" + fullNameAh1 + ")(.*)(" + fullNameAh2 + ")";
		var regrex = new RegExp(regrexPattern);
		var belongsTos = $('.DocumentTab .documentMainContent tr td.ft-doc-belongs-to-col span');
		for (var i = 0; i < belongsTos.length; i++) {
			var belongsTo = belongsTos.eq(i);
			var match = regrex.exec(belongsTo.html());
			if (match) {
				var replace = match[1] + "<br/>" + match[3];
				belongsTo.html(replace);
			}
		}
	},
	handleResetValueOfMaestroCardItem: function(textSelect) {
		$("[id$='payingDetailsContainer'] li[class='ui-datalist-item']").remove();
		$("[id$='shippingInstructionsInputGroup'] label[id$='maestro_label']").html(textSelect);
		$("[id$='payingDetailsContainer'] select[id$='maestro_input']").val('');
	},
	disableInvestTab: function() {
		$("[id$='productTabView'] [role='tab']").eq(1).addClass("ui-state-disabled");
	},

	_resetItemDefaultState: function(item) {
		item.find('.ui-helper-hidden-accessible').next().removeClass('ui-state-error');
		item.find('.ui-helper-hidden-accessible').next().addClass('ui-state-default');
		item.addClass('ui-state-default');
		item.removeClass('ui-state-error');
	},

	_makeItemErrorState: function(item) {
		item.removeClass('ui-state-default');
		item.addClass('ui-state-error');
		item.find('.ui-helper-hidden-accessible').next().removeClass('ui-state-default');
		item.find('.ui-helper-hidden-accessible').next().addClass('ui-state-error');
	},
};
