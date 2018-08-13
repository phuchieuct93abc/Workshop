;Fintech.DataGathering = Fintech.DataGathering || {};
Fintech.DataGathering.PreventEmpty = {
	dataChangedObserversPool:[],
	
		
	setIgnorePreventEmptyAllContainer: function (){
		Fintech.DataGathering.PreventEmpty.IgnoreHelper.turnOffPrevenEmptyAll();
	},
	
	grantingToIgnoreHandleCheckEmpty: function() {
		Fintech.DataGathering.PreventEmpty.IgnoreHelper.turnOffPrevenEmptyAll();		
	},
	
	
	
	initDataChangedObserver :  function (container){
		var self = Fintech.DataGathering.PreventEmpty;
		var result = $.grep(self.dataChangedObserversPool, function(e){ return e.container == container; });
		if (result.length == 0) {
			self.dataChangedObserversPool.push({'container':container,'object':new DataChangedObserver()});
		}
		return self.dataChangedObserversPool[self.dataChangedObserversPool.length - 1]; 
	},
	
	getActiveDataChangedObserver: function (container){
		var self = Fintech.DataGathering.PreventEmpty;
		if(self.dataChangedObserversPool.length > 0){
			var result = $.grep(self.dataChangedObserversPool, function(e){ return e.container == container; });
			if (result.length == 0) {
				return self.initDataChangedObserver(container);
			} else if (result.length == 1) {
				return result[0].object;
			}
			return self.dataChangedObserversPool[self.dataChangedObserversPool.length - 1];
		}
		return undefined;
	},
	
	registerContainerOptionForObservingChanges: function (options){
		var self = Fintech.DataGathering.PreventEmpty;
		if (self.getActiveDataChangedObserver(options.container) == undefined){
			self.initDataChangedObserver(options.container);
		}
		Fintech.DataGathering.PreventEmpty.IgnoreHelper.addIgnoreContainer(options.container);
		self.getActiveDataChangedObserver(options.container).registerContainerOptionForObservingChanges(options);				
	},
	
	handleCheckEmpty : function (navigateItemClass,callBackFunc,containers){		
		var self = Fintech.DataGathering.PreventEmpty;
		var numberOfItems = $(navigateItemClass).length;
		if (Fintech.DataGathering.PreventEmpty.IgnoreHelper.isIgnoreCheckWithContainer(containers[0]) || numberOfItems == 0){			
			if(typeof callBackFunc == 'function') {
				callBackFunc();
				return false;
			}
		}
		
		var self = Fintech.DataGathering.PreventEmpty;		
		var currentPageIsLastPage = self.isWorkingOnLastPage(navigateItemClass)
		var changedByOthers = false;
		if (currentPageIsLastPage){
			changedByOthers = self.getActiveDataChangedObserver(containers[0]).getIsChangedByOther();
		}
				
		var canProcess = self.getActiveDataChangedObserver(containers[0]).canProcessOnDataChanged(callBackFunc, undefined, containers, currentPageIsLastPage,changedByOthers);
		if(canProcess){
			if (containers[1] != undefined && containers[1] != null && containers[1] != ''){
				self.notifyChangedToParentContainer(containers[1]);
			}
			self.getActiveDataChangedObserver(containers[0]).setIsChangedByOther(false);
			Fintech.DataGathering.PreventEmpty.IgnoreHelper._turnOnPrevenEmpty(containers[0]);
			self.callbackFunc(containers[0]);
		}
	},
	
	onCompleteAddItem: function(containers){
		var self = Fintech.DataGathering.PreventEmpty;
		self.registerContainerOptionForObservingChanges({container:containers, addNewOpt:true});
		self.getActiveDataChangedObserver(containers).setIsLastPage(true);
	},
	

	
	onStartDeleteItem: function(navigateItemClass, index, container){		
		var self = Fintech.DataGathering.PreventEmpty;
		var numberOfItems = $(navigateItemClass).length;
		var deleteLastItem = (numberOfItems - 1) == index;
		self.getActiveDataChangedObserver(container).setDeleteLastItem(deleteLastItem);
	},
	
	onCompleteDeleteItem: function(container){		
		var self = Fintech.DataGathering.PreventEmpty;
		var deleteLastItem = self.getActiveDataChangedObserver(container).getDeleteLastItem();
		if (deleteLastItem){
			Fintech.DataGathering.PreventEmpty.IgnoreHelper._turnOffPrevenEmpty(container);
		}else{
			self.getActiveDataChangedObserver(container).setDeleteLastItem(false);
		}
	},
	
	
	onStartSwitchItem: function(currentIndex,isLastPage,container){
		var self = Fintech.DataGathering.PreventEmpty;
		var leaveLastPage = false;
		if (self.getActiveDataChangedObserver(container).getIsLastPage() && !isLastPage){
			leaveLastPage = true;
		}
		self.registerContainerOptionForObservingChanges({container:container,addNewOpt:false,leaveLastPage:leaveLastPage});		
		self.getActiveDataChangedObserver(container).setIsLastPage(isLastPage);
		self.getActiveDataChangedObserver(container).setCurrentIndex((currentIndex +1));
		self.getActiveDataChangedObserver(container).setIsChangedByOther(false);
	},
	
	callbackFunc: function (container){
		var self = Fintech.DataGathering.PreventEmpty;
		self.getActiveDataChangedObserver(container).confirmCallback();
	},
	
	isWorkingOnLastPage: function (navigateItemClass){
		var paging = $(navigateItemClass);		
		var sizePages = paging.length;		
		var currentPage = -1;
		$.each(paging, function (index, page) {
			if ($(page).find('span').hasClass('active')) {
				currentPage = index;
				return false;
			}
		});
		return (sizePages == (currentPage + 1));
	},
	
	getCurrentIndex: function (navigateItemClass){
		var paging = $(navigateItemClass);
		var currentPage = -1;
		$.each(paging, function (index, page) {
			if ($(page).find('span').hasClass('active')) {
				currentPage = index;
				return false;
			}
		});
		return  (currentPage + 1 );
	},
	
	notifyChangedToParentContainer : function (container){
		var self = Fintech.DataGathering.PreventEmpty;
		self.getActiveDataChangedObserver(container).setIsChangedByOther(true);
	},
	
	
	addOriginalChildDataToParent: function(container,childContainer){
		var self = Fintech.DataGathering.PreventEmpty;
		self.getActiveDataChangedObserver(container).addOriginalChildDataToParent(container,childContainer);
	},
	
	storeLastItemOfChildren : function (classIndexChild,container,classIndexParent){
		var self = Fintech.DataGathering.PreventEmpty;		
		var currentPageOfChildIsLastPage = self.isWorkingOnLastPage(classIndexChild);	
		var currentParentIndex = self.getCurrentIndex(classIndexParent);
		self.registerContainerOptionForObservingChanges({container:container, storeChildData:true, currentPageOfChildIsLastPage:currentPageOfChildIsLastPage, 
			indexParentContainer:currentParentIndex});
	},
	
	updateOriginalDataChildByParentIndex: function (container,childContainer){
		var self = Fintech.DataGathering.PreventEmpty;
		var currentIndex = self.getActiveDataChangedObserver(container).getCurrentIndex();		
		self.getActiveDataChangedObserver(container).updateOriginalDataChildByParentIndex(currentIndex,childContainer);
		self.registerContainerOptionForObservingChanges({container:childContainer, addNewOpt:false});
	},
	
	setCallbackFromUpload: function (){
		sessionStorage.setItem("accountHolderItem", Fintech.DataGathering.originalContainerData["accountHolderItem"]);
		sessionStorage.setItem("beneficialOwnerItem", Fintech.DataGathering.originalContainerData["beneficialOwnerItem"]);
		sessionStorage.setItem("occupationItem", Fintech.DataGathering.originalContainerData["occupationItem"]);
		sessionStorage.setItem("powerOfAttorneyItem", Fintech.DataGathering.originalContainerData["powerOfAttorneyItem"]);
		sessionStorage.setItem("signatoryItem", Fintech.DataGathering.originalContainerData["signatoryItem"]);
		sessionStorage.setItem("productItem", Fintech.DataGathering.originalContainerData["productItem"]);
		sessionStorage.setItem("debtorItem", Fintech.DataGathering.originalContainerData["debtorItem"]);
	}	
	
};



Fintech.DataGathering.PreventEmpty = Fintech.DataGathering.PreventEmpty || {};
Fintech.DataGathering.PreventEmpty.IgnoreHelper = {
	ignoreContainerPool:[],
	
	addIgnoreContainer: function (container){		
		var self = Fintech.DataGathering.PreventEmpty.IgnoreHelper;
		var result = self._getContainerBy(container);
		if (result.length == 0) {
			self.ignoreContainerPool.push({'container':container,'isIgnore':false});
		}		
	},
	
	isIgnoreCheckWithContainer: function (container){		
		var self = Fintech.DataGathering.PreventEmpty.IgnoreHelper;
		var isIgnore = self._getStatusOfContainer(container);		
		if (isIgnore){
			self._turnOnPrevenEmpty(container);
		}
		return isIgnore;
	},
	
	_getStatusOfContainer: function (container){		
		var self = Fintech.DataGathering.PreventEmpty.IgnoreHelper;
		var result = self._getContainerBy(container);
		if (result.length == 1) {
			return result[0].isIgnore; 			
		}
		return false;
	},
	
	
	turnOffPrevenEmptyAll: function (){
		var self = Fintech.DataGathering.PreventEmpty.IgnoreHelper;
		if (self.ignoreContainerPool.length > 0){
			self.ignoreContainerPool.forEach(function (container){
				self._turnOffPrevenEmpty(container.container);
			});
		}		
	},
	
	_turnOffPrevenEmpty: function (container){
		var self = Fintech.DataGathering.PreventEmpty.IgnoreHelper;
		self._togglePreventEmpty(container,true);
		
	},
	
	_turnOnPrevenEmpty: function (container){
		var self = Fintech.DataGathering.PreventEmpty.IgnoreHelper;
		self._togglePreventEmpty(container,false);
	},
	
	_togglePreventEmpty: function (container,isIgnore){		
		var self = Fintech.DataGathering.PreventEmpty.IgnoreHelper;
		var result = self._getContainerBy(container);		
		if (result.length == 1) {
			result[0].isIgnore = isIgnore;			
		}
	},
	
	_getContainerBy: function (container){
		var self = Fintech.DataGathering.PreventEmpty.IgnoreHelper;
		var result = $.grep(self.ignoreContainerPool, function(e){ return e.container == container; });
		return result;
	},
		
};

Fintech.DataGathering.Navigator = {
	onCompleteAddNewItem: function (args, callBackFunc){
		if(args.canAddNewItem){ /**Defined in ch.axonivy.fintech.standard.guiframework.bean.Constant.CAN_ADD_NEW_ITEM_PRIMEFACES_ARG*/
			callBackFunc();
		} else {
			PF('dataChangedConfirmDlg').show();
		}
	}	
};


	





