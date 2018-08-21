var Fintech = Fintech || {};

Fintech.PowerOfAttorney = {
	onLeavePoaHandler: function() {
		onPoaLeave([ {} ]);
	},
	
	defaultPowerOfAttorneyTitle: function() { 
		return $('.ui-tabs-panel').find('.defaultUnnamedPOA').first().text();
	},
	
	generatePowerOfAttorneyTitle : function(firstName, lastName, index) {
		var powerOfAttorneyNavigatorTitle = this._generatePersonName(firstName, lastName);
		
		powerOfAttorneyNavigatorTitle = powerOfAttorneyNavigatorTitle || this._retrievePowerOfAttorneyTitle(index);
		return powerOfAttorneyNavigatorTitle;
	},
	
	generateDefaultPowerOfAttorneyTitle: function(index) {
		return this._retrievePowerOfAttorneyTitle(index);
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
	
	_retrievePowerOfAttorneyTitle : function(poaIndex) {
		return this.defaultPowerOfAttorneyTitle().concat(" ").concat(poaIndex);
	}
};