$(function() {
	Fintech.DataGathering.prepareListenerForUpdateOnlineBankingUserNavigatorTitle();
});

var Fintech = Fintech || {};

Fintech.OnlineBankingUserManagement = {
	triggerChangeFieldAssignOnlineBankingUser: function() {
		$('select[id$="relatedOnlineBankingUser_input"]').change();
	}
};