'use strict';

$(function() {
    var width = 693;
    var animationSpeed = 500;
    var pause = 3000;
    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $next = $('#rightNav');
    var $prev = $('#leftNav');
    var interval;
    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
    
    $('#slider').css({ width: slideWidth, height: slideHeight });
    
    $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    
    $('#slider ul li:last-child').prependTo('#slider ul');


    function startSlider() {
        interval = setInterval(function() {
        nextSlide();}, pause);
    }

    function pauseSlider() {
        clearInterval(interval);
    }

    function nextSlide() {
        $('#slider ul li:first-child').appendTo('#slider ul');
        $('#slider ul').css('margin-left', 0);
        $slideContainer.animate({'margin-left': '-693px'}, animationSpeed);

    }
    
    function prevSlide() {
        
         $('#slider ul li:last-child').prependTo('#slider ul');
         $('#slider ul').css('left', '0px');
         $slideContainer.animate({'margin-left': '-693px'}, animationSpeed);}


        $slideContainer
        .on('click', pauseSlider);

        $next
        .on('click', nextSlide).on('mouseenter', pauseSlider);
        
        $prev
        .on('click', prevSlide);
        
        startSlider();
    });
