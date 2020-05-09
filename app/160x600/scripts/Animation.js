var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var txt1 = document.getElementById("txt1");
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
}

// --------------------------------------------------------------------------------------
// Starts the animation
function start() {

	tl1.set(txt1, {display:"block"})
	.from(img, 1, {x:'+=160', ease: Expo.easeOut})
	.to(txt1, 1, {x:'-=160', ease: Expo.easeOut}, "-=.75")
	.to("#blur1feGaussianBlur", .9, {attr:{stdDeviation:"0.1 0"}, ease:Expo.easeOut}, "-=1")

	.to(cta, .5, {opacity:1}, "-=.25")
	.from(cta_txt, .5, {x:"-=85"}, "-=.25");

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
