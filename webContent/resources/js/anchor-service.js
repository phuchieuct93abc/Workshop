Fintech.DataGathering.AnchorService = Fintech.DataGathering.AnchorService || {};

Fintech.DataGathering.AnchorService = {
	jumpTo : function(anchors) {
		var anchorAsArray = JSON.parse("[" + anchors + "]");
		var firstAnchor = anchorAsArray.shift();
		var firstAnchorComponent = this._getAnchorComponent(firstAnchor);
		this._jumpToComponent(firstAnchorComponent);
		this._processAfterJump(anchorAsArray);
	},
	
	_jumpToComponent: function(anchorComponent){
		anchorComponent.click();
	},
	
	_getAnchorComponent: function(anchor){
		var index = 0;
		var anchorAsComponent;
		if (anchor.indexOf(":") !== -1) {
			index = anchor.split(":")[1];
			anchor = anchor.split(":")[0];
		}
		anchorAsComponent = $("a[href$=" + anchor + "]").get(index);
		if (anchorAsComponent === undefined) {
			anchorAsComponent = $("a[id$=" + anchor + "]").get(index);
		}
		
		return anchorAsComponent;
	},
	
	_processAfterJump: function(anchorAsArray){
		if (anchorAsArray.length > 0) {
			this._sendJumpRequestToServer(anchorAsArray);
		}
	},
	
	_sendJumpRequestToServer: function (anchorAsArray){
		var anchors = anchorAsArray.join('","');
		jumpToNextAnchor([ {
			name : 'anchors',
			value : anchors
		} ]);
	}

};