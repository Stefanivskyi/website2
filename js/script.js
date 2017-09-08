function openNav() {
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("body").style.overflow = "hidden";
    document.getElementById("newmenu").style.zIndex = "1";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("body").style.overflow = "scroll";
    document.getElementById("newmenu").style.zIndex = "2";
}

function openForm() {
    document.getElementById("myForm").style.height = "100%";
    document.getElementById("myForm").style.overflow = "scroll";
    document.getElementById("body").style.overflow = "hidden";
}

function closeForm() {
    document.getElementById("myForm").style.height = "0%";
    document.getElementById("body").style.overflow = "scroll";
}





$(window).scroll(function(){
	$('.mov').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+200) {
			$(this).addClass('fadeInDown');
		}
	});
});