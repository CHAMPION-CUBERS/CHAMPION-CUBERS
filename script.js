filterSelection("all");
sizeit();
makepositions();
makesizeinshowcase();
navactive ();

window.addEventListener("resize", function () {
	sizeit();
	makepositions();
	makesizeinshowcase();
});

function togglenav() {
	$("#scrollbox").toggleClass("shown");

}

var cards = document.getElementsByClassName("box");
for (var i = 0; i < cards.length; i++) {
	cards[i].addEventListener("click", function () {
		this.classList.toggle("flip");
	});
}



function sizeit() {
	var numperrow = calnumperrow();
	var w = document.getElementById("showcase").clientWidth;
	var them = document.getElementsByClassName("filteritem");
	var available = w / numperrow;
	var realwidth = available - 10;
	for (var g = 0; g < them.length; g++) {
		them[g].style.width = realwidth + "px";
	}
	return available;
}

function calnumperrow() {
	if (document.getElementById("showcase").clientWidth >= 1000) {
		return 3;
	} else if (document.getElementById("showcase").clientWidth >= 650) {
		return 2;
	} else if (document.getElementById("showcase").clientWidth < 650) {
		return 1;
	}
}
function filterSelection(c) {
	var x, i;
	x = document.getElementsByClassName("filteritem");
	if (c == "all") c = "";
	for (i = 0; i < x.length; i++) {
		w3RemoveClass(x[i], "show");
		if (x[i].className.indexOf(c) > -1) {
			w3AddClass(x[i], "show");
		}
	}
	makepositions();
}

function makepositions() {
	var heightadd = 0;
	var width = sizeit();
	var numperrow = calnumperrow();
	var theshown = document.getElementsByClassName("show");
	for (var u = 0; u < theshown.length; u++) {
		if (u % numperrow == 0) {
			if (u / numperrow == 0) {
				theshown[u].style.position = "absolute";
				theshown[u].style.top = "0";
				theshown[u].style.left = "0";
			} else {
				theshown[u].style.position = "absolute";
				heightadd = 0;
				for (var total = u / numperrow, done = 0; done < total; done++) {
					heightadd += theshown[done * numperrow].clientHeight + 10;
				}
				theshown[u].style.top = heightadd + "px";
				theshown[u].style.left = "0";
			}
		}

		if (u % numperrow == 1) {
			if (u == 1) {
				theshown[u].style.position = "absolute";
				theshown[u].style.top = "0";
				theshown[u].style.left = width + "px";
			} else {
				theshown[u].style.position = "absolute";
				heightadd = 0;
				for (
					var total = Math.floor(u / numperrow), done = 1, counter = 0;
					counter < total;
					counter++ , done += numperrow
				) {
					heightadd += theshown[done].clientHeight + 10;
				}
				theshown[u].style.top = heightadd + "px";
				theshown[u].style.left = width + "px";
			}
		}

		if (u % numperrow == 2) {
			if (u == 2) {
				theshown[u].style.position = "absolute";
				theshown[u].style.top = "0";
				theshown[u].style.left = width * 2 + "px";
			} else {
				theshown[u].style.position = "absolute";
				heightadd = 0;
				for (
					var total = Math.floor(u / numperrow), done = 2, counter = 0;
					counter < total;
					counter++ , done += numperrow
				) {
					heightadd += theshown[done].clientHeight + 10;
				}
				theshown[u].style.top = heightadd + "px";
				theshown[u].style.left = width * 2 + "px";
			}
		}
	}
}

function w3AddClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
			element.className += " " + arr2[i];
		}
	}
}

function w3RemoveClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		var current = document.getElementsByClassName("activebutton");
		current[0].className = current[0].className.replace(" activebutton", "");
		this.className += " activebutton";
	});
}

function makesizeinshowcase() {
	var all = document.getElementsByClassName("filteritem");
	var numperrow = calnumperrow();
	if (numperrow == 1) {
		var totalheight = 0;
		for (var i = 0; i < all.length; i = i + numperrow) {
			totalheight += all[i].clientHeight + 10;
		}
		document.getElementById("rowofitems").style.height = totalheight + 20 + "px";
	} else if (numperrow == 2) {
		var totalheight0 = 0;
		var totalheight1 = 0;
		for (var i = 0; i < all.length; i = i + numperrow) {
			totalheight0 += all[i].clientHeight + 10;
		}
		for (var i = 1; i < all.length; i = i + numperrow) {
			totalheight1 += all[i].clientHeight + 10;
		}
		if (totalheight0 >= totalheight1) {
			document.getElementById("rowofitems").style.height = totalheight0 + 20 + "px";
		}
		if (totalheight1 > totalheight0) {
			document.getElementById("rowofitems").style.height = totalheight1 + 20 + "px";
		}
	} else if (numperrow == 3) {
		var totalheight0 = 0;
		var totalheight1 = 0;
		var totalheight2 = 0;
		for (var i = 0; i < all.length; i = i + numperrow) {
			totalheight0 += all[i].clientHeight + 10;
		}
		for (var i = 1; i < all.length; i = i + numperrow) {
			totalheight1 += all[i].clientHeight + 10;
		}
		for (var i = 2; i < all.length; i = i + numperrow) {
			totalheight2 += all[i].clientHeight + 10;
		}
		if (totalheight0 >= totalheight1) {
			var round1winner = totalheight0
		}
		if (totalheight1 >= totalheight0) {
			var round1winner = totalheight1
		}
		if (round1winner >= totalheight2) {
			document.getElementById("rowofitems").style.height = round1winner + 20 + "px";
		}
		if (round1winner < totalheight2) {
			document.getElementById("rowofitems").style.height = totalheight2 + 20 + "px";
		}
	}
}


var slideIndex = 0;
doslides();

function arrowclicked(value) {
	if (value == 1) {
		doslides();
	} else if (value == -1) {
		slideIndex = slideIndex - 2;
		doslides();
	}
}

function doslides() {
	var i;
	var slides = document.getElementsByClassName("slide");
	var dots = document.getElementsByClassName("dot");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) { slideIndex = 1 }
	if (slideIndex <= 0) { slideIndex = slides.length; }
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" activedot", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " activedot";
}

var interval = setInterval(function () {
	doslides();
}, 5000);
var play = true;
var old;

function playpause() {
	if (play == true) {
		play = false;
		clearInterval(interval);
		$("#control").replaceWith('<i onclick="playpause()" id="control" class="fas fa-play"></i>')
	} else if (play == false) {
		play = true;
		interval = setInterval(function () {
			doslides();
		}, 5000);
		$("#control").replaceWith('<i onclick="playpause()" id="control" class="fas fa-pause"></i>')
	}
}



var active;

$(window).scroll(function () {
	navactive ();
});

function navactive () {
	var sections = $(".section-container");
	var currentScroll = $(this).scrollTop();
	sections.each(function () {
		var divPosition = $(this).offset().top;
		if (divPosition - 1 < currentScroll) {
			active = $(this);
		}
	});
	$("a").removeClass("active");
	var now = document.querySelectorAll("a[href='#" + active.attr("id") + "']");
	now[0].className += " active"
}

$("#navigation a, footer a[href='#top'], a[href^='#']").on('click', function (event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function () {
				window.location.hash = hash;
			});
		}
	});
