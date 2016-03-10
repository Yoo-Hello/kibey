$(function(){
	$('#fullpage').fullpage({
		afterLoad:function(link,index){
			switch(link){
				case 'page-1': pageyi=function(index){
					move('.srction2-1')
					.add('margin-top',-434)
					.end();
					move('.srction2-2')
					.add('margin-bottom',-200)
					.end();
				}();
				//case 'page-2':pageer(inden);
			}
		},
		onLeave:function(index,nextindex,direction){
			if(index!=2){
				$('.srction2-1').css('margin-top',0)
				$('.srction2-2').css('margin-bottom',0)
			}
			
		}
		
	})
})