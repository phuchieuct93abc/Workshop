var Fintech = Fintech || {};
Fintech.DossierOverview = Fintech.DossierOverview || {};

Fintech.DossierOverview = {
		
		initMasonryGrid : function(){
			var $this = this;
			var $grid = $('.ui-datascroller-list');
			if (Masonry.data('.ui-datascroller-list')) {
				$grid.masonry('layout');
			} else {
				$this._settingForMasonryGrid($grid);

				$grid.on('click', '.ui-datascroller-item .dossier-show-detail-icon', function(ev) {
					$(this).toggleClass('icon-active');
					$item = $(this).parents('.ui-datascroller-item');
					$item.find('.item-detail').toggle(function() {
						$grid.masonry('layout');
					});
				});

				$(window).resize(function() {
					setTimeout(function() {
						var $grid = $('.ui-datascroller-list');
						$grid.masonry('layout');
					}, 400);
				});

			}
		},
		
		handleOpenConfirmDeleting: function(dossierId){
			$("[id$='selectedDossierId']").val(dossierId);
			
			if($("[id$='selectedDossierId']").val()){
				PF('deletedOverviewDossierVar').show();
			}
		},
		
		handleOpenDossier: function(event, dossierIdVal){
			if(!$(event.target).hasClass("dossier-show-detail-icon")&&!$(event.target).hasClass("dossier-delete-icon")){
				this.showBlockUI();
				fintechOpenDossierOverview([{name:'dossierId', value:dossierIdVal}]);
			}
		},
		updateTotalSize : function(number){
			PF("dossierOverviewWidget").cfg.totalSize = number;
		},
		updateChunkSize : function(number){
			PF("dossierOverviewWidget").cfg.chunkSize = number;
		},
		updateOffset : function(number){
			PF("dossierOverviewWidget").cfg.offset = number;
		},
		setAllLoaded : function(value){
			PF("dossierOverviewWidget").allLoaded = value;
		}, 
		reloadMasonryGrid : function(){
			var $this = this;
			var $grid = $('.ui-datascroller-list');
			var $item = $('.ui-datascroller-item');
			var itemToAppend = [];
			for (i = 0; i < $item.length; i++) {
				if($item[i].getAttribute('style')== undefined){
					itemToAppend.push($item[i]);
				}
			}
			var $itemToAppend = $(itemToAppend);
			$grid
			  .append( $itemToAppend )
			  .masonry( 'appended', $itemToAppend );
			$this._settingForMasonryGrid($grid);
		},
		_settingForMasonryGrid: function($grid){
			$grid.masonry({
				columnWidth: 250,
				gutter: 20,
				resize: false,
				itemSelector: '.ui-datascroller-item'
			});
		},
		
		checkSearchCondition: function(){
			var search = $("[id$='search']").val().length;

			if(search == 0){
				return true;
			}
			
			if(search < 3){
				return false;
			}
			
			return true;
		},
		showBlockUI: function(){
			$('.redirect-blockui').removeClass('hide');
		},
		hideBlockUI: function(){
			$('.redirect-blockui').addClass('hide');
		},

		initRefreshEventHandler: function() {
			$(document).off('keydown');
			$(document).on('keydown', function(event) {
				if (event.keyCode === 116 || (event.ctrlKey && event.keyCode === 82)) {
					window.location = window.location;
					event.preventDefault();
				}
			});
		}
		
};