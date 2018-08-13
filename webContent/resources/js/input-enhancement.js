var Fintech = Fintech || {};
var zipCities = zipCities || [];

Fintech.InputEnhancement = Fintech.InputEnhancement || {
	applyZipCityAutocomplete : function(tabName, idField) {
		var self = Fintech.InputEnhancement;
		var zipCodeElement = self._getInputId(tabName, idField);
		var cityElement = self._getInputId(tabName, "addressCity");
		$(zipCodeElement).first().autocomplete({
			source : function(request, response) {
			    var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term.replace("_","")), "i");
			    response($.grep(zipCities, function(value) {
			      return matcher.test(value);
			    }));
			},
			minLength : 3,
			autoFocus : true,
			select : function(event, ui) {
				var selectValue = ui.item.value;
				var zip = selectValue.substr(0, selectValue.indexOf(' '));
				var city = selectValue.substr(selectValue.indexOf(' ') + 1);
				$(zipCodeElement).first().val(zip).change();
				$(cityElement).first().val(city).change();
			}
		});
	},

	removeZipCityAutocomplete : function(tabName, idField) {
		var self = Fintech.InputEnhancement;
		var zipCodeElement = self._getInputId(tabName, idField);
		$(zipCodeElement).first().autocomplete({
			source : []
		});
	},	
	 	applyAutocomplete: function (id, data) {
	        var cityElement = "input[id$='" + id + "']";
	        $(cityElement).first().autocomplete({
	            source: data,
	            minLength: 2,
	            autoFocus: true,
	            select: function (event, ui) {
	                $(cityElement).first().val(ui.item.value).change();
	            }
	        });
	    },	
	    
	    applyCityAutocomplete: function (id) {
	    	var self = Fintech.InputEnhancement;
	    	self.applyAutocomplete(id, this.cities)
	    },	    
	   
	    applyHometownAutocomplete: function (id) {
	    	var self = Fintech.InputEnhancement;
	    	self.applyAutocomplete(id, this.hometowns)
	    },    
	    removeCityAutocomplete: function (id) {
	        var cityElement = "input[id$='" + id + "']";
	        $(cityElement).first().autocomplete({
	            source: []
	        });
	    },

	    setCities: function (cities) {
	        this.cities = cities;
	    },
	    setHometowns: function (hometowns) {
	        this.hometowns = hometowns;
	    },

	applyInputMaskByTabNameAndFieldId: function(format, tabName, idField) {
		var self = Fintech.InputEnhancement;
		var zipCodeElement = self._getInputId(tabName, idField);
		$(zipCodeElement).first().inputmask(format);
	},

	applyInputMask: function(format, cssField) {
		$("." + cssField).inputmask(format);
	},

	applyMultipleInputMask: function(formats, idField) {
		var formatList = [];
		if (formats) {
			formatList = formats.split(',');			
		}
		$("input[id*='" + idField + "']").each(function() {
			$(this).on("input", function () {
				var start = this.selectionStart,
		        	end = this.selectionEnd;
				$(this).inputmask({ mask: function () {
					return formatList; 
				}});
				this.setSelectionRange(start, end);
			});
			$(this).on("focus", function () {
				var start = this.selectionStart,
		        	end = this.selectionEnd;
				$(this).inputmask({ mask: function () {
					return formatList; 
				}});
				this.setSelectionRange(start, end);
			});
			$(this).bind("blur", function() {
                $(this).change();
            });
		});
	},

	_getInputId : function(tabName, idField) {
		var inputId;
		if(tabName == "accountHolderTabView") {
			inputId = "input[id*='" + tabName + "'][id*='" + idField + "']:not([id*='addressInCorrespondence']):not([id*='addressInOccupation'])";
		} else {
			inputId = "input[id*='" + tabName + "'][id*='" + idField + "']";
		}
		return inputId;
	},
	disabledElement:function(element,componentId){
		$(''+element+'[id$="'+ componentId +'"]').attr("disabled", true).addClass('ui-state-disabled');		
	}	
};