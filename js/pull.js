
var pull = {};

pull.install = function( Vue , options ){



	//options.touchstart = -1;

	Vue.prototype.$PullStart = function( vue ){

		vue.$el.addEventListener('touchstart' , function( e ){

			var clientY = e.targetTouches[0].clientY;

			options.touchstart = clientY;
			console.log('---');
		}, false );

		vue.$el.addEventListener('touchmove' , function( e ){

			if( options.touchstart < 0 ){

				return;

			}

			var clientY = e.targetTouches[0].clientY;

			var position = clientY - options.touchstart;

			var scrollTop = document.documentElement.scrollTop;

			if( position > 0 && scrollTop <= 0 ){

				e.preventDefault();
				//添加动画效果

				vue.$el.style.cssText = 'transform:translate( 0px , '+ position +'px ); ';
				
				if(position > 40){
					vue.pullshow = true;
				}
				console.log(position);

			}

		},false);

		vue.$el.addEventListener('touchend' , function( e ){

			//解除事件。
			vue.$el.addEventListener('touchmove',function(){},false);

		},false);

	}

}