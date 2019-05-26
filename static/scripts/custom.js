

// Nivo Slider
$(document).ready(function () {
	$('#slider').nivoSlider({
	    effect: 'random',
		startSlide:         0, //Set starting Slide (0 index)
		animSpeed:          700, //Slide transition speed
		pauseTime:          4000,
		captionOpacity:     0.6, //Caption Opacity
		directionNavHide:   true, //Only show on hover
		pauseOnHover: false,//Stop animation while hovering
        directionNav: true
	});
});
/*
sliceDown
sliceDownLeft
sliceUp
sliceUpLeft
sliceUpDown
sliceUpDownLeft
fold
fade
random
slideInRight
slideInLeft
boxRandom
boxRain
boxRainReverse
boxRainGrow
boxRainGrowReverse
  effect: 'fade,slideInRight',
*/
