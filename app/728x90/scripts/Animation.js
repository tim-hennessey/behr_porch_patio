var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var txt1 = document.getElementById("txt1");
	var txt2 = document.getElementById("txt2");
	var txt3a = document.getElementById("txt3a");
	// var txt3b = document.getElementById("txt3b");
	var txt4 = document.getElementById("txt4");
	
	// var txtContainer1 = document.getElementById("txtContainer1");
	var logo2 = document.getElementById("logo2");
	var cta = document.getElementById("cta");

	var t = TweenMax;
	var tl1 = new TimelineMax();
	var tl2 = new TimelineMax();

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});
		// .set(txt1, {display:"none"})
		// .set(txt1, {display:"block"})
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {
		

		tl1.set(txt1, {display:"block"})
		.to(img, 1, {x:'-=728', ease: Expo.easeOut})
		.to(txt1, 1, {x:'-=728', ease: Expo.easeOut}, "-=.75")
		.to("#blur1feGaussianBlur", .9, {attr:{stdDeviation:"0.1 0"}, ease:Expo.easeOut}, "-=1")

		.to(txt1, 1, {x:'-=728', ease: Expo.easeIn}, "+=1")
		.to("#blur1feGaussianBlur", .9, {attr:{stdDeviation:"20 0"}, ease:Expo.easeIn}, "-=1")
		.set(txt1, {display:"none"})

		.set(txt2, {display:"block"}, "-=.25")
		.to(txt2, 1, {x:'-=728', ease: Expo.easeOut})
		.to("#blur2feGaussianBlur", .9, {attr:{stdDeviation:"0.1 0"}, ease:Expo.easeOut}, "-=1")

		.to(txt2, 1, {x:'-=728', ease: Expo.easeIn}, "+=1")
		.to("#blur2feGaussianBlur", .9, {attr:{stdDeviation:"20 0"}, ease:Expo.easeIn}, "-=1")
		.set(txt2, {display:"none"})

		.set(txt3a, {display:"block"}, "-=.25")
		.to(txt3a, 1, {x:'-=728', ease: Expo.easeOut})
		.to("#blur3afeGaussianBlur", .9, {attr:{stdDeviation:"0.1 0"}, ease:Expo.easeOut}, "-=1")

		// .to(txt3b, 1, {display:"block", x:'-=728', ease: Expo.easeOut}, "-=1")
		// .to("#blur3bfeGaussianBlur", .9, {attr:{stdDeviation:"0.1 0"}, ease:Expo.easeOut}, "-=1")

		.to(txt3a, .75, {y:'-=17', ease: Sine.easeInOut}, "+=1")
		// .to(txt3b, .75, {y:"-=17", opacity:0, ease: Sine.easeInOut}, "-=.75")

		.set(txt4, {display:"block"}, "-=.25")
		.to(txt4, 1, {x:'-=728', ease: Expo.easeOut})
		.to("#blur4feGaussianBlur", .9, {attr:{stdDeviation:"0.1 0"}, ease:Expo.easeOut}, "-=1")

		.to(cta, .5, {opacity:1}, "-=.25")
		.from(cta_txt, .5, {x:"-=133"}, "-=.25");
						
	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
