var Fintech = Fintech || {};

Fintech.DebitCard = Fintech.DebitCard || {
	_debitCardTypeSelectorId: "[id*='productTabView'][id$='debitCardItem:debitCardType_input']",
	_assigneeSelectorId: "[id*='productTabView'][id$='debitCardItem:debitAssignee_input']",
	_withdrawLimitPerMonthSelectorId: "[id*='productTabView'][id$='debitCardItem:withdrawLimitPerMonth_input']",
	_withdrawLimitPerDaySelectorId: "[id*='productTabView'][id$='debitCardItem:withdrawLimitPerDay_input']",
	_defaultNameUnknownDebitCardSelectorId: "[id*='productTabView'][id$='defaultNameUnknownDebitCard']",
	_debitCardTypeNavDisplayValueSelectorId: "[id*='productTabView'][id$='debitCardTypeNavDisplayValue']",
	_debitAssigneeNavDisplayValueSelectorId: "[id*='productTabView'][id$='debitAssigneeNavDisplayValue']",
	_debitCardWithdrawLimitNavDisplayValueSelectorId: "[id*='productTabView'][id$='debitCardWithdrawLimitNavDisplayValue']",
	registerChangeEventListener: function() {
		var self = this;
		$('#wrapper').on('change focusout', self._debitCardTypeSelectorId, function() {
			self._handleDebitCardTypeChangeEvent(this);
		});

		$('#wrapper').on('change focusout', self._assigneeSelectorId, function() {
			self._handleDebitAssigneeChangeEvent(this);
		});

		$('#wrapper').on('change focusout', self._withdrawLimitPerMonthSelectorId, function() {
			self._handleWithdrawChangeEvent(this);
		});

		$('#wrapper').on('change focusout', self._withdrawLimitPerDaySelectorId, function() {
			self._handleWithdrawChangeEvent();
		});
	},
	_handleDebitCardTypeChangeEvent: function(debitCardTypeSelector) {
		var defaultEmptyValue = $(this._defaultNameUnknownDebitCardSelectorId).text();
		this._handleSelectOneMenuChangeEvent(debitCardTypeSelector, $(this._debitCardTypeNavDisplayValueSelectorId), defaultEmptyValue);
	},
	_handleDebitAssigneeChangeEvent: function(debitAssigneeSelector) {
		this._handleSelectOneMenuChangeEvent(debitAssigneeSelector, $(this._debitAssigneeNavDisplayValueSelectorId));
	},
	_handleSelectOneMenuChangeEvent:function(selectOneMenuSelector, navDisplaySelector, defaultEmptyValue) {
		var self = this;
		if (selectOneMenuSelector) {
			var selectedValue = selectOneMenuSelector.options[selectOneMenuSelector.selectedIndex] || selectOneMenuSelector.selectedOptions[0];
			var valueToBeDisplay = selectedValue.text;
			if (defaultEmptyValue && selectOneMenuSelector.options.selectedIndex == 0) {
				valueToBeDisplay = defaultEmptyValue;
			}

			navDisplaySelector.filter(function(index, selector) {
				return self._filterActiveTab(selector);
			}).text(valueToBeDisplay);
		}
	},
	_handleWithdrawChangeEvent: function() {
		var self = this;
		var withdrawPerMonth = $(this._withdrawLimitPerMonthSelectorId).val();
		var withdrawPerDay = $(this._withdrawLimitPerDaySelectorId).val();
		var displayValue = '';
		if (withdrawPerMonth || withdrawPerDay) {
			displayValue = withdrawPerMonth + '/' + withdrawPerDay;
		}

		$(this._debitCardWithdrawLimitNavDisplayValueSelectorId).filter(function(index, selector) {
			return self._filterActiveTab(selector);
		}).text(displayValue);
	},
	_filterActiveTab: function(selector) {
		var ancestor = this._traversingAncestorWithClass(selector, 'navigator-tabs');
		if (ancestor) {
			return ancestor.classList.contains('active');
		}
		return false;
	},
	_traversingAncestorWithClass: function(selector, className) {
		if (selector.classList.contains(className)) {
			return selector;
		}
		if (selector.parentElement) {
			return this._traversingAncestorWithClass(selector.parentElement, className);
		}
		return null;
	}
};

$(Fintech.DebitCard.registerChangeEventListener());