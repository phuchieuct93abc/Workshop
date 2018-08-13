var MermaidScroller = MermaidScroller || {
	apply: function(){
		var mermaidIndicator = $('.mermaid:visible');
		var element = null;
		if(mermaidIndicator.hasClass('ui-tabs-left')){
			element = mermaidIndicator.find('.ui-tabs-panels:visible');
		} else {
			element = mermaidIndicator;
		}
		var parent = element.parent();
		var elementHeight = element.outerHeight();
		var scrollHeight = element.prop('scrollHeight');
		if(elementHeight < scrollHeight){
			var scrollKiller = document.createElement("div");
			$( ".scroll-killer" ).remove();
			$(scrollKiller)
				.addClass('scroll-killer')
				.css('position', 'absolute')
				.css('top', '0px')
				.css('right', '0px')
				.css('width', '17px')
				.css('height', elementHeight + 'px')
				.css('z-index', '1')
				.css('background-color', '#fff')
				.appendTo(parent);
			var mermaidLength = elementHeight*(elementHeight/scrollHeight);
			var mermaid = document.createElement("div");
			$( ".mermaid-scroller" ).remove();
			$(mermaid)
				.addClass('mermaid-scroller')
				.css('position', 'absolute')
				.css('top', '0px')
				.css('right', '0px')
				.css('width', '2px')
				.css('height', mermaidLength + 'px')
				.css('z-index', '2')
				.css('background-color', 'rgba(0,0,0,0.2)')
				.appendTo(parent);
			var move = element.scrollTop()*elementHeight/scrollHeight;
			if(move + element.scrollTop() + mermaidLength < scrollHeight){
				$('.mermaid-scroller').css('top', move + 'px');
			} else {
				$('.mermaid-scroller').css('top', elementHeight - mermaidLength + 'px');
			}
			element.scroll(function(){
				var move = $(this).scrollTop()*elementHeight/scrollHeight;
				if(move + $(this).scrollTop() + mermaidLength < scrollHeight){
					$('.mermaid-scroller').css('top', move + 'px');
				} else {
					$('.mermaid-scroller').css('top', elementHeight - mermaidLength + 'px');
				}
			});
		} else {
			$( ".mermaid-scroller" ).remove();
			$( ".scroll-killer" ).remove();
		}
	},
	applyTo: function(target) {
		var mermaidIndicator = $(target);
		var targetClassWithNoDot = target.replace('.','');
		var element = mermaidIndicator;
		
		var mermaidClass = "mermaid-overlay-" + targetClassWithNoDot; 
		var scrollKillerClass = "scroll-overlay-" + targetClassWithNoDot;
		
		var parent = element.parent();
		var elementHeight = element.outerHeight();
		var scrollHeight = element.prop('scrollHeight');
		if(elementHeight < scrollHeight){
			var scrollKiller = document.createElement("div");
			$(parent).find(scrollKillerClass).remove();
			$(scrollKiller)
				.addClass(scrollKillerClass)
				.addClass('scroll-overlay')
				.css('position', 'absolute')
				.css('top', '0px')
				.css('right', '0px')
				.css('width', '17px')
				.css('height', elementHeight + 'px')
				.css('z-index', '1')
				.css('background-color', '#fff')
				.appendTo(parent);
			
			var mermaidLength = elementHeight*(elementHeight/scrollHeight);
			var mermaid = document.createElement("div");
			$(parent).find(mermaidClass).remove();
			$(mermaid)
				.addClass(mermaidClass)
				.addClass('mermaid-overlay')
				.css('position', 'absolute')
				.css('top', '0px')
				.css('right', '0px')
				.css('width', '2px')
				.css('height', mermaidLength + 'px')
				.css('z-index', '2')
				.css('background-color', 'rgba(0,0,0,0.2)')
				.appendTo(parent);
			
			var move = element.scrollTop()*elementHeight/scrollHeight;
			if(move + element.scrollTop() + mermaidLength < scrollHeight){
				$(mermaid).css('top', move + 'px');
			} else {
				$(mermaid).css('top', elementHeight - mermaidLength + 'px');
			}
			
			element.scroll(function(){
				var move = $(this).scrollTop()*elementHeight/scrollHeight;
				if(move + $(this).scrollTop() + mermaidLength < scrollHeight){
					$(mermaid).css('top', move + 'px');
				} else {
					$(mermaid).css('top', elementHeight - mermaidLength + 'px');
				}
			});
			
		} else {
			$(parent).find(mermaidClass).remove();
			$(parent).find(scrollKillerClass).remove();
		}
	}
}

MermaidScroller.apply();

$(window).resize(function(){
	setTimeout(function(){
		MermaidScroller.apply();
	}, 250);
});