$(function () {
	var personComponentInPoA = $("div[id*='powerOfAttorneyTabView'][id*='PersonComponent']");
	if (typeof personComponentInPoA == 'undefined') return;
	var emptyBox30 = personComponentInPoA.find(".person-component-edit-mode div.EmptyBox30");
	if (emptyBox30 == 'undefined' || emptyBox30.length < 3) return;
	emptyBox30.eq(2).remove();
	emptyBox30.eq(0).remove();
});