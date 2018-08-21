var Fintech = Fintech || {};

Fintech.AccountHolder = {
		
	SELECTED_ACCOUNT_HOLDER: '[id$=":selectAccountHolder_guiFrmInsideUIRepeat"]',
	ACCOUNT_HOLDER_TAB_ELEMENT: '[id$=":accountHolderTabView"]',
	
	TAB_HREF_ID: {
		IDENTIFICATION: '[href$=":identificationTab"]',
		CORRESPONDENCE: '[href$=":correspondenceTab"]'
	},
	
	IDENTIFICATION_ELEMENT: '[id*="identificationTab"]',
	CORRESPONDENCE_ELEMENT: '[id*="correspondenceTab"]',
	
	MESSAGE_FOR_IDENTIFICAITON_CHANGED_ELEMENT: '[id*="identificationChangedMessage"]',
	MESSAGE_FOR_IDENTIFICAITON_CONFIRMED_ELEMENT: '[id*="confirmedMessage"]',
	IDENTIFICATION_CONFIRM_BUTTON: '[id*="confirmButton"]',
	NAVIGATE_TO_CORRESPONDENCE: '[id*="navigateToCorrespondenceTab"]',
	
	defaultUnnamedAccountHolder: function() { return $('.ui-tabs-panel').find('.defaultUnnamedAccountHolderClass').first().text();},
	defaultUnnamedOpener: function() { return $('.ui-tabs-panel').find('.defaultUnnamedOpenerClass').first().text();},
	openerCaption: function() { return $('.ui-tabs-panel').find('.defaultOpenerClass').first().text();},
	
	prepareNavigateToCorrespondenceTab: function(event){
		var self = this;
		var $target = $(event.currentTarget);
		$target.parentsUntil(self.CORRESPONDENCE_ELEMENT).find(self.NAVIGATE_TO_CORRESPONDENCE).val(true);
		$(self.SELECTED_ACCOUNT_HOLDER).first().trigger('click');
	},
	
	pointToCorrespondenceTab: function(isNavigatingToCorrespondence){
		var self = this;
		if(isNavigatingToCorrespondence == 'true'){				
			setTimeout(function(){ 
				var $correspondenceTab = self._getAccountHolderTabViewElementByHrefId(self.TAB_HREF_ID.CORRESPONDENCE);
				$correspondenceTab.trigger('click');				
			}, 10);
		}
	},
		
	handleIdentificationDataChanged: function(identificationId){
		var self = this;
		self._resetShowingDefaultIdentificationChangedMessage();
		var $identificationTab = self._getAccountHolderTabViewElementByHrefId(self.TAB_HREF_ID.IDENTIFICATION);
		
		$("[id*='" + identificationId + "']").each(function() {			
			var isIdentificationConfirmed = $(this).is(":checked");
			var isDataChanged = ($(this).val() == "true");
			if(isIdentificationConfirmed && $identificationTab != null){
				var $identificationElement = $(this).parentsUntil(self.IDENTIFICATION_ELEMENT);
				var $identificationChangedMessage = $identificationElement.find(self.MESSAGE_FOR_IDENTIFICAITON_CHANGED_ELEMENT);
				var $identificationConfirmedMessage = $identificationElement.find(self.MESSAGE_FOR_IDENTIFICAITON_CONFIRMED_ELEMENT);
				var $confirmButton = $identificationElement.find(self.IDENTIFICATION_CONFIRM_BUTTON);
				self._displayMessageBasedOnIdentificationDataChanged($identificationChangedMessage, $identificationConfirmedMessage, isDataChanged);	
				self._handleErrorStateForIdentificationTab($identificationTab, isDataChanged);
				self._displayConfirmButton($confirmButton, isDataChanged);
			}					
		});
	},
	
	_resetShowingDefaultIdentificationChangedMessage: function(){
		var self = this;
		$(self.MESSAGE_FOR_IDENTIFICAITON_CHANGED_ELEMENT).each(function(){
			$(this).hide();
		});
	},	
	
	_displayMessageBasedOnIdentificationDataChanged: function($changedMessageViewElement, $confirmedMessageViewElement, isDataChanged){
		if(isDataChanged){
			$changedMessageViewElement.show();
			$changedMessageViewElement.find('i').first().show();
			$confirmedMessageViewElement.hide();
			$changedMessageViewElement.find('i').each(function(index){
				if(index != 0){
					this.remove();
				}
			});	
		} else {
			$changedMessageViewElement.hide();
		}
	},
	
	_displayConfirmButton: function($confirmButton, isDataChanged){
		var self = this;
		var item = self._getCssItemForConfirmButton(isDataChanged);
		var $buttonElement = $confirmButton.eq(1);
		
		$buttonElement.find('span').first().removeClass(item.removeIcon);
		self._addClassIfNotExist($buttonElement.find('span').first(), item.addIcon);
		$buttonElement.removeClass(item.removeClass);
		self._addClassIfNotExist($buttonElement, item.addClass);
	},
	
	_handleErrorStateForIdentificationTab: function($identificationTab, isDataChanged){
		var self = this;
		setTimeout(function(){ 
			self._setErrorStateForTab($identificationTab, isDataChanged);}, 1);
	},
		
	_setErrorStateForTab: function($tabElement, isError){
		var self = this;
		if(isError){
			self._addClassIfNotExist($tabElement.find('a'), 'ui-state-error');
		} else{
			$tabElement.find('a').removeClass('ui-state-error');
		}
	},
	
	_getAccountHolderTabViewElementByHrefId: function(hrefId){
		var $tabElement;
		var self = this;
		$(self.ACCOUNT_HOLDER_TAB_ELEMENT).find('ul.ui-tabs-nav li').each(function(){
			if($(this).find(hrefId).length > 0){
				$tabElement = $(this);
				return false;
			};
		});
		return $tabElement;
	},
	
	_addClassIfNotExist: function($element, className){
		if(!$element.hasClass(className)){
			$element.addClass(className);
		}
	},
	
	_getCssItemForConfirmButton: function(isDataChanged){
		return {
			addIcon: isDataChanged? 'fa-warning': 'fa-check-square',
			removeIcon: !isDataChanged? 'fa-warning': 'fa-check-square',
			addClass: isDataChanged? 'identification-changed-confirm-button': 'ui-button-primary',
			removeClass: !isDataChanged? 'identification-changed-confirm-button': 'ui-button-primary'
		}
	},
	
	generateAccountHolderNavigatorTitle : function(firstName, lastName, accountHolderType, accountHolderIndex) {
		var accountHolderNavigatorTitle = this._generatePersonName(firstName, lastName);
		
		if (this._isNotBlank(accountHolderNavigatorTitle) == false) {
			accountHolderNavigatorTitle = this._retrieveAccountHolderDefaultName(accountHolderType, accountHolderIndex);
		}
		
		if (accountHolderType == this.openerCaption()) {
			accountHolderNavigatorTitle = accountHolderNavigatorTitle + " (Opener)";
		}
		
		return accountHolderNavigatorTitle;
	},
	
	_generatePersonName : function(firstName, lastName) {
		if (this._isNotBlank(firstName) && this._isNotBlank(lastName)) {
			return firstName.concat(" ").concat(lastName);
		}
		if (this._isNotBlank(firstName)) {
			return firstName;
		}
		return lastName;
	},
	
	_isNotBlank : function(checkedValue) {
		checkedValue = checkedValue.trim();
		if (checkedValue != undefined && checkedValue != "" && checkedValue != null) {
			return true;
		}
		return false;
	},
	
	_retrieveAccountHolderDefaultName : function(accountHolderType, accountHolderIndex) {
		if (accountHolderType == this.openerCaption()) {
			return this.defaultUnnamedOpener() + " " + accountHolderIndex;
		}
		return this.defaultUnnamedAccountHolder() + " " + accountHolderIndex;
	}
};