Fintech.PhoneNumber = Fintech.PhoneNumber || {};

Fintech.PhoneNumber = {
	    PLUS_SIGN: 43,
	    PREFERRED_COUNTRIES: ['ch','li','de','fr','at','it'],
	    phoneUtil: libphonenumber.PhoneNumberUtil.getInstance(),
	    elementChangeRegionCode: null,
	    elementOnChangeId: null,
	    attachFlagDropDownList: function(options) {
	    	if(!options) {
	    		options = {};
	    	}
	    	_.defaults(options, {
	    		preferredCountries: Fintech.PhoneNumber.PREFERRED_COUNTRIES,
	    		setDefaultDialCode: false,
	    		autoPlaceholder: 'polite',
	    		customPlaceholder: null,
	    	});

	        $(".input-phone-number").each(function() {
	        	Fintech.PhoneNumber._setDefaultDialCode(this, options);
                Fintech.PhoneNumber._initIntlTelInput(this, options);
                Fintech.PhoneNumber._bindInputNumberEvent(this);
	            Fintech.PhoneNumber._formatPhoneNumber(this);
	            Fintech.PhoneNumber._initPfAjaxOnstart(this);
	        });
	        Fintech.PhoneNumber._bindChangeRegionCodeEvent();
	    },

	    bindInputEvent: function(selector) {
	    	console.warn("This method is deprecated. Call function attachFlagDropDownList will call this method");
	    },

	    showBlockForm: function(widgetVarOfBlockUi) {
	    	var widgetVar = widgetVarOfBlockUi;
	    	if(PF(widgetVar.toString())) {
    			PF(widgetVar.toString()).show();
    		}
	    },

	    hideBlockForm: function(widgetVarOfBlockUi) {
	    	var widgetVar = widgetVarOfBlockUi;
	    	if(PF(widgetVar.toString())) {
                PF(widgetVar.toString()).hide();
            }
	    },

	    formatNumberBeforeChange: function() {
	    	if (Fintech.PhoneNumber.elementOnChangeId) {
				var elementOnChange = $('[id$="' + Fintech.PhoneNumber.elementOnChangeId + '"]');
				Fintech.PhoneNumber._formatPhoneNumber(elementOnChange);
			}
	    },

	    /********************
	     *  PRIVATE METHODS
	     ********************/
	    _initIntlTelInput: function(selector, options) {
	    	var customPlaceHolder = Fintech.PhoneNumber._getCustomPlaceholder(options.customPlaceholder);
	    	$(selector).intlTelInput({
                autoHideDialCode: false,
                nationalMode: false,
                formatOnDisplay: false,
                preferredCountries: options.preferredCountries,
                autoPlaceholder: options.autoPlaceholder,
                customPlaceholder: customPlaceHolder,
            });
	    },

	    _setDefaultDialCode: function(selector, options) {
	    	if (options.setDefaultDialCode) {
            	var initVal = $(selector).val();
            	var defaultDialCode = Fintech.PhoneNumber._getDialCodeByCountryCode(options.preferredCountries[0]);
	            if (!initVal && defaultDialCode) {
            		$(selector).val(libphonenumber.PhoneNumberUtil.PLUS_SIGN + defaultDialCode);
            	}
            }
	    },

	    _bindInputNumberEvent: function(selector) {
	    	$(selector).on('keypress', function(e) {
                if (Fintech.PhoneNumber._isIgnoreKey(this, e)) {
                    e.preventDefault();
                    return false;
                }
	    	}).on('keyup', function(e){
                Fintech.PhoneNumber._autoReplaceFirstZeroToDialCode(this);
	    	}).on('focus', function(e){
            	Fintech.PhoneNumber.elementOnChangeId = $(this).attr('id');
	    	}).on('paste', function (e) {
                var pastedText = undefined;
                if (window.clipboardData && window.clipboardData.getData) {
                    pastedText = window.clipboardData.getData('Text');
                } else if (e.originalEvent && e.originalEvent.clipboardData) {
                    pastedText = e.originalEvent.clipboardData.getData('text/plain');
                }
                var patt = new RegExp(/[0-9 ]+/g);
                var res = patt.test(pastedText);
                if (!res) {
                	e.preventDefault();
                }
            });
	    },

	    _autoReplaceFirstZeroToDialCode: function(selector) {
	    	var dialCode = Fintech.PhoneNumber._getDialCode(selector);
	    	var phoneNumber = $(selector).val();
        	if (phoneNumber === '0' && dialCode){
        		phoneNumber = libphonenumber.PhoneNumberUtil.PLUS_SIGN + dialCode + ' ';
        		$(selector).val(phoneNumber);
        	}
	    },

	    _bindChangeRegionCodeEvent: function() {
	        $(".flag-container li").on("click", function() {
	        	if ($(this).hasClass('divider')) {
	        		return false;
	        	}
	            var flagContainer = $(this).parent().parent(".flag-container");
	            var bindingInputField = $(flagContainer).next("input");
	            var dialCode = Fintech.PhoneNumber._getDialCode(bindingInputField);
	            var oldDialCode = libphonenumber.PhoneNumberUtil.PLUS_SIGN + (dialCode || '');
	            var newDialCode = libphonenumber.PhoneNumberUtil.PLUS_SIGN + ($(this).attr('data-dial-code') || '');
	            if (oldDialCode != newDialCode ) {
	            	var currentValue = $(bindingInputField).val();
		            if (currentValue && !currentValue.startsWith(libphonenumber.PhoneNumberUtil.PLUS_SIGN)) {
		            	currentValue = libphonenumber.PhoneNumberUtil.PLUS_SIGN + currentValue;
		            };
		            currentValue = currentValue.replace(/\s/g, '').replace(oldDialCode, newDialCode) || newDialCode;

		            var newCountryCode = $(this).attr('data-country-code');
		            var formatter = Fintech.PhoneNumber._getFormatterFromCountryCode(newCountryCode);
			        var formattedPhoneNumber = Fintech.PhoneNumber._createFormattedPhoneNumber(currentValue, formatter);
		            $(bindingInputField).val(formattedPhoneNumber);

		            $(bindingInputField).change();
		            Fintech.PhoneNumber.showBlockForm('blockForm');
	            }
	            Fintech.PhoneNumber.elementChangeRegionCode = bindingInputField;
	        });
	    },

	    _initPfAjaxOnstart: function(element) {
	    	var onchangeFunction = $(element).attr('onchange');
            if (onchangeFunction) {
            	var hasOnstartFunction = onchangeFunction.indexOf('onst:function') != -1;
            	if (!hasOnstartFunction) {
            		onchangeFunction = onchangeFunction.replace('});', ',onst:function(cfg){Fintech.PhoneNumber.formatNumberBeforeChange();}});');
            	} else {
            		onchangeFunction = onchangeFunction.replace('onst:function(cfg){', 'onst:function(cfg){Fintech.PhoneNumber.formatNumberBeforeChange();');
            	}
            	$(element).attr('onchange',onchangeFunction);
            }
	    },

	    _formatPhoneNumber: function(element) {
	        var countryCode = Fintech.PhoneNumber._getCountryCode(element);
	        var formatter = Fintech.PhoneNumber._getFormatterFromCountryCode(countryCode);
	        var phoneNumber = $(element).val();
	        var formattedPhoneNumber = Fintech.PhoneNumber._createFormattedPhoneNumber(phoneNumber, formatter);
	        $(element).val(formattedPhoneNumber);

	        // Fix problem in IE (When we change the country cursor auto set position to begin).
	        if (Fintech.PhoneNumber.elementChangeRegionCode) {
	        	var elementChangeRegionCodeId = $(Fintech.PhoneNumber.elementChangeRegionCode).attr('id');
	        	var elementChangeRegionCode = $('[id="' + elementChangeRegionCodeId + '"]');
	        	$(elementChangeRegionCode).setSelection($(elementChangeRegionCode).val().length);
	        	Fintech.PhoneNumber.elementChangeRegionCode = null;
	        }
	        return phoneNumber.length === formattedPhoneNumber.length - 1 || phoneNumber.length === formattedPhoneNumber.length + 1;
	    },

	    _createFormattedPhoneNumber: function(phoneNumber, formatter) {
	    	var formattedPhoneNumber = "";
	        for (var i = 0, len = phoneNumber.length; i < len; i++) {
	            if (Fintech.PhoneNumber._isFormatCharacter(phoneNumber[i])) {
	                continue;
	            }
	            formattedPhoneNumber = formatter.inputDigit(phoneNumber[i]);
	        }
	        return formattedPhoneNumber;
	    },

	    _getFormatterFromCountryCode: function(countryCode) {
	    	var formatter;

            if (countryCode == undefined) {
                formatter = new libphonenumber.AsYouTypeFormatter("CH");
            } else {
                formatter = new libphonenumber.AsYouTypeFormatter(countryCode.toUpperCase());
            }
            return formatter;
	    },
	    
	    _getCountryCode: function(selector) {
	    	var selectedCountryData = Fintech.PhoneNumber._getSelectedCountryData(selector);
	        return selectedCountryData.iso2;
	    },

	    _getDialCode: function(selector) {
	    	var selectedCountryData = Fintech.PhoneNumber._getSelectedCountryData(selector);
	        return selectedCountryData.dialCode;
	    },

	    _getSelectedCountryData: function(selector) {
	    	return $(selector).intlTelInput("getSelectedCountryData");
	    },

	    _getDialCodeByCountryCode: function(defaultCountryCode) {
	    	var allCountries = $.fn['intlTelInput'].getCountryData();
	    	var defaultDialCode = '';
	    	for (var i = 0; i < allCountries.length; i++) {
	            var country = allCountries[i];
	            var countryCode = country.iso2;
	            if (countryCode === defaultCountryCode) {
	            	defaultDialCode = country.dialCode;
	            	break;
	            }
	        }
	    	return defaultDialCode;
	    },

	    _getCustomPlaceholder: function(customPlaceHolder) {
	    	var placeHolder = null;
	    	if ($.isFunction(customPlaceHolder)) {
	    		placeHolder = customPlaceHolder;
	    	} else if (customPlaceHolder === 'dialCode') {
	    		placeHolder = function(selectedCountryPlaceholder, selectedCountryData) {
                	if (selectedCountryData.dialCode) {
                		return libphonenumber.PhoneNumberUtil.PLUS_SIGN + selectedCountryData.dialCode;
                	}
                	return '';
            	}
	    	}
	    	return placeHolder;
	    },

	    _isArrowKey: function(e) {
	        var code = (e.keyCode || e.which);
	        if (code == 37 || code == 38 || code == 39 || code == 40) {
	            return true;
	        }
	        return false;
	    },
	    
	    _isPlusSign: function(evt) {
	        evt = (evt) ? evt : window.event;
	        var charCode = (evt.which) ? evt.which : evt.keyCode;
	        if (charCode == Fintech.PhoneNumber.PLUS_SIGN) {
	            return true;
	        }
	        return false;
	    },

	    _isDoublePlusSign: function (element, evt){
		     return element.value.indexOf('+') >= 0 && this._isPlusSign(evt);
	    },

	    _isFormatCharacter: function(formatChar) {
	        if (formatChar == ' ' || formatChar == '-' || formatChar == '(' || formatChar == ')' || formatChar == '/' || formatChar == "#") {
	            return true;
	        }
	        return false;
	    },

	    _isNumber: function(evt) {
	        evt = (evt) ? evt : window.event;
	        var charCode = (evt.which) ? evt.which : evt.keyCode;
	        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
	            return false;
	        }
	        return true;
	    },

	    _isIgnoreKey: function(element, evt) {
	    	var isDoublePlusSign = this._isDoublePlusSign(element, evt); 
	    	var isNotNumber = !this._isNumber(evt);
	    	var isNotPlusSign = !this._isPlusSign(evt);
	    	var isNotArrowKey = !this._isArrowKey(evt);
	    	
	        return isDoublePlusSign || (isNotNumber && isNotPlusSign && isNotArrowKey);
	    },

	    _isBackSpaceOnDialCode: function(elementValue, evt) {
	    	var keycode =  evt.keyCode ? evt.keyCode : evt.which;
	    	const BACKSPACE_KEY = 8;
        	if(keycode == BACKSPACE_KEY && elementValue.indexOf(" ") == -1 && elementValue.length <=4){ // longest international dial code is 4 character (incl "+")
        		return true;
            }
        	return false;
	    }
};