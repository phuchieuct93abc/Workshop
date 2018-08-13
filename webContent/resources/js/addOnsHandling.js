/* This function need binding again after re-render check component. */
var initFunctionClickLabelHandler = function() {
	$(".check-result ul > li .type-of-check").on("click", function() {
		var currentExpanded = $(document.querySelector(".check-result li > ul.expanded"));
		var clickedElement = $(this).next();
		if(!clickedElement.contentsEqual(currentExpanded)) {
			$(".check-result ul > li .type-of-check").css("pointer-events", "none");
			$(document.querySelector(".check-result li > ul.expanded")).stop().animate({
				height: "toggle",
			},{
				duration: 400,
				queue: false,
			});
			
			$(document.querySelector(".check-result li > ul.expanded")).removeClass("expanded");

			var $this = $(this);
		
			$this.next().stop().animate({
				height: "toggle",
			}, {
				duration: 400,
				queue: false,
				complete: function() {
					$(".check-result ul > li .type-of-check").css("pointer-events", "auto");
				}
			});
		} 
	});
};

$(function(){
	document.ontouchmove = function(event){
		event.preventDefault();
	}
	
	$(".check-result li > ul").stop().animate({
		height: "toggle",
	}, {
		duration: 400,
		queue: false,
	});

	$(".add-ons-progress-status").addClass("add-ons-expanded");
	$(".add-ons-progress-status .child-add-ons-container").addClass("expanded");
	$(document.querySelector(".child-add-ons-container.expanded")).show();

	$(".add-ons-title").on("click", function() {
		var $title = $(this);
		var $content = $title.next();
		$(".add-ons-title").css("pointer-events", "none");
		if ($content.is(':visible')) {
			$(document.querySelector(".child-add-ons-container.expanded")).parent().removeClass("add-ons-expanded");
			$(document.querySelector(".child-add-ons-container.expanded")).removeClass("expanded");
			$('.child-add-ons-container:visible').stop().animate({
				height: "toggle",
			}, {
				duration: 400,
				queue: false,
				complete: function() {
					$(".add-ons-title").css("pointer-events", "auto");
				}
			});
		} else if ($('.child-add-ons-container:visible').length > 0) {
			$(document.querySelector(".child-add-ons-container.expanded")).parent().removeClass("add-ons-expanded");
			$(document.querySelector(".child-add-ons-container.expanded")).removeClass("expanded");
			$content.addClass("expanded");
			$title.parent().addClass("add-ons-expanded");
			$('.child-add-ons-container:visible').stop().animate({
				height: "toggle",
			}, {
				duration: 400,
				queue: false,
			});
			$content.stop().animate({
				height: "toggle",
			}, {
				duration: 400,
				queue: false,
				complete: function() {
					$(".add-ons-title").css("pointer-events", "auto");
				}
			});
		} else {
			$content.addClass("expanded");
			$title.parent().addClass("add-ons-expanded");
			$content.stop().animate({
				height: "toggle",
			}, {
				duration: 400,
				queue: false,
				complete: function() {
					$(".add-ons-title").css("pointer-events", "auto");
				}
			});
		}
	});

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
				if($(this).attr("id") != clientId){
					$(this).css("cssText", "color: rgba(0,0,0,0.4) !important;");
				}
			});
		},
		
		removeActiveTaskinforLink : function(){
			$(".user-task-guideline").each(function(){
				$(this).css("cssText", "color: rgba(0,0,0, 1) !important;");
			});
		},

		reRenderCheckComponent: function() {
			initFunctionClickLabelHandler();
			$(".check-result li > ul").css("display", "none");
		}
};
