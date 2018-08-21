/**
 * This script will add the scrollbar to navigator automatically
 * when the navigator width greater than its wrapper.
 * 
 * This feature included "navigator-scrollbar.js" and "navigator-scrollbar.css".
 * To apply this feature to navigator, we need to add a wrapper with class ".scrollbar-content" to wrap navigator items.
 * 
 * This script listen on DOMNodeInserted and DOMNodeRemoved events of the "listenChangedElement",
 * whenever nodes are added or removed, it will trigger the method to check and add or update scrollbar.
 * Ex: the listenChangedElement of Products navigator is "div[id$=productTab]"
 * 
 * */
var Fintech = Fintech || {};
Fintech.Navigator = Fintech.Navigator || {};
Fintech.Navigator.Scrollbar = {
	numberOfDomChanges: 0,
	isLockedDomChangesDetector: false,
	initNavigatorScrollBar: function(listenChangedElement) {
		var self = this;
		var intervalToRerunScrolling;

		/*
		 * 'DOMNodeInserted DOMNodeRemoved' are events which can be triggered many times when users make operations on the UI.
		 * Therefore, in this listener, a condition was implemented to check which is the last time of nodes changes foreach operation of users to ensure that the handler of scrollbar updating runs one time.
		 * 
		 *  In addition, 'isLockedDomChangesDetector' is used to lock this listener when the node changes are triggered by itself. 
		 */
		$(document).on('DOMNodeInserted DOMNodeRemoved', listenChangedElement, function(e) {
			if (($(e.target).find('.navigator-item').length > 0 || $(e.target).closest('.navigator-item').length > 0)
					&& !self.isLockedDomChangesDetector) {
				self.numberOfDomChanges += 1;
				self._addTimeOutToDetectLastChangeAndUpdateScrollbar(self.numberOfDomChanges, this);
			}
		});

		$(document).on('mousedown touchstart', '.navigator-scrollbar .scroll-left, .navigator-scrollbar .scroll-right', function() {
			var scrollContent = $(this).closest('.navigator-scrollbar').children('.scrollbar-content');
			if ($(this).hasClass('scroll-left')) {
				self._scrollLeft(scrollContent);
				// If the user hold in button scroll-left
				intervalToRerunScrolling = setInterval(function() {
					self._scrollLeft(scrollContent, 100);
				}, 100);
			} else {
				self._scrollRight(scrollContent);
				// If the user hold in button scroll-right
				intervalToRerunScrolling = setInterval(function() {
					self._scrollRight(scrollContent, 100);
				}, 100);
			}
		}).on('mouseup mouseleave touchend', '.navigator-scrollbar .scroll-left, .navigator-scrollbar .scroll-right', function() {
			// When the user stop hold scroll-left or scroll-right
			clearInterval(intervalToRerunScrolling);
		}).on('wheel', '.scrollbar-content', function(e){
			if(e.originalEvent.deltaY > 0) {
				self._scrollRight(this, 30);
			} else if(e.originalEvent.deltaY < 0) {
				self._scrollLeft(this, 30);
			}
		});
	},
	_addTimeOutToDetectLastChangeAndUpdateScrollbar: function(currentNumber, originalElement) {
		var self = this;
		setTimeout(function() {
			self._checkLastChangeToUpdateScrollbar(currentNumber, originalElement);
		}, 50);
	},
	_checkLastChangeToUpdateScrollbar: function(checkNumber, originalElement) {
		var self = this;
		if (checkNumber == self.numberOfDomChanges && self.numberOfDomChanges !== 0) {
			self.numberOfDomChanges = 0;
			self._updateScrollbar(originalElement);
		}
	},
	_updateScrollbar: function(originalElement) {
		var self = this;
		self._lockDomChangesDetector();
		
		var scrollbarContent = $(originalElement).find('.scrollbar-content').first();
		$(originalElement).find('.scrollbar-content').each(function(){
			var scrollbarContent = $(this);
			var widthWrapper = $(scrollbarContent).width();
			var widthContent = self._calculateWidthOfContent(scrollbarContent);
			if (widthContent > widthWrapper) {
				$(scrollbarContent).parent().addClass('navigator-scrollbar');
			} else {
				$(scrollbarContent).parent().removeClass('navigator-scrollbar');
			}
			
			var navigatorWrapper = $(scrollbarContent).parent();
			if (navigatorWrapper.children('.scroll-left').length === 0) {
				var arrowButton = '<span class="scroll-left fa fa-chevron-left"></span>'
								+ '<span class="scroll-right fa fa-chevron-right"></span>';
				navigatorWrapper.append(arrowButton);
			}
			self._moveToSeletedItem(scrollbarContent);
		});
		self._unlockDomChangesDetector();
	},
	_calculateWidthOfContent: function(scrollbarContent) {
		var offsetFirstChild = $(scrollbarContent).children().first().offset().left;
		var offsetLastChild = $(scrollbarContent).children().last().offset().left;
		var widthOfLastChild = $(scrollbarContent).children().last().width();
		return offsetLastChild - offsetFirstChild + widthOfLastChild;
	},
	_lockDomChangesDetector: function() {
		var self = this;
		self.isLockedDomChangesDetector = true;
	},
	_unlockDomChangesDetector: function() {
		var self = this;
		self.isLockedDomChangesDetector = false;
	},
	_scrollRight: function(scrollContent, animateTime) {
		var duration = animateTime || 50;
		$(scrollContent).animate({
			scrollLeft: '+=30px'
		}, duration);
	},
	_scrollLeft: function(scrollContent, animateTime) {
		var duration = animateTime || 50;
		$(scrollContent).animate({
			scrollLeft: '-=30px'
		}, duration);
	},
	_moveToSeletedItem: function(scrollContent) {
		var self = this;
		var navigatorWidth = $(scrollContent).width();
		var navigatorOffsetLeft = $(scrollContent).offset().left;
		var selectedItem = $(scrollContent).find('.bullet-point.active');
		var seletedItemOffsetLeft = $(selectedItem).offset().left;
		var widthOfDeleteButton = 55;
		var widthOfSeletedItem = $(selectedItem).width() + widthOfDeleteButton;

		if ((seletedItemOffsetLeft + widthOfSeletedItem - navigatorOffsetLeft) > navigatorWidth) {
			var offsetFirstChild = $(scrollContent).children().first().offset().left;
			$(scrollContent).scrollLeft(seletedItemOffsetLeft - offsetFirstChild - 100);
		}
	}
};