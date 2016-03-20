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
				case 'page-2': pageer=function(index){
					move('.section3-1')
					.scale(1)
					.end();
					move('.section3-2')
					.scale(1)
					.end()
				}();
				case 'page-3': pagesan=function(index){
					move('.section4-li1 div')
					.set('top','10%')
					.end();
					move('.section4-li2-2')
					.set('bottom','27%')
					.end();
					move('.section4-li2-1')
					.set('top','40%')
					.end();
					move('.section4-li4-1')
					.set('left',0)
					.end();
					move('.section4-li5-1')
					.scale(1)
					.end()
				}();
				
			}
		},
		onLeave:function(index,nextindex,direction){
			if(index!=2){
				$('.srction2-1').css('margin-top',0)
				$('.srction2-2').css('margin-bottom',0)
			}
			if(index!=3){
				$('.section3-1').css('transform','scale(1.5,1.5)');
				$('.section3-1').css('transition','all 0.1s ease');
				$('.section3-2').css('transform','scale(1.5,1.5)');
				$('.section3-2').css('transition','all 0.1s ease');
			}
			if(index!=4){
				$('.section4-li1>div').css('top','100%')
				$('.section4-li2-1').css('top','-30%')
				$('.section4-li2-2').css('bottom','-34%')
				$('.section4-li4-1').css('left','140%')
				$('.section4-li5-1').css('transform','scale(1.5,1.5)');
				$('.section4-li5-1').css('transition','all 0.1s ease');
			}
			
			if(nextindex==5){
				$('.section5-1').css({'zIndex':2});
				move('.section5-1')
				.set('bottom','25%')
				.duration('1s')
				.end();
				$('.section5-2').css({'zIndex':2});
				move('.section5-2')
				.set('top','20%')
				.duration('1s')
				.end();
				$('.section5-3').css({'zIndex':2});
				move('.section5-3')
				.set('top','48%')
				.duration('1s')
				.end();
			}else{
				setTimeout(function(){
					$('.section5-1').css({'bottom':'100%','zIndex':0});
					$('.section5-2').css({'top':'-50%','zIndex':0});
					$('.section5-3').css({'top':'-30%','zIndex':0});
				},500)
				
			}

		}
	})
})