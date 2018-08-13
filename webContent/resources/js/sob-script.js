$(document).ready(function() {
	Fintech.Acrevis.SelfOnBoarding.bindGenderSelectionStatusSynchronization();
	Fintech.Acrevis.SelfOnBoarding.handleChangeNameOnCard();
	Fintech.Acrevis.SelfOnBoarding.activateConfirmationOnExit();
	Fintech.Acrevis.SelfOnBoarding.initZipCodeHandlers();
	Fintech.Acrevis.SelfOnBoarding.initDobHanlers();
	Fintech.Acrevis.SelfOnBoarding.closeToolTipOnMouseClick();
	Fintech.Acrevis.SelfOnBoarding.SelectOneMenu.highlightWrapper();
});
var Fintech = Fintech || {};
Fintech.Acrevis = Fintech.Acrevis || {};
Fintech.Acrevis.SelfOnBoarding = Fintech.Acrevis.SelfOnBoarding || {};

var AcrevisNavigatorStepIndicator = {
		PERSONAL_DATA: 0,
		ADDRESS_DATA: 1,
		PRODUCT: 2,
		OPTION: 3,
		TAX_ISSUE: 4,
		VIDEO_IDENTIFICATION: 5
};

Fintech.Acrevis.SelfOnBoarding = {
    activateConfirmationOnExit: function() {
    	var myEvent = window.attachEvent || window.addEventListener;
    	var $sob = Fintech.Acrevis.SelfOnBoarding;
    	var chkevent = window.attachEvent ? 'onbeforeunload' : 'beforeunload'; /// make IE7, IE8 compitable
    		myEvent(chkevent, $sob._showExitConfirmationDialog);
    },
    deactivateConfirmationOnExit: function() {
    	var $sob = Fintech.Acrevis.SelfOnBoarding;
    	var myEvent = window.detachEvent || window.removeEventListener;
    	var chkevent = window.detachEvent ? 'onbeforeunload' : 'beforeunload'; /// make IE7, IE8 compitable
    		myEvent(chkevent, $sob._showExitConfirmationDialog);
    },
    _showExitConfirmationDialog:  function(e) { // For >=IE7, Chrome, Firefox
	    var confirmationMessage = $('[id$=closingBrowserMsg]').html();
	    (e || window.event).returnValue = confirmationMessage;
	    return confirmationMessage;
	},
	_syncGenderSelectionStatus: function(input) {
		var id = $(input).attr('id');
		var radio = $(input).parent().next('.ui-radiobutton-box');
		var label = $('[for="' + id + '"]');
		if ($(input).is(':checked')) {
			label.addClass('ui-state-active');
		} else {
			label.removeClass('ui-state-active');
		}
	},
	syncAllGenderSelections: function() {
		var $sob = Fintech.Acrevis.SelfOnBoarding;
		var inputs = $('.ui-gender-selection .ui-helper-hidden-accessible input');
		inputs.each(function(index, input) {
			$sob._syncGenderSelectionStatus(input);
		});
	},
	bindGenderSelectionStatusSynchronization: function() {
		var $sob = Fintech.Acrevis.SelfOnBoarding;
		$sob.syncAllGenderSelections();
	},
	handleShowingNumbpadForInputNumber: function(){
		var numberInputs = document.getElementsByClassName('number');
		var i;
		for (i = 0; i < numberInputs.length; i++) {
			numberInputs[i].type = 'tel';
		}
		var childNumberInputs = document.querySelectorAll('.number input:not([type=hidden])');
		for (i = 0; i < childNumberInputs.length; i++) {
			childNumberInputs[i].type = 'tel';
		}
	},
	handleFocusOnFirstError: function(){
		var container = $('.left-content').filter(':visible');
		if(container.find('.ui-state-error').filter(':not(label)').filter(':visible').length > 0){
			var firstError = $('.ui-state-error').filter(':not(label)').filter(':visible').first();
			container.scrollTop(
				firstError.offset().top - container.offset().top + container.scrollTop() - this.inputPaddingTop
			);
			setTimeout(function(){firstError.trigger('focus');}, 250);
		}
	},
	handleChangeNameOnCard: function(){
		$(document).on('keyup', '.name input', function(){
			var firstname = $('.first-name input').val();
			var lastname = $('.last-name input').val();
			$('.sob-name-on-card div.ui-outputpanel span').text(firstname + " " + lastname);
			$('.sob-name-on-card div.ui-outputpanel span').attr('title', firstname + " " + lastname);
		});
	},
	scrollTop: function(){
		var container = $('.left-content').filter(':visible');
		if(container.find('.ui-state-error').filter(':not(label)').filter(':visible').length == 0){
			document.body.scrollTop = document.documentElement.scrollTop = 0;
		}
	},
	closeToolTipOnMouseClick: function() {

		$('.ui-tooltip').click(function() {
	        $(this).hide();
	    });

		$('.sob-flow').click(function() {
			if ($('.ui-tooltip').css('display') == 'block') {
				$('.ui-tooltip').hide();
			}
	    });
    },
    initZipCodeHandlers : function(){
    	//keypress will be fired when input from keyboard is not displayed yet
    	$(document).on('keypress', '[id$=addressZipCode]', function(e) {
    			var SelfOnBoarding = Fintech.Acrevis.SelfOnBoarding;
    			var inputLength = $(this).val().length;
    			if(!SelfOnBoarding._isNumber(e)){
    				return false;
    			}
    			var keyCode = e.keyCode || e.which;
    			if($(this)[0].selectionStart == $(this)[0].selectionEnd && inputLength == 4 && keyCode != 8 && keyCode != 9){
    				e.preventDefault();
    			}
    		})
    		.on('input', '[id$=addressZipCode]', function(e){
    			var inputLength = $(this).val().length;
    			if (inputLength == 4) {
    				return false;
    			}
    		});
    },
    initDobHanlers : function(){
    	//keypress will be fired when input from keyboard is not displayed yet
    	$(document).on('keypress', '.birthday:not(.year)', function(e) {
    			var SelfOnBoarding = Fintech.Acrevis.SelfOnBoarding;
    			if(!SelfOnBoarding._isNumber(e)){
    				return false;
    			}
    			var inputLength = $(this).val().length;
    			if ($(this)[0].selectionStart == $(this)[0].selectionEnd && inputLength == 2){
    				e.preventDefault();
    				if($(this).hasClass('day')){
    					$('.birthday.month')[0].selectionStart = $('.birthday.month').val().length;
    					$('.birthday.month').focus();  
    				} else if($(this).hasClass('month')){
    					$('.birthday.year input:first-child')[0].selectionStart = $('.birthday.year input:first-child').val().length;
    					$('.birthday.year input:first-child').focus();
    				}
    			}
    		})
    		.on('input', '.birthday:not(.year)', function(e){
    			var inputLength = $(this).val().length;
    			if (inputLength == 2) {
    				if($(this).hasClass('day')){
    					$('.birthday.month')[0].selectionStart = $('.birthday.month').val().length;
    					/*$('.birthday.month').focus(); */
    					$(this).closest('.dob').find('.month').focus();
    				} else if($(this).hasClass('month')){
    					$('.birthday.year input:first-child')[0].selectionStart = $('.birthday.year input:first-child').val().length;
    					/*$('.birthday.year input:first-child').focus();*/
    					$(this).closest('.dob').find('.year input').focus();
    				}
    			}
    		});
    },
    _isNumber : function(evt) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    },
    
    showOverLayLightBox : function(){
    	PF('OverlayLightBoxDialogVar').show();
    },
    
    setDisplayNoneForError : function(element){
		$(element).css("display","none");
	},
	
	setDisplayBlockForError : function(element){
		$(element).css("display","block");
	},
	hideOptionTab : function(){
		var sobStep4 = $('.sob-step').get(AcrevisNavigatorStepIndicator.OPTION);
		$(sobStep4).addClass("hide-step");
		var sobStep5 = $('.sob-step').get(AcrevisNavigatorStepIndicator.TAX_ISSUE);
		var sobStep6 = $('.sob-step').get(AcrevisNavigatorStepIndicator.VIDEO_IDENTIFICATION);
		$(sobStep5).find("a .step-no .spacing-zero").html(acrevisSteps[AcrevisNavigatorStepIndicator.OPTION]);
		$(sobStep6).find("a .step-no .spacing-zero").html(acrevisSteps[AcrevisNavigatorStepIndicator.TAX_ISSUE]);
		var sobSteps = $('.sob-step');
		$.each(sobSteps, function(index, value) {
			$(value).removeClass("small-2");
			$(value).addClass("small-25");
		})
		
		
	},
	showOptionTab : function(){
		$($('.sob-step').get(AcrevisNavigatorStepIndicator.OPTION)).removeClass("hide-step");
		var sobStep5 = $('.sob-step').get(AcrevisNavigatorStepIndicator.TAX_ISSUE);
		var sobStep6 = $('.sob-step').get(AcrevisNavigatorStepIndicator.VIDEO_IDENTIFICATION);
		$(sobStep5).find("a .step-no .spacing-zero").html(acrevisSteps[AcrevisNavigatorStepIndicator.TAX_ISSUE]);
		$(sobStep6).find("a .step-no .spacing-zero").html(acrevisSteps[AcrevisNavigatorStepIndicator.VIDEO_IDENTIFICATION]);
		var sobSteps = $('.sob-step');
		$.each(sobSteps, function(index, value) {
			$(value).removeClass("small-25");
			$(value).addClass("small-2");
		})
	},
	hideDoubleBaseAddress: function(){
		$('.double-base-address').addClass("hide-step");
	},
	hideSingleBaseAddress: function(){
		$('.single-base-address').addClass("hide-step");
	},
	showDoubleBaseAddress: function(){
		$('.double-base-address').removeClass("hide-step");
	},
	showSingleBaseAddress: function(){
		$('.single-base-address').removeClass("hide-step");
	},
	focusOnTheFirstField: function(stepId){
		$("[id$="+stepId +"] input").first().focus();
	},
	focusOnTheFirstButton: function(stepId){
		$("[id$="+stepId +"] button").first().focus();
	}
	
};


var Fintech = ( function(my) {
	
	my.Acrevis.SelfOnBoarding.SelectOneMenu = (function() {
		
		var CONSTANT = {
				PASSTHROUGH_HIGH_LIGHT: '[highlight-background]',
				SOB_WRAPPER: '.sob-wrapper',
				PASSTHROUH_ITEM: 'highlight-items'
		};
		
		var _getWidgetVarById = function(id) {
		    for (var propertyName in PrimeFaces.widgets) {
		      if (PrimeFaces.widgets[propertyName] != null && PrimeFaces.widgets[propertyName].id === id) {
		        return PrimeFaces.widgets[propertyName];
		      }
		    }
		}
		
		var _getValueOfSelectOneMenu = function(elementId) {
			var value = "";
			var PFwidget = _getWidgetVarById(elementId);
			if(PFwidget) {
				value = PFwidget.getSelectedValue();
			}
			return value;
		}
		
		var _selectOneMenuHandling = function(selectId) {
			var HIGHLIGHT_CLASS = 'form__fullWidthBackground--blueLight';
			if(_getValueOfSelectOneMenu(selectId)) {
				$(this).addClass(HIGHLIGHT_CLASS);
			} else {
				$(this).removeClass(HIGHLIGHT_CLASS);
			}
		}
		
		return {
			highlightWrapper: function() {
				$(CONSTANT.PASSTHROUGH_HIGH_LIGHT).closest(CONSTANT.SOB_WRAPPER).off('change').on('change', function(event) {
					if( !$(event.target).is('select') ) return;
					if( !$(event.target).attr(CONSTANT.PASSTHROUH_ITEM) == '') return;
					
					var $highlight = $(event.target.closest(CONSTANT.PASSTHROUGH_HIGH_LIGHT)),
						selectId = event.target.id;
					_selectOneMenuHandling.call($highlight, selectId.slice(0, -6));
				})
			}
		};
	})();
	
	return my;
	
})(Fintech || {});
