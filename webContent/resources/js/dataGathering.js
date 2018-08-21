$(function() {
	
	Fintech.DataGathering.prepareListenerForUpdateDossierTitleDependOnFirstNameAndLastName();
	Fintech.DataGathering.prepareListenerForUpdateAccountHolderNavigatorTitleDependOnFirstNameAndLastName();
	Fintech.DataGathering.prepareListenerForUpdateOnlineBankingUserNavigatorTitle();
	Fintech.DataGathering.prepareListenerForUpdateNavigatorTitleDependOnFirstNameAndLastName();
	Fintech.DataGathering.prepareListenerForRunCheck();
	Fintech.DataGathering.prepareListenerForUpdatePowerOfAttorneyNavigatorTitle();
	Fintech.DataGathering.updateDossierTitle();
	Fintech.GuiFrameWork.addFintechComponent(Fintech.DataGathering);	
				
	Fintech.DataGathering.PreventEmpty.registerContainerOptionForObservingChanges({container:".accountHolderItem", addNewOpt:true});		
	Fintech.DataGathering.PreventEmpty.registerContainerOptionForObservingChanges({container:".beneficialOwnerItem", addNewOpt:true});
	Fintech.DataGathering.PreventEmpty.registerContainerOptionForObservingChanges({container:".occupationItem", addNewOpt:true});
	Fintech.DataGathering.PreventEmpty.registerContainerOptionForObservingChanges({container:".powerOfAttorneyItem", addNewOpt:true});
	Fintech.DataGathering.PreventEmpty.registerContainerOptionForObservingChanges({container:".productItem", addNewOpt:true});
	Fintech.DataGathering.PreventEmpty.registerContainerOptionForObservingChanges({container:".onlineBankingUserItem", addNewOpt:true});
	Fintech.DataGathering.ignorePreventEmptyByContext('currentProcessContext');
	Fintech.DataGathering.handleResponsiveForCockpit();
	
	Fintech.Navigator.Scrollbar.initNavigatorScrollBar('div[id$=productTab]');
});

$('form').on('keypress', function(e){
	 if(e.which == 13) {
		 e.preventDefault();
	 }
});


var EMPTY_STRING = "";
var Fintech = Fintech || {};

Fintech.DataGathering = Fintech.DataGathering||{};

Fintech.DataGathering = {
	firstNameSelector: 'input[id$=":personFirstName"]',
	lastNameSelector: 'input[id$=":personLastName"]',
	dossierTitleSelector: '[id$=":dossier-title"]',
	accountHolderTabPanelSelector:"#form\\:individualDgTab\\:accountHolderTabPanel",
	originalContainerData : {
		accountHolderItem : [],
		occupationItem : [],
		occupationItem_childrens : [],
		occupationItem_current : '',
		beneficialOwnerItem : [],
		powerOfAttorneyItem : [],
		productItem : [],
		onlineBankingUserItem : [],
		onlineBankingUserItem_lastItem: [],
		onlineBankingUserItem_childrens : [],
		onlineBankingUserItem_current : '',
	},
	
	lastModifiedData:{
		accountHolderItem_lastItem:	[],
		beneficialOwnerItem_lastItem: [] ,
		powerOfAttorneyItem_lastItem: [],
		productItem_lastItem: [],
		occupationItem_lastItem: [],
		occupationItem_childrens : [],
		occupationItem_current : '',
		onlineBankingUserItem : [],
		onlineBankingUserItem_lastItem: [],
		onlineBankingUserItem_childrens : [],
		onlineBankingUserItem_current : '',
	},
	
	callBackOriginalFunctions:{
		addAccountHolderJs : function() {
			$(".hiddenAccountHolderAddingBtn").trigger("click");
		},

		addOccupationJs : function() {
			$(".hiddenAddOccBtn").trigger("click");
		},

		addBeneficialOwnerJs : function() {
			$(".hiddenAddBOBtn").trigger("click");
		},

		addPowerOfAttorneyJs : function() {
			$(".hiddenAddPOABtn").trigger("click");
		},

		addProductJs : function() {
			$(".hiddenProductAddingBtn").trigger("click");
		},
		
		addOnlineBankingUserJs : function() {
			$(".hiddenAddOnlineBankingUserBtn").trigger("click");
		},
	},
		
	errorAccountHolderIndexes:[],
	
	getDefaultDataInJson: function() {
		var _self = Fintech.DataGathering;
		var defaultData = {};
		var dataObserver = _self.PreventEmpty.dataChangedObserversPool;
		
		$.each(dataObserver, function(index, value) {
			var containerName =  value.container.replace(".","");
			defaultData[containerName] = _self.originalContainerData[containerName];	
		});
		
		var defaultDataInJson = JSON.stringify(defaultData);
		
		setDefaultDataToManagedBean([ {
			name : 'defaultDataInJson',
			value : defaultDataInJson
		} ]);
	},
	
	setDefaultAndLastestDataToOriginalData: function(defaultDataJson, lastModifiedDataJson){
		if(defaultDataJson == null ||  defaultDataJson == "" || lastModifiedDataJson == null ||  lastModifiedDataJson == "") return;
		var json1 = JSON.parse( defaultDataJson);
		var json2 = JSON.parse( lastModifiedDataJson);	
		Fintech.DataGathering.originalContainerData = $.extend( json1, json2);
	},
	
	getLastItemsData:function(){
		var _self = Fintech.DataGathering;
		var dataObserver = _self.PreventEmpty.dataChangedObserversPool;
		
		$.each(dataObserver, function(index, value) {
			
			var container =  value.container;
			var navigateItemClass = container.replace("Item","Index");
			var containerName_lastItem = container.replace(".","") + "_lastItem";
			var currentPageIsLastPage = _self.PreventEmpty.isWorkingOnLastPage(navigateItemClass);
			
			if(currentPageIsLastPage){
				var serializeContainer = _self._collectElements(container).filter(function () {return $.trim(this.value);}).serialize();		
				_self._storeDataToArrayLastItem(containerName_lastItem,serializeContainer);
			}else{
				_self.lastModifiedData[containerName_lastItem] = _self.originalContainerData[containerName_lastItem];
			}
		});
		
		_self.getDefaultDataInJson();
		_self.lastModifiedData["occupationItem_childrens"]= _self.originalContainerData["occupationItem_childrens"];
		_self.lastModifiedData["occupationItem_current"] = _self.originalContainerData["occupationItem_current"];
		
		_self.lastModifiedData["onlineBankingUserItem_childrens"]= _self.originalContainerData["onlineBankingUserItem_childrens"];
		_self.lastModifiedData["onlineBankingUserItem_current"] = _self.originalContainerData["onlineBankingUserItem_current"];
		
		$("[id$=lastModifiedData]").val(JSON.stringify(_self.lastModifiedData)).change();
	},
	
	_storeDataToArrayLastItem: function(className, data){
		if ($.inArray(data, Fintech.DataGathering.lastModifiedData[className]) == -1){
			Fintech.DataGathering.lastModifiedData[className] = [];
			Fintech.DataGathering.lastModifiedData[className].push(data);			
		}
	},
	
	_collectElements: function (object){
		var filterElements = $(':input:not([type="hidden"],[type="autocomplete"])', object);
		var autocompleteElements = $(':input[type="autocomplete"]', object).siblings('input:hidden');
		return $.merge(filterElements,autocompleteElements);
	},
	/*
	 * public
	 * add event handler for every input related to title of dossier
	 */
	prepareListenerForUpdateDossierTitleDependOnFirstNameAndLastName: function() {
		var firstNameInput = $(this.firstNameSelector);
		var lasNameInput = $(this.lastNameSelector);
		firstNameInput.keyup(this.updateDossierTitle);
		lasNameInput.keyup(this.updateDossierTitle);
	},
	
	prepareListenerForUpdateAccountHolderNavigatorTitleDependOnFirstNameAndLastName: function() {
		var accountHolderFirstNameSelector = "[id$=':accountHolderTabView'] [id$=personFirstName]";
		$('#wrapper').on('keyup change', accountHolderFirstNameSelector, function(){
			Fintech.DataGathering.updateAccountHolderNavigatorTitle();
			Fintech.DataGathering.updateDossierTitle();
		});
		
		var accountHolderLastNameSelector = "[id$=':accountHolderTabView'] [id$=personLastName]";
		$('#wrapper').on('keyup change', accountHolderLastNameSelector, function(){
			Fintech.DataGathering.updateAccountHolderNavigatorTitle();
			Fintech.DataGathering.updateDossierTitle();
		});
	},
	
	prepareListenerForUpdateOnlineBankingUserNavigatorTitle: function() {
		var _self = Fintech.DataGathering;
		
		// Listener of Related Online Banking User dropdown list input change
		var onlineBankingUserDropDownSelector = "[id$=':productTabView'] [id$=relatedOnlineBankingUser_input]";
		$('#wrapper').on('change', onlineBankingUserDropDownSelector, function(){
			// Text list from Related Online Banking User dropdown list without Account Holder or Poa's name
			var excludedSelectionsOnDropdownList = _self._getSpecifalTexts(['.additionalEbankingUserTextInDropdownList', '.selectTextInDropdownList']);
			var defaultTextOnDropdownList = $('.selectTextInDropdownList').text(); // 'select' text
			
			var isAnAccountHolderOrPoaSelected = !_self._isSelectSpecialText(onlineBankingUserDropDownSelector, excludedSelectionsOnDropdownList);
			var isDefaultValueSelected = _self._isSelectSpecialText(onlineBankingUserDropDownSelector, defaultTextOnDropdownList); 
			
			if (isAnAccountHolderOrPoaSelected) {
				_self._setSelectedTextToOnlineBankingUserNavigatorTitle(onlineBankingUserDropDownSelector);
			} else if (isDefaultValueSelected) {
				_self._setDefaultTitleToOnlineBankingUserNavigatorTitle();
			} else {
				_self._updateOnlineBankingUserNavigatorTitle();	
			}
		});
		
		var onlineBankingUserFirstNameSelector = "[id$=':productTabView'] [id$=personFirstName]";
		$('#wrapper').on('keyup change', onlineBankingUserFirstNameSelector, function(){
			var additionalEbankingUserText = $('.additionalEbankingUserTextInDropdownList').text();
			if (_self._isSelectSpecialText(onlineBankingUserDropDownSelector, additionalEbankingUserText)) {
				_self._updateOnlineBankingUserNavigatorTitle();	
			}
		});
		
		var onlineBankingUserLastNameSelector = "[id$=':productTabView'] [id$=personLastName]";
		$('#wrapper').on('keyup change', onlineBankingUserLastNameSelector, function(){
			var additionalEbankingUserText = $('.additionalEbankingUserTextInDropdownList').text();
			if (_self._isSelectSpecialText(onlineBankingUserDropDownSelector, additionalEbankingUserText)) {
				_self._updateOnlineBankingUserNavigatorTitle();	
			}
		});
	},
	
	_setSelectedTextToOnlineBankingUserNavigatorTitle : function(dropdownSelector) {
		var dropdownElement = $(dropdownSelector)[0];
		var selectedText = dropdownElement.options[dropdownElement.selectedIndex].text;
		$('.active > .onlineBankingUserTitle').html(selectedText);
	},
	
	_setDefaultTitleToOnlineBankingUserNavigatorTitle : function() {
		var index = $('.active > .onlineBankingUserIndex ').text();
		var defaultTile = Fintech.OnlineBankingUser.generateDefaultOnlineBankingUserName(index);
		$('.active > .onlineBankingUserTitle').text(defaultTile);
	},
	
	_isSelectSpecialText: function(dropdownSelector, specialTexts) {
		var dropdownElement = $(dropdownSelector)[0];
		var selectedText = dropdownElement.options[dropdownElement.selectedIndex].text;
		
		if (Array.isArray(specialTexts)) {
			return $.inArray(selectedText, specialTexts) != -1;	
		} else {
			return selectedText == specialTexts;
		}
	},
	
	_getSpecifalTexts: function(specialTextLabelSelectors) {
		var specialTexts = [];
		$(specialTextLabelSelectors).each(function() {
			var selector = this.toString();
			var label = $(selector)[0];
			var text = $(label).text();
			specialTexts.push(text.trim());
		});
		return specialTexts;
	},
	
	prepareListenerForUpdateNavigatorTitleDependOnFirstNameAndLastName: function() {
		var firstNameExceptAccountHolderFirstName = this.firstNameSelector + ":not([id*='accountHolderTabView'])";
		$('#wrapper').on('keyup change', firstNameExceptAccountHolderFirstName, function(){
			Fintech.DataGathering.updateComponentNavigatorTitle($(this));
		});
		
		var lastNameExceptAccountHolderFirstName = this.lastNameSelector + ":not([id*='accountHolderTabView'])";
		$('#wrapper').on('keyup change', lastNameExceptAccountHolderFirstName, function(){
			Fintech.DataGathering.updateComponentNavigatorTitle($(this));
		});
	},
	
	prepareListenerForUpdatePowerOfAttorneyNavigatorTitle: function() {
		var poaFirstNameSelector = "[id$=':powerOfAttorneyTabView'] [id$=personFirstName]";
		$('#wrapper').on('keyup change', poaFirstNameSelector, function(){
			Fintech.DataGathering.updatePowerOfAttorneyNavigatorTitle();
		});
		
		var poaLastNameSelector = "[id$=':powerOfAttorneyTabView'] [id$=personLastName]";
		$('#wrapper').on('keyup change', poaLastNameSelector, function(){
			Fintech.DataGathering.updatePowerOfAttorneyNavigatorTitle();
		});
	},
	
	// TODO: Need to be refactored later. Reference issue: AFT-214.
    // Since the Run check button is outside GF management zone, so we need trigger click event of a hidden button inside to trigger GF.
    prepareListenerForRunCheck: function () {
        var runCheckButtonSelector = "[id$='run-check-button']";
        $(runCheckButtonSelector).on("click", function() {
            Fintech.DataGathering.triggerRunningGuiFramework();
        });
    },
	
	updateComponentNavigatorTitle : function(element) {
		var firstName = element.parents('.component-wrapper').find('[id$=personFirstName]').val();
 		var lastName = element.parents('.component-wrapper').find('[id$=personLastName]').val();
 		var content = EMPTY_STRING;
 		if (_.isEmpty(firstName) && _.isEmpty(lastName)){
 			content = element.parent('.ui-tabs-panel').find('.defaultUnnamedClass ').text();
 		}else{
 			content = firstName + ' ' + lastName;
 		}
 		element.parent('.ui-tabs-panel').find('.navigator-tabs.active > .accountHolderTitle').first().find('label').first().text(content);
	},
	
	updateAccountHolderNavigatorTitle : function() {
		var selectedAccountHolderType = $('.ui-tabs-panel').find('.navigator-tabs.active > .accountHolderType').first().text();
		var selectedAccountHolderIndex = $('.ui-tabs-panel').find('.navigator-tabs.active > .navigatorIndex').first().text();
		var firstName = $('[id$=":accountHolderTabView"]').find(this.firstNameSelector).val();
		var lastName = $('[id$=":accountHolderTabView"]').find(this.lastNameSelector).val();
		
		var accountHolderNavigatorTitle = Fintech.AccountHolder.generateAccountHolderNavigatorTitle(firstName, lastName, selectedAccountHolderType, selectedAccountHolderIndex);
		
		$('.navigator-tabs.active > .accountHolderTitle').text(accountHolderNavigatorTitle);
	},
	
	_updateOnlineBankingUserNavigatorTitle : function() {
		var firstName = $('[id$=":productTabView"]').find(this.firstNameSelector).val();
		var lastName = $('[id$=":productTabView"]').find(this.lastNameSelector).val();
		
		var currentOnlineBankingUserTitleElement = $('.active > .onlineBankingUserTitle');
		var currentOnlineBankingUserIndexLabelElemnt = $(currentOnlineBankingUserTitleElement).siblings('.onlineBankingUserIndex');
		var index = $(currentOnlineBankingUserIndexLabelElemnt).text();
		var onlineBankingUserNavigatorTitle = Fintech.OnlineBankingUser.generateOnlineBankingUserNavigatorTitle(firstName, lastName, index);
		$(currentOnlineBankingUserTitleElement).text(onlineBankingUserNavigatorTitle);
	},
	
	updateDossierTitle: function() {
		var self = Fintech.DataGathering;
			var dossierTitleLabel = $(self.dossierTitleSelector);
			var dossierTitle = self.generateDossierTitle();
			dossierTitleLabel.text(dossierTitle);
	},
	
	generateDossierTitle: function () {
		var accountHolderTitles=$('.navigator-tabs > .accountHolderTitle');
		if (accountHolderTitles.length == 1 && $(accountHolderTitles.first()).text().indexOf(Fintech.AccountHolder.defaultUnnamedAccountHolder()) != -1){
			return Fintech.DataGathering.message.createNewDossierLabel;
		}
		var dossierTitle = Fintech.DataGathering.message.dossierTitle + " ";
		var accountHolderTitlesWithoutOpener = $.grep(accountHolderTitles, function(title){
			return $(title).siblings(".accountHolderType").text() != Fintech.AccountHolder.openerCaption()
		})
		return dossierTitle + $.map(accountHolderTitlesWithoutOpener,function(title){return $(title).text()}).join(" - ")
	},
	
	ignorePreventEmptyByContext: function(processContextSelector){
		var processContext = $("input[id$='"+processContextSelector+"']");	
		if (processContext != undefined &&  processContext.val() != "" &&  processContext.val() != "DATA_GATHERING"){
			Fintech.DataGathering.PreventEmpty.setIgnorePreventEmptyAllContainer();
		}		
	},
	
	updatePowerOfAttorneyNavigatorTitle: function() {
		var firstName = $('[id$=":powerOfAttorneyTabView"]').find(this.firstNameSelector).val();
		var lastName = $('[id$=":powerOfAttorneyTabView"]').find(this.lastNameSelector).val();
		var index = $('.navigator-tabs.active > .poaIndex ').text();
		var poaNavigatorTitle = Fintech.PowerOfAttorney.generatePowerOfAttorneyTitle(firstName, lastName, index);
		$('.navigator-tabs.active > .poaNavigatorTitle').text(poaNavigatorTitle);
	},
	
	initializeDataTabForCheckingPreventEmpty:function() {	
		var cpNewOption = false;
		if (Fintech.DataGathering.originalContainerData["accountHolderItem"] == undefined || Fintech.DataGathering.originalContainerData["accountHolderItem"] == ""){			
			cpNewOption = true;
			Fintech.DataGathering.PreventEmpty.IgnoreHelper._turnOnPrevenEmpty(".accountHolderItem");
		}		
		Fintech.DataGathering.PreventEmpty.registerContainerOptionForObservingChanges({container:".accountHolderItem", addNewOpt:cpNewOption});
		
		var boNewOption = false;
		if (Fintech.DataGathering.originalContainerData["beneficialOwnerItem"] == undefined || Fintech.DataGathering.originalContainerData["beneficialOwnerItem"] == ""){
			boNewOption = true;
			Fintech.DataGathering.PreventEmpty.IgnoreHelper._turnOnPrevenEmpty(".beneficialOwnerItem");
		}
		Fintech.DataGathering.PreventEmpty.registerContainerOptionForObservingChanges({container:".beneficialOwnerItem", addNewOpt:boNewOption});
		
		var ocNewOption = false;
		if(Fintech.DataGathering.originalContainerData["occupationItem"] == undefined || Fintech.DataGathering.originalContainerData["occupationItem"] == ""){
			ocNewOption = true;
			Fintech.DataGathering.PreventEmpty.IgnoreHelper._turnOnPrevenEmpty(".occupationItem");
		}
		Fintech.DataGathering.PreventEmpty.registerContainerOptionForObservingChanges({container:".occupationItem", addNewOpt:ocNewOption});
		
		var poaNewOption = false;
		if(Fintech.DataGathering.originalContainerData["powerOfAttorneyItem"] == undefined || Fintech.DataGathering.originalContainerData["powerOfAttorneyItem"] == ""){
			poaNewOption = true;
			Fintech.DataGathering.PreventEmpty.IgnoreHelper._turnOnPrevenEmpty(".powerOfAttorneyItem");
		}
		Fintech.DataGathering.PreventEmpty.registerContainerOptionForObservingChanges({container:".powerOfAttorneyItem", addNewOpt:poaNewOption});
		
		var productNewOption = false;
		if(Fintech.DataGathering.originalContainerData["productItem"] == undefined || Fintech.DataGathering.originalContainerData["productItem"] == ""){
			productNewOption = true;
			Fintech.DataGathering.PreventEmpty.IgnoreHelper._turnOnPrevenEmpty(".productItem");
		}
		Fintech.DataGathering.PreventEmpty.registerContainerOptionForObservingChanges({container:".productItem", addNewOpt:productNewOption});
		
		var onlineBankingUserNewOption = false;
		if(Fintech.DataGathering.originalContainerData["onlineBankingUserItem"] == undefined || Fintech.DataGathering.originalContainerData["onlineBankingUserItem"] == ""){
			onlineBankingUserNewOption = true;
			Fintech.DataGathering.PreventEmpty.IgnoreHelper._turnOnPrevenEmpty(".onlineBankingUserItem");
		}
		Fintech.DataGathering.PreventEmpty.registerContainerOptionForObservingChanges({container:".onlineBankingUserItem", addNewOpt:onlineBankingUserNewOption});
	},
	
	_concatString: function(firstString, secondString, separator) {
		if (firstString != EMPTY_STRING) {
			if (secondString != EMPTY_STRING) {
				return firstString.concat(separator, secondString);
			}
			return firstString;
		}
		return secondString;
	},
	
	isFirstAccountHolder: function() {
		return $('div[id$=":numberAccountHolder"] .select-account-holder-button').first().hasClass('active')
	},
	
	_switchViewMode: function(switchers, viewMode) {
		if (typeof switchers == 'object') {
			for (index in switchers) {
				var switcher = switchers[index];
				Fintech.DataGathering._switchViewMode(switcher, viewMode);
			}
		} else {
			if (typeof switchers == 'string'){
				switchers = window[switchers];
			}
			if (typeof switchers == 'function') {
				switchers(viewMode);
			}
		}
	},
	
	switchViewMode: function(args, viewMode) {
		if (args && !args.validationFailed) {
			Fintech.DataGathering._switchViewMode(['switchViewModePerson', 'switchViewModeAddress', 'switchViewModeFatcaQuestions'], viewMode);
		}
	},
	postRemoveAccountHolder : function() {
		var self = Fintech.DataGathering;
		var classes= $(".select-account-holder-button.active").attr('class').split(" ");				
		$.each(classes, function (index, value) {
				if ($.isNumeric(value)) {
					self._removeObjectFromErrorAccountHolderIndexes(parseInt(value));
					$.each(self.errorAccountHolderIndexes, function (errorIndex, errorValue) {
						if (errorValue > value) {
							self.errorAccountHolderIndexes[errorIndex] = errorValue-1;
						}
					});	
				}
			}
		);
	},
	_removeObjectFromErrorAccountHolderIndexes : function(item) {
		var self = Fintech.DataGathering;
		var startItemIndex = $.inArray(item, self.errorAccountHolderIndexes);
		if (startItemIndex >= 0) {
			var itemsFound = self.errorAccountHolderIndexes.filter(function(elem){
			                            return elem == item;
			                          }).length;
			self.errorAccountHolderIndexes.splice( startItemIndex , itemsFound );
		}
	},
	
	_hasErrorsOnTabs: function(){
		var errors= $(".ui-tabs-panels").find(".ui-state-error");
		return (typeof errors !== 'undefined' && errors.length > 0)
	},
	
	switchViewMode: function(viewMode){
		if(!this._hasErrorsOnTabs()){
			switchViewModeIndividualAH(viewMode);
			return true;
		}
		return false;
		
	},
	
	clearDataWhenDisableTab: function(container){
		if (container.closest(".ui-tabs-panel").attr("id").indexOf('beneficialOwnerTab') >= 0){
			Fintech.DataGathering.originalContainerData["beneficialOwnerItem"] = [];
		}
	},
	selectItemWhenTabChanged: function (xhr, status, args){		
		Fintech.DataGathering.TabHelper.selectItemWhenTabChanged(xhr.responseXML);		
	},
	maintainSpaceForWarningMessage: function() {
		$("[id$='documentTabPanel']").removeClass("warning-message-appeared");
		$("[id$='documentTabPanel']").addClass("warning-message-appeared");
	},
	handleResponsiveForCockpit: function(){
		$(document).on('click', '.cockpit-nav-btn', function(){
			$('.add-ons').toggleClass('show-up');
		});
	},
	onResultChecksReceived: function(checkResults) {
		Fintech.DataGathering.updateCheckResultsToCockpit(checkResults);
	},
	updateCheckResultsToCockpit: function(checkResults) {
		updateCheckResultsToCockpit([{
			name : 'checkResults',
			value : JSON.stringify(checkResults)
		}]);
	},
	// TODO: Need to be refactored later. Reference issue: AFT-214.
	// Since the Run check button is outside GF management zone, so we need trigger onchange event of a hidden field inside to update it.
	triggerRunningGuiFramework: function() {
		var triggerGuiFrameworkHiddenButtonSelector = "[id$='triggerRunningGuiFrameworkInput']";
		if($(this.accountHolderTabPanelSelector).attr("aria-hidden") === 'false'){			
			//Only trigger gui framework hidden button when account holder tab panel is focused
			$(triggerGuiFrameworkHiddenButtonSelector).trigger("change");
		}
	},
	scrollTop: function() {		
		$('.ui-tabs-panels').scrollTop('0px');
	},
	autoResizeProductAuthorityTable: function() {
		$("[id$='signingRightTabView'] [id$='productAuthoriyHeader'] [id$='productHeader']").removeClass("Container20").addClass("Container40");
		$("[id$='signingRightTabView'] [id$='productAuthoriyHeader'] [id$='authorityHeader']").removeClass("Container10").addClass("Container20");
		$("[id$='signingRightTabView'] [id$='paginationProductAuthority'] [id$='productLabel']").removeClass("Container20").addClass("Container40");
		$("[id$='signingRightTabView'] [id$='paginationProductAuthority'] [id$='authorityLabel']").removeClass("Container10").addClass("Container20");
	},
	preventReloadPage: function(e) {
		if ((e.which || e.keyCode) == 116 || (e.ctrlKey && (e.keyCode == 82 && e.which == 82))) {
			e.preventDefault();	
			PF('preventReload').show();
		}
	}

}

Fintech.DataGathering.TabHelper = {
	itemListInTab : {
		itemAccountHolder : {
			tabId : 'accountHolderTab',
			tabPagination : 'paginationAccountHolder'
		},
		itemSigningRight : {
			tabId : 'signingRightTab',
			tabPagination : 'paginationSigningRight'
		},
		itemPowerOfAttorney : {
			tabId : 'powerOfAttorneyTab',
			tabPagination : 'paginationPowerOfAttorney'
		},
		itemBeneficialOwner : {
			tabId : 'beneficialOwnerTab',
			tabPagination : 'paginationBeneficialOwner'
		},
		itemProduct : {
			tabId : 'productTab',
			tabPagination : 'paginationProduct'
		},
	},
	
	subTabs:{

	},
	
	selectItemWhenTabChanged: function(responseXML) {		
		var self = Fintech.DataGathering.TabHelper;
		var hasItem = self._hasItemFromResponseXML(self.itemListInTab,responseXML);		
		if (hasItem){
			self._selectFirstItemInList(self.itemListInTab,responseXML);
		}else{
			self._selectFirstSubTab(self.subTabs,responseXML);
		}
	},
	
	_selectFirstItemInList: function (itemListInTab,responseXML){
		 var self = Fintech.DataGathering.TabHelper;			 
		 var currentTab = self._getItemFromResponseXML(itemListInTab,responseXML);
		 if (currentTab == undefined){
			 return currentTab;
		 } 
	
		 var anchor = $("div[id$="+currentTab.tabPagination+"]").find('a.guifrm_navigator:first'); 
		 if (anchor.length != 0){
			 anchor.click();
		 }	
	},
	
	_selectFirstSubTab: function (subTabs,responseXML){		
		var self = Fintech.DataGathering.TabHelper;		
		var subTab = self._getItemFromResponseXML(subTabs,responseXML);	
		if (subTab != undefined){			 
			var widgetVar = self._getWidgetVarById(subTab.subTabWirgetVar);
			if (widgetVar != undefined){
				widgetVar.select(0);				 
			}				 
		}
	},
	
	_hasItemFromResponseXML: function (items,responseXML){
		var exist = false;
		$.each(items, function( key, item ) {
			 if ($(responseXML).find("update[id$="+item.tabId+"]").length  != 0 ){
				 exist = true;
				 return;
			 }			  
		 });
		return exist;
	},
	
	_getItemFromResponseXML: function (items,responseXML){
		var result = undefined;
		$.each(items, function( key, item ) {
			 if ($(responseXML).find("update[id$="+item.tabId+"]").length  != 0 ){
				 result = item;
				 return;
			 }			  
		 });
		return result;
	},
	
	_getWidgetVarById : function(id) {
		var self = Fintech.DataGathering.TabHelper;
		for ( var propertyName in PrimeFaces.widgets) {
			if (self._checkObjectExists(PrimeFaces.widgets[propertyName])) {
				var widget = PrimeFaces.widgets[propertyName];
				if (self._checkObjectExists(widget.id) && widget.id.match(id+"$")) {						
					return widget;
				}
			}
		}
	},
	
	_checkObjectExists : function (obj){
		if(obj == null || typeof(obj) == 'undefined' || obj.length == 0) {
			return false;
		}
		return true;
	}
}
Fintech.DocumentComponent = Fintech.DataGathering || {};

Fintech.DocumentComponent.storeInvalidTabs = {
	alibabaVaBonmuoitencuop : function(anchors) {
		var invalidTabs = Fintech.DocumentComponent.collectInvalidTabs($("[id$='individualDgTab']"));
		$("[id$='"+storageField+"']").val(invalidTabs);
	},
	
};

Fintech.DocumentComponent.updateInvalidTabState = function (oldStatus){
	if(oldStatus != null && oldStatus != undefined){
		var entityTab = $("[id$='individualDgTab']");
		for (var i in oldStatus) {
			entityTab.find("a[href='"+PrimeFaces.escapeClientId(oldStatus[i])+"']").addClass("ui-state-error");
		}
	}
};

Fintech.DocumentComponent.prepareForUploadingDocument = function() {
	var _self = Fintech.DataGathering;
	_self.getLastItemsData();
};

Fintech.DocumentComponent.handleUploadFile = function() {
	if($(".ui-fileupload-filename").text()){
		PF('documentUploadFileDialogVar').hide();
		return true;
	} else {
		$("[id$='fileNameMessage']").css("display", "inline");
		return false;
	}
};


$(document).on("keydown", Fintech.DataGathering.preventReloadPage);
Fintech.DataGathering.message = Fintech.DataGathering.message || {}; 