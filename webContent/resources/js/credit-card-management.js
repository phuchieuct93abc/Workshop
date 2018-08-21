var Fintech = Fintech || {};


Fintech.CreditCardManagement = Fintech.CreditCardManagement || {
	creditCardType: '[id$=":creditCardType"]',
	creditAssignee: '[id$=":creditAssignee"]',
	partnerCardFirstName: '[id$=":partnerCardFirstName"]',
	partnerCardLastName: '[id$=":partnerCardLastName"]',
	withdrawLimitPerMonth: '[id$="creditCardItem:withdrawLimitPerMonth_input"]',
	paymentType: '[id$=":paymentType"]',
	creditCardManagementWrapper: '[id$=":creditCardManagementWrapper"]',
	
	NAVIGATOR_COLUMN_INDEX : {
		CREDIT_CARD_TYPE: 0,
		CREDIT_CARD_ASSIGNEE: 1,
		WITHDRAW_LIMIT_PER_MONTH: 2,
		PAYMENT_TYPE: 3
	},
	
	updateComponent: function(id){
		var id = $('[id$=":' + id + '"]').attr('id');
		console.log('update credit card management component');
		PrimeFaces.ab({s: "", u: id, g: false});
	},

	prepareListenerForUpdateCreditCardNavigatorTitle: function() {
		var self = this;
		self.listenOnCreditCardType();
		self.listenOnWithdrawLimitPerMonth();
		self.listenOnPaymentType();
		self.listenOnCreditAssignee();
	},

	listenOnCreditCardType : function() {		
		var self = this;
		$(document).on('change', self.creditCardType, function(){
			var creditCardType = $(this).find(':selected').text();
			self._updateNavigatorTitle(creditCardType, self.NAVIGATOR_COLUMN_INDEX.CREDIT_CARD_TYPE);
		});

	},
	
	listenOnCreditAssignee: function(){
		var self = this;
		$(document).on('change', self.creditAssignee, function(){
			var assigneeColumnIndex =  self.NAVIGATOR_COLUMN_INDEX.CREDIT_CARD_ASSIGNEE; 
			var assigneeValueOnNavigator = $(self.creditCardManagementWrapper).find('.navigator-tabs.active').find("label").eq(assigneeColumnIndex).text();
			var creditAssignee = $(this).find(':selected').text();
			if(creditAssignee != assigneeValueOnNavigator){
				self._updateNavigatorTitle(creditAssignee, assigneeColumnIndex);
			}			
		});
	},
	
	listenOnWithdrawLimitPerMonth: function(){	
		var self = this;
		$(document).on('change', self.withdrawLimitPerMonth, function(){
			var withdrawLimitPerMonth = $(this).val();
			self._updateNavigatorTitle(withdrawLimitPerMonth, self.NAVIGATOR_COLUMN_INDEX.WITHDRAW_LIMIT_PER_MONTH);
		});
	},
	
	listenOnPaymentType: function(){
		var self = this;		
		$(document).on('change', self.paymentType, function(){
			var index = -1;
			$(this).find('td').each(function(i){
				if($(this).find(':checked').length > 0){
					index = i;
					return false;
				}
			});
			var paymentType = $(this).find('td').eq(index).text() || EMPTY_STRING;	
			self._updateNavigatorTitle(paymentType, self.NAVIGATOR_COLUMN_INDEX.PAYMENT_TYPE);
		});

	},
	
	_updateNavigatorTitle: function(value, columnIndex){
		var self = this;
		var $navigatorTitle = $(self.creditCardManagementWrapper).find('.navigator-tabs.active').find("label").eq(columnIndex);
		$navigatorTitle.html(value);
	}
	
}

$(function() {
	Fintech.CreditCardManagement.prepareListenerForUpdateCreditCardNavigatorTitle();	
});
