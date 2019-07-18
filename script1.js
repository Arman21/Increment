var time1 , time2 , time3 , time4 ;
var percent1 , percent2 , percent3 , percent4 ;
var currentCount1 , currentCount2 , currentCount3 , currentCount4 ;
var border1 , border2 , border3 , border4 ;
percent1 = document.getElementsByClassName("text1")[0] ;
percent2 = document.getElementsByClassName("text1")[1] ;
percent3 = document.getElementsByClassName("text1")[2] ;
percent4 = document.getElementsByClassName("text1")[3] ;
currentCount1 = 0 ;
currentCount2 = 0 ;
currentCount3 = 0 ;
currentCount4 = 0 ;
border1 = document.getElementById("border1") ;
border2 = document.getElementById("border2") ;
border3 = document.getElementById("border3") ;
border4 = document.getElementById("border4") ;
function incrementFirst() {
	time1 = setInterval(function() {
		percent1.innerHTML = ++currentCount1 + "%" ;
		if (currentCount1 == 25) {
			 border1.style.borderTopColor = "#3EC1D5";
		}
		else if (currentCount1 == 50) {
			 border1.style.borderRightColor = "#3EC1D5";
		}
		else if (currentCount1 == 75) {
			 border1.style.borderBottomColor = "#3EC1D5";
		}
		else if (currentCount1 == 100) {
			border1.style.borderLeftColor = "#3EC1D5";
			clearInterval(time1) ;
		}
	} , 25) ;
}
function incrementSecond() {
	time2 = setInterval(function() {
		percent2.innerHTML = ++currentCount2 + "%" ;
		if (currentCount2 == 25) {
			 border2.style.borderTopColor = "#3EC1D5";
		}
		else if (currentCount2 == 50) {
			 border2.style.borderRightColor = "#3EC1D5";
		}
		else if (currentCount2 == 75) {
			 border2.style.borderBottomColor = "#3EC1D5";
			 clearInterval(time2) ;
		}
	} , 18.75) ;
}
function incrementThird() {
	time3 = setInterval(function() {
		percent3.innerHTML = ++currentCount3 + "%" ;
		if (currentCount3 == 25) {
			 border3.style.borderTopColor = "#3EC1D5";
		}
		else if (currentCount3 == 50) {
			 border3.style.borderRightColor = "#3EC1D5";
			 clearInterval(time3) ;
		}
	} , 12.5) ;
}
function incrementFourth() {
	time4 = setInterval(function() {
		percent4.innerHTML = ++currentCount4 + "%" ;
		if (currentCount4 == 25) {
			 border4.style.borderTopColor = "#3EC1D5";
			 clearInterval(time4) ;
		}
	} , 6.25) ;
}
window.onload = function() {
	incrementFirst() ;
	incrementSecond() ;
	incrementThird() ;
	incrementFourth() ;
}