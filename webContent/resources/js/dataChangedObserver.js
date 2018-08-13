function DataChangedObserver(){
	this.yesActionCallback = null;
	this.noActionCallback = null;
	var registerContainers = new Array();
	var checkingContainers = new Array();
	var containerChanged = new Array();
	this.isLastPage = false;
	this.isChangedByOther = false;
	this.currentIndex = -1;
	this.deleteLastItem = false;
	
	this.registerContainerForObservingChanges = function(containerSelector) {
		var options = {container: containerSelector};
		this.registerContainerOptionForObservingChanges(options);
	}
	this.registerContainerOptionForObservingChanges = function(options){
		watchChangesContainer(options);
	}
	this.unregisterWatchChanges = function() {
		registerContainers.length = 0;
		containerChanged.length = 0;
	}
	
	this.setCurrentIndex = function (_currentIndex){
		this.currentIndex = _currentIndex;
	}
	
	this.getCurrentIndex = function (){
		return this.currentIndex;
	}
	
	this.setIsLastPage = function (_isLastPage){
		this.isLastPage = _isLastPage;
	}
	
	this.getIsLastPage = function (){
		return this.isLastPage;
	}
	
	this.setDeleteLastItem = function (_deleteLastItem){
		this.deleteLastItem = _deleteLastItem;
	}
	
	this.getDeleteLastItem = function (){
		return this.deleteLastItem;
	}
	
	
	this.setIsChangedByOther = function (_isChangedByOther){
		this.isChangedByOther = _isChangedByOther;
	}
	
	this.getIsChangedByOther = function (){
		return this.isChangedByOther;
	}
	/*
	 * Unregister data changed of a container
	 * Remove that container in registerContainers
	 */
	this.unregisterContainerWatchChanges = function(containers) {
		if(typeof registerContainers !== 'undefined' && registerContainers.length > 0) {
			$.each(registerContainers, function(index, value) {
				$.each(containers, function(checkingIndex, container) {
					if(typeof value !== 'undefined' && container === value) {			
						registerContainers.splice(index, 1);
						if(containerChanged){
							$.each(containerChanged, function(conatainerIndex,containerSelector){
								if(containerSelector && container === containerSelector){
									containerChanged.splice(conatainerIndex,1);
								}
							});
						}
					}
				});
			});
		}
	}
	this.canProcessOnDataChanged = function(dataChangedYesAction, dataChangedNoAction, checkingContainerSelectors,currentPageIsLastPage,changedByOthers){
		this.yesActionCallback = dataChangedYesAction;
		this.noActionCallback = dataChangedNoAction;
		checkingContainers = checkingContainerSelectors;
		
		var isChanged = (typeof checkingContainers !== 'undefined' ? checkDataChangedBySelector(checkingContainers,currentPageIsLastPage,changedByOthers) : checkDataChanged(currentPageIsLastPage,changedByOthers));
		
		if(!isChanged){
			PF('dataChangedConfirmDlg').show();
		}else if(typeof checkingContainers !== 'undefined'){			
			this.unregisterContainerWatchChanges(checkingContainers);
		} else {
			this.unregisterWatchChanges();
		}
		return isChanged;
	}
	this.confirmCallback = function(){
		if(checkingContainers){
			this.unregisterContainerWatchChanges(checkingContainers);
		}else{
			this.unregisterWatchChanges();
		}
		if(containerChanged) {
			$.each(containerChanged, function(index, value) {
				if (typeof value !== 'undefined') {
					var options = $.data($(value)[0], 'options');
					if(options) {
						var yesCallBack = options.yesCallBack;
						if(yesCallBack && yesCallBack()) {
							yesCallBack();
						}
					}
				}
			});
		}
		if(typeof this.yesActionCallback == 'function') {
			this.yesActionCallback();
		} 
	}
	this.declineCallback = function(){
		if(containerChanged) {
			$.each(containerChanged, function(index, value) {
				var options = $.data($(value)[0], 'options');
				if(options) {
					var noCallBack = options.noCallBack;
					if(noCallBack && noCallBack()) {
						noCallBack();
					}
				}
			});
		}
		if(this.noActionCallback){
			this.noActionCallback();
		}
	}
	
	this.updateOriginalDataChildByParentIndex = function (currentParentIndex,childContainer){
		var childs = $(childContainer).attr('class')+'_childrens';
		var currentChild = $(childContainer).attr('class')+'_current';
		var result = $.grep(Fintech.DataGathering.originalContainerData[childs], function(e){ return e.indexParent == currentParentIndex; });
		if (result.length == 1) {
			Fintech.DataGathering.originalContainerData[currentChild] =  result[0].data;
		}
	},
	
	this.addOriginalChildDataToParent = function (container,childContainer){
		var childClass= $(childContainer).attr('class');
		var parentClass = $(container).attr('class');
		var dataChild = Fintech.DataGathering.originalContainerData[childClass][0];
		data =  Fintech.DataGathering.originalContainerData[parentClass][0] + '&' + dataChild;
		if ($.inArray(data, Fintech.DataGathering.originalContainerData[parentClass]) == -1)
		{
			Fintech.DataGathering.originalContainerData[parentClass].push(data);
		}
	},
	
	function checkDataChanged(isLastPage,changedByOthers) {
		containerChanged.length = 0;
		if(typeof registerContainers !== 'undefined' && registerContainers.length > 0) {
			$.each(registerContainers, function(index, value) {
				detectsContainersChanged(value,containerChanged,isLastPage,changedByOthers);
			});
		}
		return containerChanged.length > 0;
	}
	function checkDataChangedBySelector(checkingContainers,isLastPage,changedByOthers) {
		containerChanged.length = 0;
		if(typeof checkingContainers !== 'undefined' && typeof registerContainers !== 'undefined' && registerContainers.length > 0) {
			$.each(registerContainers, function(index, value) {
				$.each(checkingContainers, function(checkingIndex,checkingContainer){					
					if(checkingContainer === value) {
						detectsContainersChanged(value,containerChanged,isLastPage,changedByOthers);
					}
				});
			});
		} 
		return containerChanged.length > 0;
	}
	
	

	function detectsContainersChanged(containerObject,containers,isLastPage,changedByOthers){
		var isChanged = $(containerObject).hasChanged(isLastPage,changedByOthers);
		if(isChanged) {
			containers[containers.length] = containerObject.selector;
		} else {
			var options = $.data($(containerObject)[0], 'options');
			if(options) {
				var checkSpecialCaseFunc = options.checkSpecialCaseFunc;
				if(checkSpecialCaseFunc && checkSpecialCaseFunc()) {
					containers[containers.length] = containerObject.selector;
				}
			}
		}
	}
	/**
	 * same with registerContainerForObservingChanges but it has some more configurations as:
	 *  container : selector of container.
	 *  noCallBack: callback function if user choose "No".
	 *  yesCallBack: callback function if user choose "Yes".
	 *  checkSpecialCaseFunc: using for check data change in some specific cases.
	 * @param options
	 */
	function watchChangesContainer (options) {
		var defaults = {container: '', yesCallBack: '', noCallBack: '', checkSpecialCaseFunc: '', addNewOpt:false, leaveLastPage:false
				, storeChildData: false, currentPageOfChildIsLastPage: false, indexParentContainer: -1};
		var opts = $.extend({}, defaults, options);
		
		var addNew = true;
		$.each(registerContainers, function(index, value) {
			if(opts.container === value) {
				registerContainers[index] = opts.container; 
				$(opts.container).watchChanges(opts);
				addNew = false;
				return false;
			}
		});
		if(addNew) {
			registerContainers[registerContainers.length] = opts.container;
			$(opts.container).watchChanges(opts);
		}
		$.data($(opts.container)[0], 'options', opts);
	}
	
}




/*jquery function is using for watch container change*/
(function ($) {
	 
	$.fn.watchChanges = function (options) {
		return this.each(function () {
			
			var	serializeContainer = collectElements(this).filter(function () {return $.trim(this.value);}).serialize();
			if (options.leaveLastPage){
				$.data(this, 'lastItem', serializeContainer);
				storeDataToArrayLastItem(this.className+"_lastItem",serializeContainer);
			}else if (options.addNewOpt != null && options.addNewOpt){
				$.data(this, 'lastItem', serializeContainer);				
				$.data(this, 'originalData', serializeContainer);
				storeDataToArray(this.className,serializeContainer);
				storeDataToArrayLastItem(this.className+"_lastItem",serializeContainer);
			}else if(options.storeChildData){
				var childsData = this.className+'_childrens';
				if (options.currentPageOfChildIsLastPage){
					storeLastItemDataForChilds(this.className,options.indexParentContainer,serializeContainer);										
				}else{
					var data = $.data(this, 'lastItem');
					storeLastItemDataForChilds(this.className,options.indexParentContainer,data);	 
				}
			}
		});
	};
 
	$.fn.hasChanged = function (_currentPageIsLastPage,_changedByOthers) {
		var hasChanged = false;
		var currentPageIsLastPage = _currentPageIsLastPage;
		if (currentPageIsLastPage == null || currentPageIsLastPage == 'undefined'){
			currentPageIsLastPage = false;
		}
		if (_changedByOthers){
			return _changedByOthers;
		}
		
		this.each(function (index, container) {			
			var lastItem = Fintech.DataGathering.originalContainerData[container.className+'_lastItem'][0];
			var currentSerialize = collectElements(this).filter(function () {return $.trim(this.value);}).serialize();
			var originalData = Fintech.DataGathering.originalContainerData[container.className];
			
			if (currentPageIsLastPage){			
				if (typeof currentSerialize !== 'undefined' ){					
					if (originalData != null &&  $.inArray(currentSerialize, originalData) == -1){
						hasChanged = true;
						return false;
					}
				}
			}else{
				if (lastItem != undefined &&  lastItem != null && $.inArray(lastItem, originalData) == -1) {
					hasChanged = true;
					return false;
				}
			}
		});
 
		return hasChanged;
	};

	function collectElements(object){
		var filterElements = $(':input:not([type="hidden"],[type="autocomplete"])', object);
		var autocompleteElements = $(':input[type="autocomplete"]', object).siblings('input:hidden');
		return $.merge(filterElements,autocompleteElements);
	}
	 
	function storeLastItemDataForChilds (className,indexParent,data){
		var childsData = className+'_childrens';
		
		var result = $.grep(Fintech.DataGathering.originalContainerData[childsData], function(e){ return e.indexParent == indexParent; });
		if (result.length == 0) {
			Fintech.DataGathering.originalContainerData[childsData].push(
					{'indexParent':indexParent,'data':data});
		} else if (result.length == 1) {
			result[0].data = data;
		}		
	}
	
	function storeDataToArrayLastItem (className, data){
		if ($.inArray(data, Fintech.DataGathering.originalContainerData[className]) == -1){
			Fintech.DataGathering.originalContainerData[className] = [];
			Fintech.DataGathering.originalContainerData[className].push(data);			
		}
	}
	
	function storeDataToArray (className, data){
		if ($.inArray(data, Fintech.DataGathering.originalContainerData[className]) == -1)
		{	
			if (sessionStorage.getItem(className) != undefined && sessionStorage.getItem(className) != ""){
				data = sessionStorage.getItem(className);
				sessionStorage.removeItem(className);
			}
			if (data.toLowerCase().indexOf("personfirstname") < 0 && data.toLowerCase().indexOf("personlastname") < 0){				
				Fintech.DataGathering.originalContainerData[className].push(data);			
			}
		}
	}
	
	
}).call(this, jQuery);


