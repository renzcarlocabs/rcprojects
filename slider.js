'use strict';

$(function() {
    var width = 720;
    var animationSpeed = 500;
    var pause = 3000;
    var currentSlide = 1;

    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);
    var $next = $('#rightNav');
    var $prev = $('#leftNav');
    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                } 
            });
        }, pause);
    }

    function pauseSlider() {
        clearInterval(interval);
    }

function nextSlide() {
            ++currentSlide;
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                } 
            });
    }
  function prevSlide() {
            currentSlide = currentSlide -1;
            if(currentSlide < 1){ 
                currentSlide = 3;  
             }  $slideContainer.animate({'margin-left': '+='+width}, animationSpeed);}


    $slideContainer
        .on('click', pauseSlider);

    $next.on('click', nextSlide);
    $prev.on('click', prevSlide);
    window.onload(startSlider())
});
    