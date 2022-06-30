$(document).ready(function(){

	let  autoSlide=setInterval(leftMove , 1500);

	function leftMove(){
		clearInterval( autoSlide );	
		let n2 = $( ".orange" ).index();
		n2++;
		//console.log(  n2  );
		if(n2 ==5 ) {n2 =0;}
		$( "#circle button" ).eq(  n2 ).addClass( "orange" ).siblings().removeClass( "orange" );	
		if(  $( "#slide" ).position().left <= "-1800"  ){
			 $( "#slide" ).css("left" , 0);			 
		}
		$( "#slide" ).stop().animate({  left : "-=390px"  } , 700 ,  function(){				
				autoSlide =  setInterval(  leftMove  ,   1500 );
				$( ".arr2" ).prop( "disabled" , false );					
		});		
		//console.log( $( "#slide" ).position().left  );		
	}
	
	$("#circle button").click(function(){	
		clearInterval( autoSlide );	
		let n2 = $( ".orange" ).index();
		let  i = $(this).index();//클릭한 버튼의  index번호

		$( "#slide" ).stop().animate({  left : (-390) * i  } , 700, function(){			autoSlide =  setInterval(  leftMove  ,   1500);
		});			
		$(this).addClass("orange").siblings().removeClass("orange");	
	});
	
});