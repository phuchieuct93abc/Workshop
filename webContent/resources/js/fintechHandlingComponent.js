
var Fintech = Fintech || {};
Fintech.GuiFrameWork = Fintech.GuiFrameWork || {};
Fintech.GuiFrameWork.Autocomplete = Fintech.GuiFrameWork.Autocomplete || {}; 
Fintech.GuiFrameWork.Enums = Fintech.GuiFrameWork.Enums ||{};
Fintech.DocumentComponent = Fintech.DocumentComponent || {};
Fintech.DossierUtil = Fintech.DossierUtil || {};
Fintech.Statistic = Fintech.Statistic  || {};
/**
 * Fintech jsvascript object
 */

Fintech.GuiFrameWork = {
		fintechComponents : [],
		preventChange : false,
		/*
		 * Get Widget variable by elementId
		 * @param: id is elementId  
		 */
		getWidgetVarById: function(id) {
			 var $this = Fintech.GuiFrameWork;	
			 for (var propertyName in PrimeFaces.widgets) {
				  if($this._checkObjectExists(PrimeFaces.widgets[propertyName])){					  
					  if (PrimeFaces.widgets[propertyName].id === id) {						  
				    	  return PrimeFaces.widgets[propertyName];
				      }	
				  }
			      
			 }
		},
		
		addCssClass: function (id, cssClass){
	    	var qualifiedId = PrimeFaces.escapeClientId(id);
	    	$(qualifiedId).addClass(cssClass);
	    },
		_getComponentType: function(inputObj){
			var componentType = Fintech.GuiFrameWork.Enums.ComponentType.UNKNOWN;
			if(inputObj.hasClass(Fintech.GuiFrameWork.Enums.ComponentType.INPUT_TEXT)){
				componentType = Fintech.GuiFrameWork.Enums.ComponentType.INPUT_TEXT;
			} else if(inputObj.hasClass(Fintech.GuiFrameWork.Enums.ComponentType.INPUT_TEXTAREA)){
				componentType = Fintech.GuiFrameWork.Enums.ComponentType.INPUT_TEXTAREA;
			} else if(inputObj.hasClass(Fintech.GuiFrameWork.Enums.ComponentType.INPUT_NUMBER)){
				componentType = Fintech.GuiFrameWork.Enums.ComponentType.INPUT_NUMBER;
			}else if(inputObj.hasClass(Fintech.GuiFrameWork.Enums.ComponentType.SPINNER)){
				componentType = Fintech.GuiFrameWork.Enums.ComponentType.SPINNER;
			}else if(inputObj.hasClass(Fintech.GuiFrameWork.Enums.ComponentType.CALENDAR)){
				componentType = Fintech.GuiFrameWork.Enums.ComponentType.CALENDAR;
			}else if(inputObj.hasClass(Fintech.GuiFrameWork.Enums.ComponentType.SELECT_ONE_RADIO)){
				componentType = Fintech.GuiFrameWork.Enums.ComponentType.SELECT_ONE_RADIO;
			}else if(inputObj.hasClass(Fintech.GuiFrameWork.Enums.ComponentType.SELECT_ONE_MENU)){
				componentType = Fintech.GuiFrameWork.Enums.ComponentType.SELECT_ONE_MENU;
			}else if(inputObj.hasClass(Fintech.GuiFrameWork.Enums.ComponentType.CHECKBOX)){
				componentType = Fintech.GuiFrameWork.Enums.ComponentType.CHECKBOX;
			}else if(inputObj.hasClass(Fintech.GuiFrameWork.Enums.ComponentType.SELECT_MANY_CHECKBOX)){
				componentType = Fintech.GuiFrameWork.Enums.ComponentType.SELECT_MANY_CHECKBOX;
			}else if(inputObj.hasClass(Fintech.GuiFrameWork.Enums.ComponentType.TAB)){
				componentType = Fintech.GuiFrameWork.Enums.ComponentType.TAB;
			}else if(inputObj.hasClass(Fintech.GuiFrameWork.Enums.ComponentType.DATATABLE)){
				componentType = Fintech.GuiFrameWork.Enums.ComponentType.DATATABLE;
			}else if(inputObj.hasClass(Fintech.GuiFrameWork.Enums.ComponentType.UI_PANEL)){
				componentType = Fintech.GuiFrameWork.Enums.ComponentType.UI_PANEL;
			}else if(inputObj.hasClass(Fintech.GuiFrameWork.Enums.ComponentType.SELECT_CHECKBOX_MENU)){
				componentType = Fintech.GuiFrameWork.Enums.ComponentType.SELECT_CHECKBOX_MENU;
			}
			return componentType;
		},
		
		/*
		 * public
		 * Show the error message for input component and related labels
		 * @param: labelId is an array
		 */
		displayErrorMessage: function (componentId, labelIds, errorContent){
			var $this = Fintech.GuiFrameWork;
			var componentObject = $(PrimeFaces.escapeClientId(componentId));
			$this._setErrorStateForComponent(componentObject);
			labelIds.forEach(this._setErrorForLabel);

			var id_error = "div[data-target='"+componentId+"']"; 
			// set error message
			if ($(id_error).length > 0) {
				$(id_error)
						.addClass("ui-message ui-message-error ui-widget ui-corner-all").removeClass("ui-state-error");
				$(id_error).html(
						"<span class='ui-message-error-detail'>" + errorContent
								+ "</span>");
				$(id_error).show();				
			}
		},
		/*
		 * public
		 * Show the error message for input component and it's label
		 */
		displayErrorMessageForComponent: function (componentId, errorContent){
			var $this = Fintech.GuiFrameWork;
			var componentObject = $(PrimeFaces.escapeClientId(componentId));
			$this._setErrorStateForComponent(componentObject);
			$this._setErrorForLabelOfInputElement(componentId);
			
			var id_error = "div[data-target='"+componentId+"']"; 
			// set error message
			if ($(id_error).length > 0) {
				$(id_error)
						.addClass("ui-message ui-message-error ui-widget ui-corner-all").removeClass("ui-state-error");
				$(id_error).html(
						"<span class='ui-message-error-detail'>" + errorContent
								+ "</span>");
				$(id_error).show();				
			}
		},
		_setErrorStateForComponent:function($object){
			var $this = Fintech.GuiFrameWork;
			var componentType = $this._getComponentType($object);
			switch(componentType){
				case Fintech.GuiFrameWork.Enums.ComponentType.SELECT_ONE_RADIO:
					$object.find("div").each(function() {
						if ($(this).hasClass("ui-radiobutton-box")) {
							$(this).addClass("ui-state-error");
						}
					});
					break;
				case Fintech.GuiFrameWork.Enums.ComponentType.SPINNER:
					$object.addClass("ui-state-error");
					$object.find(".ui-spinner-button").addClass("ui-state-error");
					break;
				case Fintech.GuiFrameWork.Enums.ComponentType.SELECT_MANY_CHECKBOX:
					$object.find(".ui-chkbox-box").addClass("ui-state-error");
					break;
				case Fintech.GuiFrameWork.Enums.ComponentType.SELECT_CHECKBOX_MENU:
					$object.addClass("ui-state-error");
					$object.find("label").addClass("ui-state-error");
					$object.find("div").addClass("ui-state-error");
					$object.find('ul').addClass("ui-state-error");
					break;
				case Fintech.GuiFrameWork.Enums.ComponentType.CHECKBOX:
					$object.find(".ui-chkbox-box").addClass("ui-state-error");
					break;
				case Fintech.GuiFrameWork.Enums.ComponentType.SELECT_ONE_MENU:
					$object.addClass("ui-state-error");
					break;
				default:
					if ($object.find("input").first().length > 0) {			
						$object.find("input").first()
								.addClass("ui-state-error");
					} else {				
						$object.addClass("ui-state-error");
						
					}
					break;
			}
		},
		_setErrorForLabel:function (element, index, array){
			var label = "label[id*='"+element+"'][class*='ui-outputlabel']";
			// set error state for label
			if ($(label).length > 0) {
				$(label).addClass("ui-state-error");
			}
		},
		_setErrorForLabelOfInputElement: function (element){
			var label = "label[for*='"+element+"'][class*='ui-outputlabel']";
			// set error state for label
			if ($(label).length > 0) {
				$(label).addClass("ui-state-error");
			}
		},
		/*
		 * public
		 * Hide the error message of components
		 * @param: needToResetComponents is an array
		 */
		resetComponents: function (needToResetComponents) {
			needToResetComponents.forEach(this._resetElement);
		},
		_resetElement :function (element, index, array){
			var $this = Fintech.GuiFrameWork;
			var input = document.getElementById(element);
			$this._resetOneElement(input);
			$this._removeRelatedLabel(element);
			// Remove update related element
			//$this._updateRelatedComponent();
		},
		_removeRelatedLabel: function(element){
			var $this = Fintech.GuiFrameWork;
			var label;
			if ($(document.getElementById(element)).hasClass('ui-selectonemenu')) {
				label = $(document.querySelector("label[for='"+element+"_focus']"));
			} else if ($(document.getElementById(element)).hasClass('ui-inputnumber') 
					|| $(document.getElementById(element)).hasClass('ui-chkbox')
					|| $(document.getElementById(element)).hasClass('ui-calendar')) {
				label = $(document.querySelector("label[for='"+element+"_input']"))
			} else {
				label = $(document.querySelector("label[for='"+element+"']"));
			}
			label.each(function(){
				$this._resetOneElement(this);
			});
		},

		_checkObjectExists : function (obj){
			if(obj == null || typeof(obj) == 'undefined' || obj.length == 0) {
				return false;
			} else {
				return true;
			}
		},
		
		_resetOneElement: function (object){
			var $this = Fintech.GuiFrameWork;
			var $object = $(object);
			if(!$this._checkObjectExists(object)){
				return;
			}
			
			if ($object.hasClass("ui-selectonemenu")) {
				$object.removeClass("ui-state-error");
				$object.find("div").each(function() {
					if ($(this).hasClass("ui-selectonemenu-trigger")) {
						$(this).removeClass("ui-state-error");
					}
				});
				
				if ($object.find("label.ui-state-error").length > 0 ){
					$object.find("label.ui-state-error").removeClass("ui-state-error");
				}		
				
				// remove class in panel 
				var id = $object.attr("id");
				id = id+"_panel";
				var panel = $(document.getElementById(id)); // change jquery selector to js call to improve performance in IE
				if($this._checkObjectExists(panel)){
					if (panel.hasClass("ui-state-error")) {
						panel.removeClass("ui-state-error");
					}
				}
				
			} else if ($object.hasClass("ui-selectoneradio")) {
				$object.find("div").each(function() {
					if ($(this).hasClass("ui-radiobutton-box")) {
						$(this).removeClass("ui-state-error");
					}
				});
			} else if($object.hasClass("ui-scrollpanel") || $object.hasClass("ui-outputlabel")){
				$object.removeClass("ui-state-error");
			} else if($object.hasClass("ui-chkbox")){
				$object.find(".ui-chkbox-box").removeClass("ui-state-error");
			} else if($object.hasClass("ui-spinner")){
				$object.removeClass("ui-state-error");
				$object.find(".ui-state-error").removeClass("ui-state-error");
			} else if($object.hasClass("ui-selectmanycheckbox")){
				$object.removeClass("ui-state-error");
				$object.find(".ui-chkbox-box").removeClass("ui-state-error");
			} else if($object.hasClass("ui-selectcheckboxmenu")){
				$object.removeClass("ui-state-error");
				$object.find(".ui-state-error").removeClass("ui-state-error");
			}else {
				if ($object.find("input").first().length > 0) {			
					$object.find("input").first()
							.removeClass("ui-state-error");
				} else {				
					$object.removeClass("ui-state-error");
					
				}
			}
			
			// set error message
			if ($object.find(".ui-message-error").length > 0) {
				// //alert(id_error);
				$object.find(".ui-message-error").each(function(){
					$(this).removeClass('ui-message-error');
					$(this).html("");
				});
			}else if ($object.siblings('.ui-message-error').length > 0){
				$object.siblings(".ui-message-error").each(function(){
					$(this).removeClass('ui-message-error');
					$(this).html("");
				});
			}
		},
		/*
		 * public
		 * update labels
		 * @param: beAddedAsteriskLabelIds is an array
		 * @param: beRemovedAsteriskLabelIds is an array
		 */
		updateLabels :function (beAddedAsteriskLabelIds, beRemovedAsteriskLabelIds) {
			this._removeAsteriskFromLabels(beRemovedAsteriskLabelIds);
			this._addAsteriskToLabels(beAddedAsteriskLabelIds);
		},

		_removeAsteriskFromLabels :function (labelIds) {
			labelIds.forEach(this._removeAsteriskFromLabel);
		},

		_removeAsteriskFromLabel: function (element, index, array){
			var asterisk = $("label[id*='"+element+"'][class*='ui-outputlabel']>span[class='ui-outputlabel-rfi']");
			asterisk.remove();		
		},

		_addAsteriskToLabels: function (labelIds) {
			labelIds.forEach(this._addAsteriskToLabel);
		},

		_addAsteriskToLabel : function (element, index, array){
			var $this = Fintech.GuiFrameWork;
			var asterisk = $("label[id$='"+element+"_label'][class*='ui-outputlabel']>span[class='ui-outputlabel-rfi']");
			if(!$this._checkObjectExists(asterisk)){
				var label = $("label[id$='"+element+"_label'][class*='ui-outputlabel']");
				var asteriskHTML = "<span class='ui-outputlabel-rfi'>*</span>";
				label.append(asteriskHTML);
			}
		},
	
		handleReadOnlyAttribute: function(readOnlyComponentIds, editableComponentIds){			
			this._enableEditableComponentIds(editableComponentIds);
			this._enableReadOnlyComponentIds(readOnlyComponentIds);
		}, 
		
		_enableEditableComponentIds : function (editableComponentIds){
			editableComponentIds.forEach(this._editableComponentId);
		},
		
		_enableReadOnlyComponentIds : function (beReadOnlyComponentIds){
			beReadOnlyComponentIds.forEach(this._readOnlyComponentId);
		},


		_editableComponentId: function (element, index, array){
			var $this = Fintech.GuiFrameWork;
			var inputObj = $(document.getElementById(element)); // change jquery selector to js call to improve performance in IE
			var widgetVarObj = $this.getWidgetVarById(element);
			
			var makeSpinnerEditable = makeSpinnerEditableImpl;
			
			if(!$this._checkObjectExists(inputObj) || !$this._checkObjectExists(widgetVarObj)){
				return;
			} else if(inputObj.hasClass(Fintech.GuiFrameWork.Enums.Constant.GF_STATE_EDITABLE)){
				return;
			} else if(inputObj.hasClass("ui-inputtext") ||  inputObj.hasClass('ui-inputtextarea')) {				
				inputObj.prop("readonly", false);				
				if (inputObj.hasClass('ui-state-disabled')){
					inputObj.removeClass('ui-state-disabled');
				}
			}else if (inputObj.hasClass('ui-inputnumber')){
				if(widgetVarObj.inputExternal != null){
					if (widgetVarObj.inputExternal.attr('readonly') !== undefined) {
						widgetVarObj.inputExternal.removeAttr( "readonly" )
					} 
					widgetVarObj.inputExternal.attr( "aria-readonly", false);					
				}
				
				if (inputObj.hasClass('ui-state-disabled')){
					inputObj.removeClass('ui-state-disabled');
				}
			}else if (inputObj.hasClass('ui-spinner')){
				makeSpinnerEditable(widgetVarObj);							
			}else if (inputObj.hasClass('ui-calendar') && !inputObj.hasClass('notShowPopup')){				
				widgetVarObj.input.focus(function(){					
					 setTimeout(function() {
						 $('.ui-datepicker').show();
		             }, 1);				    
				});
				if (widgetVarObj.input.attr('readonly') !== undefined) {
					widgetVarObj.input.removeAttr( "readonly" )
				}
				if (inputObj.hasClass('ui-state-disabled')){
					inputObj.removeClass('ui-state-disabled');
				}
			}else if (inputObj.hasClass('ui-selectoneradio')){	
				widgetVarObj.jq.removeClass('ui-state-disabled');
				//next primefaces version will provide the unbindEvents. Replace next 3 lines with unbindEvents
				widgetVarObj.inputs.off();
				widgetVarObj.labels.off();
				widgetVarObj.outputs.off();
				widgetVarObj.bindEvents();
				widgetVarObj.enabledInputs.on('keydown.selectOneRadio', function(e){
					keyCode = $.ui.keyCode,
		            key = e.which;
		            switch(key) {
		                case keyCode.SPACE:
		                	if(!$(this).prop('checked')){
		                		$(this).trigger('change');
		                		$(this).trigger('focus.selectOneRadio');
		                	}
		                    e.preventDefault();
		                break;
		            }
				});
			}else if (inputObj.hasClass('ui-selectonemenu')){	
				widgetVarObj.jq.removeClass('ui-state-disabled');
				widgetVarObj.unbindEvents();
				widgetVarObj.bindEvents();
			}else if (inputObj.hasClass('ui-chkbox')) {
				widgetVarObj.jq.removeClass('ui-state-disabled');
				widgetVarObj.box.off('click.selectBooleanCheckbox');
				widgetVarObj.box.on('click.selectBooleanCheckbox', function() {
					widgetVarObj.toggle();
	            });
				
				widgetVarObj.input.off("keydown");
				widgetVarObj.input.off("keyup");
				widgetVarObj.input.on('keyup.selectBooleanCheckbox', function(e) {
	                var keyCode = $.ui.keyCode;
	                if(e.which === keyCode.SPACE) {
	                	widgetVarObj.toggle();
	                    widgetVarObj.input.trigger('focus');
	                    e.preventDefault();
	                }
	            })
	            .on('keydown.selectBooleanCheckbox', function(e) {
	            	 Fintech.GuiFrameWork._preventSpaceBar(e);
	            });
				$('label[for="' + widgetVarObj.input.attr('id') + '_disabled"]').attr('for', widgetVarObj.input.attr('id'));
			} else if (inputObj.hasClass('ui-selectmanycheckbox')) {
				inputObj.removeClass('ui-state-disabled');
				widgetVarObj.jq.find('.ui-chkbox').removeClass('ui-state-disabled');
				widgetVarObj.jq.find('label').each(function(index, item) {
					var $item = $(item);
					var optionId = $item.attr('for');
					if (_.endsWith(optionId, '_disabled')) {
						$item.attr('for', optionId.substring(0, optionId.length - 9));
					}
				});
				widgetVarObj.outputs.off('click');
				widgetVarObj.outputs.on('click', function() {
		            var checkbox = $(this),
		            input = checkbox.prev().children(':checkbox');
		            input.trigger('click');
		            if($.browser.msie && parseInt($.browser.version) < 9) {
		                input.trigger('change');
		            }
		        });
				
				if($.browser.msie){
					widgetVarObj.enabledInputs.off("keydown");
				} else {
					widgetVarObj.enabledInputs.off("keyup");
				}
			}
			
			function makeSpinnerEditableImpl(spinner) {
				spinner.jq.removeClass('ui-state-disabled');
				spinner.input.removeAttr('readonly');
				spinner.input.attr('aria-readonly', false);
				
				spinner.jq.children('.ui-spinner-button').off();
				spinner.downButton.unbind();
				spinner.upButton.unbind();
				spinner.input.off();
				
				spinner.bindEvents();	
				spinner.input.off('mousewheel.spinner');
				spinner.input[0].onkeypress = function(evt) {
				    evt = evt || window.event;
				    var charCode = evt.which || evt.keyCode;
				    var charStr = String.fromCharCode(charCode);
				    if (/\D/.test(charStr)) {
				        return false;
				    }
				};
			};
		},
		
		
		_readOnlyComponentId: function (element, index, array){
			var $this = Fintech.GuiFrameWork;
			var inputObj = $(document.getElementById(element)); // change jquery selector to js call to improve performance in IE
			var widgetVarObj = $this.getWidgetVarById(element);
			
			var makeSpinnerReadonly = makeSpinnerReadonlyImpl;
			
			if(!$this._checkObjectExists(inputObj) || !$this._checkObjectExists(widgetVarObj)){
				return;
			} else if(inputObj.hasClass("ui-inputtext") ||  inputObj.hasClass('ui-inputtextarea')) {
				inputObj.prop("readonly", true);
				widgetVarObj.jq.addClass('ui-state-disabled')
			} else if (inputObj.hasClass('ui-inputnumber')){
				var inputNumber =  $(document.getElementById(element + "_input"));
				inputNumber.prop("readonly", true);
				widgetVarObj.jq.addClass('ui-state-disabled')
			}else if (inputObj.hasClass('ui-spinner')){
				makeSpinnerReadonly(widgetVarObj);
			} else if (inputObj.hasClass('ui-calendar')){							
				widgetVarObj.input.focus(function(){					
					 setTimeout(function() {
						 $('.ui-datepicker').hide();
		             }, 1);				    
				});
				widgetVarObj.input.prop("readonly","readonly");
				widgetVarObj.jq.addClass('ui-state-disabled')
			} else if (inputObj.hasClass('ui-inputnumber')){ 	
				widgetVarObj.inputExternal.prop("readonly","readonly");
				widgetVarObj.inputExternal.prop("aria-readonly",true);				
				widgetVarObj.inputInternal.prop("readonly","readonly");
				widgetVarObj.inputInternal.prop("aria-readonly",true);
				widgetVarObj.jq.addClass('ui-state-disabled')
			} else if (inputObj.hasClass('ui-selectonemenu')){	
				widgetVarObj.jq.addClass('ui-state-disabled');
				widgetVarObj.unbindEvents();
			} else if (inputObj.hasClass('ui-chkbox')) {
				widgetVarObj.jq.addClass('ui-state-disabled');
				widgetVarObj.box.off('click.selectBooleanCheckbox');
				widgetVarObj.input.off('keyup.selectBooleanCheckbox');
				widgetVarObj.input.off('keydown.selectBooleanCheckbox');
				widgetVarObj.input.on("keydown", function(e) {
		    	   Fintech.GuiFrameWork._preventSpaceBar(e);
		      	});
				widgetVarObj.input.on("keyup", function(e){
					Fintech.GuiFrameWork._preventSpaceBar(e);
		        });
				$('label[for="' + widgetVarObj.input.attr('id') + '"]').attr('for', widgetVarObj.input.attr('id') + '_disabled');
			} else if (inputObj.hasClass('ui-selectmanycheckbox')) {
				inputObj.addClass('ui-state-disabled');
				widgetVarObj.jq.find('label').each(function(index, item) {
					var $item = $(item);
					var optionId = $item.attr('for');
					if (!_.endsWith(optionId, '_disabled')) {
						$item.attr('for', optionId + '_disabled');
					}
				});
				
				if($.browser.msie){
					widgetVarObj.enabledInputs.on("keydown", function(e) {
					    	   Fintech.GuiFrameWork._preventSpaceBar(e);
					      	});
				} else {
					widgetVarObj.enabledInputs.on("keyup", function(e){
								Fintech.GuiFrameWork._preventSpaceBar(e);
					        });
				}
				
				widgetVarObj.outputs.off('click');
			} else if(inputObj.hasClass('ui-selectoneradio')){
				widgetVarObj.jq.addClass('ui-state-disabled');
				widgetVarObj.outputs.unbind("click");
				widgetVarObj.enabledInputs.off("keydown.selectOneRadio");
				widgetVarObj.enabledInputs.off("keyup.selectOneRadio");
				//handle the behavior of native radio button
				widgetVarObj.enabledInputs.on('keydown.selectOneRadio', function(e){
					keyCode = $.ui.keyCode,
		            key = e.which;
		            switch(key) {
		                case keyCode.UP:
		                case keyCode.LEFT:
		                case keyCode.DOWN:
		                case keyCode.RIGHT:
		                case keyCode.SPACE:
		                    e.preventDefault();
		                break;
		            }
				});
				//handle the behavior of native radio button for firefox
				if(PrimeFaces.env.browser.mozilla != 'undefined'){
					widgetVarObj.enabledInputs.on('keyup.selectOneRadio', function(e){
						keyCode = $.ui.keyCode,
						key = e.which;
						switch(key) {
						case keyCode.SPACE:
							e.preventDefault();
							break;
						}
					});
				}
			}
			
			function makeSpinnerReadonlyImpl(spinner) {
				spinner.jq.addClass('ui-state-disabled');
				spinner.input.prop("readonly", "readonly");
				spinner.input.prop("aria-readonly", true);
				
				spinner.jq.children('.ui-spinner-button').off();
				spinner.downButton.off();
				spinner.upButton.off();
				spinner.input.off();
			};
		},
		
		_preventSpaceBar : function(e) {
    	   var keyCode = $.ui.keyCode;
           if (e.which === keyCode.SPACE){
        	   e.preventDefault();
           }
        },
        
        handleDateRangeAttribute: function(pattern, metaMap){	
        	var $this = Fintech.GuiFrameWork;
        	for(var id in metaMap){
        		if (metaMap.hasOwnProperty(id)) {        			
    				var widgetVarObj = $this.getWidgetVarById(id);
    				if(widgetVarObj) {
    					if(metaMap[id][0] && metaMap[id][0] != 0) {
    						widgetVarObj.cfg.maxDate = new Date(metaMap[id][0]);
    						widgetVarObj.jqEl.datepicker('option', 'maxDate', new Date(metaMap[id][0]));
    					}
            			if(metaMap[id][1] && metaMap[id][1] != 0) {
            				widgetVarObj.cfg.minDate = new Date(metaMap[id][1]);
            				widgetVarObj.jqEl.datepicker('option', 'minDate', new Date(metaMap[id][1]));
            			}
    				}
    			}        			
        	}
        	
		},
		
		validateDateInputWithMask: function(inputId) {
			var $this = Fintech.GuiFrameWork;
			var widget = Fintech.GuiFrameWork.getWidgetVarById(inputId);
			if(widget == null){
				$(PrimeFaces.escapeClientId(inputId)).val("");
				return;
			}
			var input = widget.input;
			var inputValue = input.val();
			var dateFormat = widget.cfg.dateFormat;
			var isValid = $this.isDateValid(inputValue, dateFormat);
			if (isValid) {
				var date = $.datepicker.parseDate(dateFormat, inputValue);
				input.val($.datepicker.formatDate(dateFormat, date));
			}
		},
				
		isDateValid: function(dateString, javaScriptDateFormat) {
			if (dateString.indexOf("0000") >= 0) {
				return false;
			}
			try {
				$.datepicker.parseDate(javaScriptDateFormat, dateString);
			} catch (err) {
				return false;
			}
			return true;
		},
		addFintechComponent: function(component) {
			var $this = Fintech.GuiFrameWork;
			var index = jQuery.inArray( component, $this.fintechComponents ) ;
			if (index < 0) {
				$this.fintechComponents.push(component);
			}
		},
		updateAllTabsStatuses: function() {
			var self = this;
			$('.ui-tabs-panel').each(function(index) {
				var escapedId = self._escapePrimefaceId($(this).attr('id'));
				var tabLink = $(".ui-tabs-nav > li:not(.ui-state-disabled) > a[href*='"+escapedId+"']");
				if(typeof tabLink !== 'undefined' && tabLink.length > 0){
					if (self._hasErrorInTab($(this))) {
						tabLink.addClass("ui-state-error");
					} else {
						tabLink.removeClass("ui-state-error");
					}
				}
			});
		},
		
		_escapePrimefaceId: function(idToEscape){
			return idToEscape.replace(/:/g , "\\:");
		},
		
		updateContainerTabStatus: function(id){
			var element = $(document.getElementById(id)); // change jquery selector to js call to improve performance in IE
			var containerTabs = element.parents('.ui-tabs-panel');
			var directContainerTab = element.closest('.ui-tabs-panel');
			var directContainerTabParent = element.closest('.ui-tabs');
			var self = Fintech.GuiFrameWork;
			self._updateTabsStatus(containerTabs);
			if(directContainerTabParent.hasClass('subtab')){
				var relatedContainerTabs = directContainerTab.siblings('.ui-tabs-panel');
				self._updateTabsStatus(relatedContainerTabs);
			}
		},
		updateContainerTabStatusWhenNavigate: function(id) {
			var element = $(document.getElementById(id)); // change jquery selector to js call to improve performance in IE
			var containerTabs = element.parents('.ui-tabs-panel');
			var relatedContainerTabs = containerTabs.find('.ui-tabs-panel');
			var self = Fintech.GuiFrameWork;
			self._updateTabsStatus(relatedContainerTabs);
			self._updateTabsStatus(containerTabs);
		},
		updateTabStatus: function(widgetVar) {
			var tabWidget = PrimeFaces.widgets[widgetVar];
			var selectedTabIndex = tabWidget.getActiveIndex();
			var selectedTab = $(tabWidget.panelContainer.children().get(selectedTabIndex));
			var childrenTabs = selectedTab.find('.ui-tabs-panel');
			var self = Fintech.GuiFrameWork;
			self._updateTabsStatus(childrenTabs);
			self._updateTabStatus(selectedTab);
		},
		_updateTabsStatus: function(tabs){
			var self = Fintech.GuiFrameWork;
			tabs.each(function(){
				self._updateTabStatus($(this));
			});
		},
		_updateTabStatus: function(tab){
			var self = Fintech.GuiFrameWork;
			var tabLink = self._findTabLink(tab);
			if(typeof tabLink !== 'undefined' && tabLink.length > 0){
				if(self._hasErrorInTab(tab) && !tabLink.parent().hasClass('ui-state-disabled')){
					tabLink.addClass("ui-state-error");
				}
				else{
					tabLink.removeClass("ui-state-error");
				}
			}
		},
		_findTabLink: function(tab){
			var index = tab.prevAll('.ui-tabs-panel').length;
			var tabContainer = tab.closest('.ui-tabs');
			var tabLinkContainer = tabContainer.children('.ui-tabs-nav').children('li').get(index);
			return $(tabLinkContainer).children('a');
		},
		_hasErrorInTab: function(tab){
			var self = Fintech.GuiFrameWork;
			var errors = self._countErrorsInTab(tab);
			var hasError = false;
			if(typeof errors !== 'undefined' && errors.length > 0){
				hasError = true;
			}
			return hasError;
		},
		_countErrorsInTab: function(tab) {
			var errors = tab.find(".ui-state-error");
			return errors.filter(function(idx, error) {
				// count error except hidden input
				return !$(error).parent().hasClass('ui-helper-hidden-accessible');
			});
		},
		getCurrentProcessingComponentIds: function(cfg){
			var validationProcessingArea = $(PrimeFaces.escapeClientId(cfg.source)).closest('[validation-processing-target]');
			$("[id*='currentProcessingComponentIds']").val(validationProcessingArea.attr('validation-processing-target'));
		},
		blockUi: function(event) {
			if (typeof event != 'undefined' && event != null) {
				var toBeBlocked = event.originalTarget || event.target;
				Fintech.GuiFrameWork.blockUiClosestDiv(toBeBlocked);
			}
		},
		blockUiClosestDiv: function(toBeBlocked) {
			$(toBeBlocked).closest('div:not(.ui-helper-hidden-accessible, .ui-radiobutton)').block({
				message: '',
				overlayCSS: {
					backgroundColor: 'transparent'
				}
			});
		},
		unblockUiClosestDiv: function(toBeBlocked) {
			$(toBeBlocked).closest('div:not(.ui-helper-hidden-accessible, .ui-radiobutton)').unblock();
		},
		setCurrentProcessingComponentIds: function(val){
			$("[id*='currentProcessingComponentIds']").val(val);
		},
		getCurrentProcessingComponentIdsWhenChangeTab: function(cfg){
			var selectedTab = $(PrimeFaces.escapeClientId(cfg.source)).find('div.ui-tabs-panel[aria-hidden="false"]');
			if(typeof selectedTab != 'undefined' && typeof $(selectedTab).find('[validation-processing-target]') != 'undefined') {
				var validationProcessingArea = selectedTab.find('[validation-processing-target]').first();
				$("[id*='currentProcessingComponentIds']").val(validationProcessingArea.attr('validation-processing-target'));
			}
		},
		
		handleSwitchViewMode: function(args){
			if(args && !args.validationFailed) {
				switchViewModeCmd();
			}else{
				this._handleChangeTabViewsStatus();
				
			}
		},
		
		handleCompleteSaveDossier: function(args){
			if(args && args.validationFailed) {
				this._handleChangeTabViewsStatus();
			}
		},
		
		_handleChangeTabViewsStatus: function(){
			var panels = $(".ft-data-gathering-tabs-container .ui-tabs-panel");
			$(".ft-data-gathering-tabs-container .ui-tabs-nav a").each(function(index){
				if($(panels.get(index)).find('.ui-state-error').length != 0){
					$(this).attr("style","color: #ff4d4d !important;");
				}else{
					$(this).removeAttr("style");
				}
			});
		},
		updateNavigatorComponents: function(navigators){
			for(var i = 0; i < navigators.length; i++){
				var navigator = navigators[i];
				if(navigator.status == 'VALID'){
					$(PrimeFaces.escapeClientId(navigator.id)).removeClass('ui-state-error');
				} else {
					$(PrimeFaces.escapeClientId(navigator.id)).addClass('ui-state-error');
				}
			}
		},
		handleMaximumRangeOfInputNumber: function() {
			$('.pe-inputNumber').each(function (index, inputNumber) {
				if ($(inputNumber).autoNumeric('getSettings').vMax > 2147483647) {
					$(inputNumber).autoNumeric('update', {vMax: '2147483647'});
				}
				if ($(inputNumber).autoNumeric('getSettings').vMin < -2147483648) {
					$(inputNumber).autoNumeric('update', {vMin: '-2147483648'});
				}
			});
		},
		handleEnabledOrDisabledContainer: function(enabledContainerComponentIds, disabledContainerComponentIds){
			enabledContainerComponentIds.forEach(this._enabledContainerComponents);
			disabledContainerComponentIds.forEach(this._disabledContainerComponents);
		},

		_enabledContainerComponents: function (element, index, array){
			var $this = Fintech.GuiFrameWork;
			$this._handleUpdateTabView(element, true);
		},
		_disabledContainerComponents: function (element, index, array){
			var $this = Fintech.GuiFrameWork;
			$this._handleUpdateTabView(element, false);
		},
		
		_handleUpdateTabView: function (element, isEnable){
			var $this = Fintech.GuiFrameWork;
			var container = $("[container-id='"+element+"']");
			if($this._checkObjectExists(container)){
				var containerType = $this._getContainerType(container);
				switch(containerType){
					case Fintech.GuiFrameWork.Enums.ContainerType.UI_TABS:
						var tabWidgetVar = $this._getUiTabWidget(container);
						var indexOfCurrentContainer = $this._getIndexOfTabPanel(container);
						if(isEnable == true){
							tabWidgetVar.enable(indexOfCurrentContainer);
							$this._removeHelptextForTab(tabWidgetVar, indexOfCurrentContainer);
						} else {
							tabWidgetVar.disable(indexOfCurrentContainer);
							Fintech.DataGathering.clearDataWhenDisableTab(container);
							var helptext = container.attr("disabled-titletip");
							if(typeof(helptext) != 'undefined') {
								$this._addHelptextForTab(tabWidgetVar, indexOfCurrentContainer, helptext);
							}
							var labelToReset = $("div[data-widget*='"+tabWidgetVar.widgetVar+"'] li[role='tab']:nth-child("+(indexOfCurrentContainer+1)+") a");
							labelToReset.removeAttr("style");
							labelToReset.removeClass('ui-state-error');
							$this._removeHoverStateForDisabledTab(container);
						}
						break;
					default :
						break;
						
				}
				
			}
		},
		_removeHoverStateForDisabledTab: function(container){
			var disabledTabs = container.closest(".ui-tabs").find('.ui-state-disabled');
			$.each( disabledTabs, function( index, value ) {
				$(value).removeClass('ui-state-hover');
			});
		},
		_getUiTabWidget: function(container){
			var $this = Fintech.GuiFrameWork;
			var tabId = container.closest(".ui-tabs").attr("id");
			return $this.getWidgetVarById(tabId);
		},
		_getIndexOfTabPanel: function(container){
			return container.closest(".ui-tabs-panel").index();
		},
		_getContainerType:function(container){
			if(container != undefined){
				if(container.closest("ui-tabs-panel") || container.closest("ui-tabs") ){
					return Fintech.GuiFrameWork.Enums.ContainerType.UI_TABS;
				}
			}
			return Fintech.GuiFrameWork.Enums.ContainerType.UNKNOWN;
			
		},
		_getHelptextOfTab: function(container){
			
		},
		_addHelptextForTab: function(tabWidget, tabIndex, helpText){
			var tabId = tabWidget.id;
			var tabToAdd = $("div[id='"+tabId+"']>ul>li[role='tab']:nth-child("+(tabIndex+1)+")");
			tabToAdd.attr('title', helpText);
			tabToAdd.addClass('ui-interactable');
		},
		
		_removeHelptextForTab: function(tabWidget, tabIndex){
			var tabId = tabWidget.id;
			var tabToRemove = $("div[id='"+tabId+"']>ul>li[role='tab']:nth-child("+(tabIndex+1)+")");
			tabToRemove.removeAttr('title'); 
		},
		openErrorSystemDialog: function(message){
			$("label[id$='errorContentDialog']").html(message) 
			PF('errorSystemDialogVar').show();
		},
		
		prepareListenerForInputField: function() {
			var $this = Fintech.GuiFrameWork;
			var button = $(document.querySelectorAll("button, input[type='button'], input[type='submit']"));
			button.click($this.blurInputText);
		},
		
		blurInputText: function() {
			$(':focus').blur();
		},
		setValueToInput: function(id, value){
			$("[id*='" + id + "']").val(value);
		},
		
		selectFirstTabInSubTab: function (subTabContainerId){
			var $this = Fintech.GuiFrameWork;			
			var widgetTabContainer = $this.getWidgetVarById(subTabContainerId);
			var tabIndex = 0;			
			if($this._checkObjectExists(widgetTabContainer)){
				var subtabs = widgetTabContainer.navContainer[0].childNodes;
				if($this._checkObjectExists(subtabs)){
					for (var index = 0; index < subtabs.length; index++) {
					    if(!$(subtabs[index]).hasClass('ui-state-disabled')) {
					    	tabIndex = index;
					    	break;
					    }
					}
				}
				widgetTabContainer.select(tabIndex);
			}			
		},
		
		selectFirstSubTab: function(tabId) {
			var $this = Fintech.GuiFrameWork;
			$(document.getElementById(tabId)).find(".tab-container").each(function() { // change jquery selector to js call to improve performance in IE
				var tabContainerId = $(this).attr("id");
				$this.selectFirstTabInSubTab(tabContainerId);
			});
		},
		
		handleHideEmptySubTab: function() {
			$("li.subtab").each(function(index){
				var header = $(this).find("a");
				var contentId = header.attr('href').replace("#", "");
				var content = document.getElementById(contentId); // change from Jquery selector to getElementById to improve performance in IE	
				if(content.textContent.trim() == ""){	
					header.hide();
					header.removeClass('ui-state-error');
					$(this).addClass('ui-state-disabled');
				} else {
					$(this).removeClass('ui-state-disabled');
					header.show();
				}
			});
		},

		applyInputMask: function(mask, cssSelector) {
			_.each($(cssSelector), function(item) {
				if (_.isUndefined($(item).inputmask('getmetadata'))) {
					$(item).inputmask(mask);
				}
			});
		},
		
		convertSelectedValuetoLabelInAutocomplete: function(idField){
			var idAutocomplete = PrimeFaces.escapeClientId(idField);
			var variableName = $(idAutocomplete).attr("source-autocomplete");
			var value = $(idAutocomplete).val();
			if(variableName!= null && value != null){
				var listAutocomplete = $.parseJSON(eval("Fintech.GuiFrameWork."+variableName));
				var matches = $.grep(listAutocomplete, function (item)
						{
							return item.value === value|| item.label.toLowerCase() === value.toLowerCase();
						});
				if(matches.length > 0){
					$(idAutocomplete).val(matches[0].label);
				}
			}
		},
		updateSpinnerWhenStart: function(cfg) {
			this.getCurrentProcessingComponentIds(cfg);
			var spinnerContainer = $(PrimeFaces.escapeClientId(cfg.source));
			spinnerContainer.find('.ui-spinner-button, input').off();
			if (spinnerContainer.parent().children('i').length == 0) {
				spinnerContainer.before( "<i style='margin-right:5px;' class='fa fa-spinner fa-spin spinner-customization' aria-hidden='true'></i> " );
			}
		},
		updateSpinnerOnComplete: function(cfg) {
			this.updateContainerTabStatus(cfg);
			$(PrimeFaces.escapeClientId(cfg)).parent().children("i.fa-spinner").remove();
		}
}

	
Fintech.GuiFrameWork.Enums = {
		ComponentType: {
			UNKNOWN:"unknown",
			INPUT_TEXT:"ui-inputtext",
			INPUT_TEXTAREA:"ui-inputtextarea",
			INPUT_NUMBER:"ui-inputnumber",
			SPINNER:"ui-spinner",
			CALENDAR:"ui-calendar",
			SELECT_ONE_RADIO:"ui-selectoneradio",
			SELECT_ONE_MENU:"ui-selectonemenu",
			CHECKBOX:"ui-chkbox",
			SELECT_MANY_CHECKBOX: "ui-selectmanycheckbox",
			SELECT_CHECKBOX_MENU: "ui-selectcheckboxmenu",
			TAB: "ui-tabs",
			DATATABLE:"ui-datatable",
			UI_PANEL:"ui-panel"
		},
		ContainerType:{
			UNKNOWN:"unknown",
			UI_TABS:"ui-tabs",
		},
		Constant: {
			GF_STATE_EDITABLE: "gf-s-e",
		},
		
};

Fintech.EntitySearch = {
		onEntitySelected: function() {
			this.scrollToPersonTable();
			
		},
		scrollToPersonTable: function() {
			var dialogContent = $('.entity-search-dialog .ui-dialog-content > .component-wrapper');
			var personTable = $('[id$="entityDetailsWrapper"]');
			if (!_.isUndefined(dialogContent.offset()) && !_.isUndefined(personTable.offset())) {
				var destination = personTable.offset().top - dialogContent.offset().top;
				$('.entity-search-dialog .ui-dialog-content').stop().animate({scrollTop: destination}, 1000);
			}
		},
		onSearchIconClicked: function() {
			var entityName = $("[id$='company']").val().trim();
			var city = $("[id$='city']").val().trim();
			if(entityName != '' || city != '') {
				$("[id$='searchEntityButton']").trigger("click");
			}
		}
} 

Fintech.DocumentComponent = {
		handleUploadFile: function() {
			if($("[id$='processContextHidden']").val() == 'MANUAL_DOCUMENT_UPLOAD' 
					|| $("[id$='processContextHidden']").val() == 'APPROVAL_1'
					|| $("[id$='processContextHidden']").val() == 'APPROVAL_2'){
				if($(".ui-fileupload-filename").text()){
					PF('documentUploadFileDialogVar').hide();
					return true;
				}else {
					$("[id$='fileNameMessage']").css("display", "inline");
					return false;
				}	
			}
			PF('documentUploadFileDialogVar').hide();
			return true;
		},
		updateRequiredFileUploadMessage: function() {
			if($(".ui-fileupload-filename").text()){
				$("[id$='fileNameMessage']").css("display", "none");
			}
		},
		storeInvalidTabs: function(storageField){
			//this method will be overwrite by sub modules
			return;
		},
		
		collectInvalidTabs: function(tabObject){
			var invalidTabs = [];
			tabObject.find("> .ui-tabs-nav li a.ui-state-error").each(function(){
				invalidTabs.push($(this).attr("href"));
			});
			return invalidTabs;
		},
		updateInvalidTabsState: function (oldStatus){
			//this method will be overwrite by sub modules
			return;
		},
		prepareForUploadingDocument: function() {
			//this method will be overwrite by sub modules
			return;
		}, 
		openDocumentLink: function(link, target){
			if (link) {
			    target = target || '_blank';
			    window.open(link, target);
			}
		},
		monitorDownloadDocument: function() {
			PrimeFaces.monitorDownload(null, null);
		}
};

Fintech.DossierUtil.formatDossierTitle = function(entityName, cobId) {
	var title = _.trim(Fintech.DataGathering.message.dossierTitle) + " ";
	title += _.trim(entityName) ? _.truncate(_.trim(entityName), {length: 100}) : _.trim(Fintech.DataGathering.message.createNewDossierLabel);
	title += _.trim(cobId) ? (" (" + _.trim(cobId) + ")") : "";
	return _.escape(title);
};

Fintech.Credential = {
	showCredential: function() {
		PF('credential').show();
	},
	hideCredential: function() {
		PF('credential').hide();
	}
}

Fintech.FinnovaCredential = {
		showFinnovaCredential: function() {
			PF('finnovaCredential').show();
			return false;
		},
		hideFinnovaCredential: function() {
			PF('finnovaCredential').hide();
			return false;
		}
}
Fintech.GuiFrameWork.Autocomplete = {
		isOnchange: false,
		
		isValidKeyCode: function(e){
			if (e.target.value.length < 2){
				return false;
			}
			var keycode = e.keyCode;
		    var valid = 
		        (keycode > 47 && keycode < 58)   || // number keys
		         keycode == 32 || keycode == 13	 ||// spacebar & return key(s) (if you want to allow carriage returns)
		         keycode == 8 || keycode == 46 ||
		        (keycode > 64 && keycode < 91)   || // letter keys
		        (keycode > 95 && keycode < 112)  || // numpad keys
		        (keycode > 185 && keycode < 193) || // ;=,-./` (in order)
		        (keycode > 218 && keycode < 223);   // [\]' (in order)

		    return valid;
		},
		disableOnchange: function(){
			var _self = Fintech.GuiFrameWork.Autocomplete;
			return _self.isOnchange;
		},
		setOnchange: function(value){
			var _self = Fintech.GuiFrameWork.Autocomplete;
			_self.isOnchange = value;
		},
		apply : function(idField){
			var $this = Fintech.GuiFrameWork;
			var _self = Fintech.GuiFrameWork.Autocomplete;
			var idAutocomplete = PrimeFaces.escapeClientId(idField);
			var onchangeString = $(idAutocomplete).attr("onchange");
			var variableName = $(idAutocomplete).attr("source-autocomplete");
			var mouseDown = false;
			var appendToId = $(idAutocomplete).attr("appendTo");
			if(variableName!= null){
				var listAutocomplete = undefined;
				$(idAutocomplete).autocomplete({
					appendTo: "[id$=':" + appendToId + "']",
					source : function(request, response) {
						$(idAutocomplete).data.isItemAlreadySelected = false;
						var isLazy = $(idAutocomplete).attr("autocomplete-lazy");
						if(isLazy != undefined && isLazy == "true"){
						  var fullIdAutocomplete = $(idAutocomplete).attr('id');
						    PrimeFaces.ab({
						        s: fullIdAutocomplete,
						        e: "keyup",
						        p: "@none",
						        u: "@none",
						        g: false,
						        d: 250,
						        onst: function (xhr, status, args){
						            $(idAutocomplete).addClass("loading");
						        },
						        onco: function(xhr, status, args) {
						            listAutocomplete = $.parseJSON(eval("Fintech.GuiFrameWork."+variableName));
						            var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
						            var filteredList = $.grep(listAutocomplete, function(item) {
						                return matcher.test(item.value)|| matcher.test(item.label);
						            });
						            response(filteredList);
						            $(idAutocomplete).removeClass("loading");
						        }
						    });
						} else {
							listAutocomplete = $.parseJSON(eval("Fintech.GuiFrameWork."+variableName));
					        var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
					        response($.grep(listAutocomplete, function(item) {
					            return matcher.test(item.value)|| matcher.test(item.label);
					        }));
						}
				    },
					minLength : 2,
					select : function(event, ui){
						Fintech.GuiFrameWork.blockUi(event);
	 					$(idAutocomplete).val(ui.item.label);
	 					$(idAutocomplete).parent().find("[id$='ItemValue']").val(ui.item.value);
	 					callOnChangeEvent(idAutocomplete);
	 					$(idAutocomplete).data.isItemAlreadySelected = true;
	 					return false;
					},
					autoFocus: true,
					focus : function(event, ui) {
						event.preventDefault();
					},
					change : function(event, ui) {
						Fintech.GuiFrameWork.blockUi(event);
						var autocomplete = $( idAutocomplete ).data( "ui-autocomplete" );
						var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( $(idAutocomplete).val() ) + "$", "i" );
						autocomplete.widget().children( ".ui-menu-item" ).each(function() {
							var item = $( this ).data( "ui-autocomplete-item" );
							if ( matcher.test( item.label || item.value || item ) ) {
								ui.item = item;
								return false;
							}
						});
        			 	if (!ui.item) {
                            var inputValue = $(idAutocomplete).val();
                            $(idAutocomplete).parent().find("[id$='ItemValue']").val(inputValue);
    	 					callOnChangeEvent(idAutocomplete);
                        }else{
    						autocomplete._trigger( "select", event, { item: ui.item} );
                        }
        			 	return false;
                    },
                    open: function(event, ui) {
                    	
                    	/* This is temporary fix for problem that user have to click twice to select item on mobile design 
                    	 * @relatedPost: http://stackoverflow.com/questions/25286685/autocomplete-requires-you-to-click-twice-in-ios-after-update-to-1-11-0
                    	 * @bug: https://jira.axonivy.com/jira/browse/SOBA-153
                    	 * you should check again after you upgrading your jquery ui
                    	 * IMPORTANT: Don't remove mouseenter event handler otherwise the user will not be able to select any other item except for the first item.    
                    	 * */
                    	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                    		$('.ui-autocomplete').off('menufocus hover mouseover');
                    	}
                    	//END of fix
                    }
				}).data( "ui-autocomplete" )._renderMenu = function(ul, items) {
                    $(ul).mousedown(function(event) {
                    	if (event.target.nodeName == "UL"){
                    		mouseDown = true;
                    	}
    				})
    				
                    var that = this;
                    $.each( items, function( index, item ) {
                        that._renderItemData( ul, item );
                    });
                };
				                
                function callOnChangeEvent(idAutocomplete){
                	_self.isOnchange = true;
                	var onchangeString = $(idAutocomplete).attr("onchange");
                	eval(onchangeString);
                }
			}
		},
		
		initItemList: function(jsonSource, variableName){ 
			eval("Fintech.GuiFrameWork."+ variableName + "= jsonSource");
		},
		resetItemSelectedFlag: function(target){
			var componentType = $(target).attr("type");
			if(componentType != undefined && componentType == "autocomplete"){
				$(target).data.isItemAlreadySelected = false;
			}
		}
};

Fintech.Statistic = {
		showLoadingIcon: function() {
			$('.statistic-blockui').removeClass('hide');
		},

		hideLoadingIcon: function() {
			$('.statistic-blockui').addClass('hide');
		}
}
