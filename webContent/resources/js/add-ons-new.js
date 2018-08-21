/* This function need binding again after re-render check component. */
var initFunctionClickLabelHandler = function() {
	Fintech.Cockpit.Accordion.apply({
		container: '.add-ons-item',
		title: '.type-of-check',
		titleStatusExpanded: 'fa fa-angle-down',
		titleStatusCollapsed: 'fa fa-angle-right',
		content: '.add-ons-item-content',
		multiSelect: true
	});
};

$(document).ready(function() {
	$('.child-add-ons-container').each(function(index, item) {
		SimpleScrollbar.initEl(item);
	});
});

$(window).on('resize', function() {
	$('.child-add-ons-container').outerHeight($('.add-ons').outerHeight() - $('.add-ons-title').outerHeight()*$('.add-ons-title').length);
});

$(function(){
	document.ontouchmove = function(event){
		event.preventDefault();
	}
	
	$(".check-result li > ul").stop().animate({
		height: "toggle",
	}, {
		duration: 300,
		queue: false,
	});
	
	var firstAddOnCockpit = $('.add-ons-wrapper').children('.child-add-ons').first();
	firstAddOnCockpit.addClass('expanded');
	firstAddOnCockpit.find('.child-add-ons-container').show();
		
	$('.child-add-ons-container').outerHeight($('.add-ons').outerHeight() - $('.add-ons-title').outerHeight()*$('.add-ons-title').length);
	/*Fintech.Cockpit.Accordion.apply({
		container: '.child-add-ons',
		title: '.add-ons-title',
		content: '.child-add-ons-container'
	});*/
	
	initFunctionClickLabelHandler();

	$(".add-ons-button").on("click", function(event) {
		event.stopPropagation();
	});
});

$.fn.contentsEqual = function(compareTo) {
  return compareTo && this.length === compareTo.length && this.length === this.filter(compareTo).length;
}

var Fintech = Fintech || {};
Fintech.Cockpit = Fintech.Cockpit || {};

Fintech.Cockpit = {
		
		updateActiveTaskinforLink : function(clientId){
			$(".user-task-guideline").each(function(){
				if($(this).attr("id") == clientId){
					$(this).addClass('ui-link-active');
				}
			});
		},
		
		removeActiveTaskinforLink : function(){
			$(".user-task-guideline").each(function(){
				$(this).removeClass('ui-link-active');
			});
		},

		reRenderCheckComponent: function() {
			initFunctionClickLabelHandler();
			$(".check-result li > ul").css("display", "none");
		},
		
		updateInformationSectionOnRightSidebar : function(elementPosition, value) {
			var informationElements = $('[id$=informationChildSection]').children();
			if(informationElements != null && informationElements.length > elementPosition) {
				var elementNeedToUpdate = informationElements.get(elementPosition);
				var cell = $(elementNeedToUpdate).find('.ui-panelgrid-cell').get(1);
				$(cell).text(value);
			}
		}
};

Fintech.Cockpit.Accordion = Fintech.Cockpit.Accordion || {};
Fintech.Cockpit.Accordion.apply = function(_config) {
	var cfg = _config || {};
	
	cfg.animateDuration = 300;
	cfg.multiSelect = _config.multiSelect || false;
	
	$(cfg.container).find(cfg.title).off('click');
	$(cfg.container).not('.non-expandable').find(cfg.title).on('click', function(ev) {
		var $currentTitle = $(this);
		var $currentContent = $(this).parent().find(cfg.content);
		Fintech.Cockpit.Accordion._disableClick(cfg.container, cfg.title);
		if ($currentContent.is(':visible')) {
			$currentTitle.removeClass(cfg.titleStatusExpanded);
			$currentTitle.addClass(cfg.titleStatusCollapsed);
			Fintech.Cockpit.Accordion._collapse(cfg.container, cfg.title, $currentContent, cfg.animateDuration);
		} else if ($(cfg.container).find(cfg.content).filter(':visible').length > 0 && !cfg.multiSelect) {
			$(cfg.container).find(cfg.content).filter(':visible').each(function(index, content) {
				Fintech.Cockpit.Accordion._collapse(cfg.container, cfg.title, $(content), cfg.animateDuration);
			});
			$currentTitle.removeClass(cfg.titleStatusCollapsed);
			$currentTitle.addClass(cfg.titleStatusExpanded);
			Fintech.Cockpit.Accordion._expand(cfg.container, cfg.title, $currentContent, cfg.animateDuration);
		} else {
			$currentTitle.removeClass(cfg.titleStatusCollapsed);
			$currentTitle.addClass(cfg.titleStatusExpanded);
			Fintech.Cockpit.Accordion._expand(cfg.container, cfg.title, $currentContent, cfg.animateDuration);
		}
	}).each(function(index, item) {
		var $currentTitle = $(item);
		var $container = $(item).parents(cfg.container);
		if ($container.hasClass('expanded')) {
			$currentTitle.removeClass(cfg.titleStatusCollapsed);
			$currentTitle.addClass(cfg.titleStatusExpanded);
		} else {
			$currentTitle.removeClass(cfg.titleStatusExpanded);
			$currentTitle.addClass(cfg.titleStatusCollapsed);
		}
	});
};
Fintech.Cockpit.Accordion._collapse = function(_container, _title, $currentContent, _animateDuration) {
	$currentContent.parents(_container).removeClass('expanded');
	$currentContent.stop().animate({
		height: "toggle",
	}, {
		duration: _animateDuration,
		queue: false,
		complete: function() {
			Fintech.Cockpit.Accordion._enableClick(_container, _title);
		}
	});
};
Fintech.Cockpit.Accordion._expand = function(_container, _title, $currentContent, _animateDuration) {
	$currentContent.parents(_container).addClass('expanded');
	$currentContent.stop().animate({
		height: "toggle",
	}, {
		duration: _animateDuration,
		queue: false,
		complete: function() {
			Fintech.Cockpit.Accordion._enableClick(_container, _title);
		}
	});
};
Fintech.Cockpit.Accordion._disableClick = function(_container, _title) {
	$(_container).find(_title).css("pointer-events", "none");
};
Fintech.Cockpit.Accordion._enableClick = function(_container, _title) {
	$(_container).find(_title).css("pointer-events", "auto");
};