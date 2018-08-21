var Fintech = Fintech || {};

var EMPTY_STRING = "";
Fintech.TaxResidency = Fintech.TaxResidency || 
{
	taxResidencyCountrySelector: 'input[id$=":taxResidencyCountry"]',
	taxIdentificationNumberSelector: 'input[id$=":taxIdentificationNumber"]',
	
	prepareListenerForUpdateTaxResidencyNavigatorTitle: function() {
		var self = this;
		$('#wrapper').on('change focusout', self.taxResidencyCountrySelector, function(){
			Fintech.TaxResidency._updateTaxResidencyCountryNavigatorTitle($(this));
		});
		$('#wrapper').on('change', self.taxIdentificationNumberSelector, function(){
			Fintech.TaxResidency._updateTaxIdentificationNumberNavigatorTitle($(this));
		});
	},
	

	_updateTaxIdentificationNumberNavigatorTitle : function(element) {
		var taxIdentificationNumber = element.parents('.component-wrapper').find('[id$=taxIdentificationNumber]').val();
		element.parents('.aia-questions-wrapper').find('.navigator-tabs.active').find("label:eq(1)").html(taxIdentificationNumber);
	},

	_updateTaxResidencyCountryNavigatorTitle : function(element) {
		var content = EMPTY_STRING;
		var taxResidencyCountry = element.parents('.component-wrapper').find('[id$=taxResidencyCountry]').val();
		var countryNavigatorTitleElement = element.parents('.aia-questions-wrapper').find('.navigator-tabs.active').find("label:eq(0)");
		if (taxResidencyCountry == EMPTY_STRING) {
			content = element.parents('.aia-questions-wrapper').find('.defaultUnnamedClass').html();
			countryNavigatorTitleElement.html(content);
		}
		else if(taxResidencyCountry != element.parents('.aia-questions-wrapper').find('.navigator-tabs.active').find("label:eq(0)").text()) {
			content = taxResidencyCountry;
			countryNavigatorTitleElement.html(content);
		}
	},
	
	resetTaxIdentificationNumberNavigatorTitle : function(id) {
		var $element = $('[id$=":'+ id + '"]');
		$element.parents('.aia-questions-wrapper').find('.navigator-tabs.active').find("label:eq(1)").html(EMPTY_STRING);
	}
}

$(function() {
	Fintech.TaxResidency.prepareListenerForUpdateTaxResidencyNavigatorTitle();	
});