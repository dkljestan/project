document.querySelector(".bar").addEventListener("click",function(){
	document.querySelector(".menu").classList.toggle("isOpen");	
});



const one = document.querySelector('#com1').addEventListener('click',function(){
  document.querySelector('.content').style.transform = 'translateX(0)';
});

const two = document.querySelector('#com2').addEventListener('click',function(){
  document.querySelector('.content').style.transform = 'translateX(-33.333%)';
});

const three = document.querySelector('#com3').addEventListener('click',function(){
  document.querySelector('.content').style.transform = 'translateX(-66.666%)';
});




window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
function topFunction() {
    $('html,body').animate({
    	"scrollTop": 0 
    },1000);
}
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});












