var Fintech = Fintech || {};

Fintech.OnlineBankingUser = {
		
	SELECTED_ONLINE_BANKING_USER: '[id$=":selectOnlineBankingUser_guiFrmInsideUIRepeat"]',
	
	
	defaultOnlineBankingUserName: function() { return $('.ui-tabs-panel').find('.defaultUnnamedEbankingUser').first().text();},
	
	
	generateOnlineBankingUserNavigatorTitle : function(firstName, lastName, index) {
		var onlineBankingUserNavigatorTitle = this._generatePersonName(firstName, lastName);
		
		if (!onlineBankingUserNavigatorTitle) {
			onlineBankingUserNavigatorTitle = this._retrieveoOnlineBankingUserDefaultName(index);
		}
		return onlineBankingUserNavigatorTitle;
	},
	
	generateDefaultOnlineBankingUserName: function(index) {
		return this._retrieveoOnlineBankingUserDefaultName(index);
	},
	
	_generatePersonName : function(firstName, lastName) {
		if (firstName && lastName) {
			return firstName.concat(" ").concat(lastName);
		}
		if (firstName) {
			return firstName;
		}
		return lastName;
	},
	
	_retrieveoOnlineBankingUserDefaultName : function(eBankingUserIndex) {
		return this.defaultOnlineBankingUserName() + " " + eBankingUserIndex;
	}
};