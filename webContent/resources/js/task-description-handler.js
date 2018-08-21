;var Fintech = Fintech || {};
Fintech.CockpitExtension = Fintech.CockpitExtension || {};
Fintech.CockpitExtension.TaskDescription = Fintech.CockpitExtension.TaskDescription || {};
Fintech.CockpitExtension.TaskDescription = {
	className:'.task-description-op',
	visibleClassName:'task-description-visible',
	show:function(id,target){
		this._hiddenUntilPositionFixed();
		PF(id).show(target);			
	},
	show:function(id){
		this._hiddenUntilPositionFixed();
		PF(id).show();
	},
	hide:function(id){
		PF(id).hide();		
	},
	onShowTaskDescription: function () {
		var taskDescription = $(this.className);
        var taskDescriptionId = taskDescription.attr('id');
        var defaultResizeEvent = 'resize.' + taskDescriptionId;
        var cockpitBtn = $('.cockpit-nav-btn');
        var self = this
        
        //Disable default primefaces event
        $(window).off(defaultResizeEvent);
        
        self._fixPositionTaskDescription();
        $(window).on('resize.doResponsiveTaskDescription', _.debounce(function () {
            setTimeout(self._fixPositionTaskDescription, 200)
        }, 100));
        cockpitBtn.on('click', function () { setTimeout(self._fixPositionTaskDescription, 800); });
    },

    onHideTaskDescription: function () {

    	this._hiddenUntilPositionFixed();
    	$(window).off('resize.doResponsiveTaskDescription');
    },
    
    /*Private methods*/
	
	_hiddenUntilPositionFixed:function(){
		var taskDescription = $(this.className);
	    $(taskDescription).removeClass(this.visibleClassName);
	},
	_showAfterPositionFixed:function(){
		var taskDescription = $(this.className);
        $(taskDescription).addClass(this.visibleClassName);
	},
    _fixPositionTaskDescription: function () {
		var self = Fintech.CockpitExtension.TaskDescription;
		var isPossibleDuplicateWrapper = $(document).find("[id$='possibleDuplicateWrapper']:visible").length == 1;
		var isDynamicPossibleDuplicateWrapper = $(document).find("[id$='dynamicPossibleDuplicateWrapper']").is(":visible");
		var isTaskDescription = $(document).find('a.user-task-guideline.ui-link-active').length == 1;
		
		if (isDynamicPossibleDuplicateWrapper || isPossibleDuplicateWrapper) {
			self._fixPositionDuplicateCheckTable();
		} else if (isTaskDescription) {
			self._fixPositionNormalTaskDescription();
		}
		self._showAfterPositionFixed();

    },

    _fixPositionDuplicateCheckTable: function () {
        var cockpitTaskSection = $('.add-ons-tasks');
        var cockpitAlertSection = $('.add-ons-alerts');

        var alertHeight = cockpitAlertSection.height();
        var alertTop = cockpitAlertSection.offset().top;

        var taskTop = cockpitTaskSection.offset().top;
        var cockpitHeight = alertHeight + alertTop - taskTop;

        var taskDescription = $(this.className);
        var taskDescriptionHeight = taskDescription.height();

        var wholeCockpit = $('.add-ons');

        var cockpitBtn = $('.cockpit-nav-btn');

        if (cockpitBtn.is(':visible') && !wholeCockpit.hasClass('show-up')) {
            taskDescription.css({ 'right': '0', 'left': '' });
            return;
        }
        if (taskDescriptionHeight < cockpitHeight) {
            taskDescription.position({
                my: 'right top',
                at: 'left top',
                of: cockpitTaskSection,
            });
        } else {
            taskDescription.position({
                my: 'right bottom',
                at: 'left bottom',
                of: cockpitAlertSection,
            });
        }
    },
    _fixPositionNormalTaskDescription: function () {
        var taskguideLineLink = $('a.user-task-guideline.ui-link-active');
        var taskDescription = $(this.className);
        var wholeCockpit = $('.add-ons');
        var cockpitBtn = $('.cockpit-nav-btn');

        if (cockpitBtn.is(':visible') && !wholeCockpit.hasClass('show-up')) {
            PF('fintechTaskDescriptionVar').hide();
            Fintech.Cockpit.removeActiveTaskinforLink();
            Fintech.Cockpit.TaskDescription.onCloseTaskDescription();
            return;
        }

        taskDescription.position({
            my: 'right top',
            at: 'right bottom',
            of: taskguideLineLink,
        })
    }
}

//Defer extended cockpit
$(function(){
	Fintech.Cockpit = Fintech.Cockpit || {};
	$.extend(Fintech.Cockpit, Fintech.CockpitExtension);	
});