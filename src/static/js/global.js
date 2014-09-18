---
---

/* SVG Fallback for unsupported browsers */
(function($){if(!Modernizr.svg){$('img').each(function(){$(this).attr('src',$(this).data('fallback'));});}}(jQuery));

/*
 *  randomBackground.js - v0.1.3
 *  Attach a random background image to an element from a user supplied list on page load.
 *  https://github.com/michaelbragg/randombackground.js/
 *
 *  Made by Michael Bragg
 *  Under MIT License
 */

var randomBackground=randomBackground||{};!function(a){randomBackground.config={parent:".hero",path:"path/to/image/",images:["image01.jpg","image02.jpg","image03.jpg"]},randomBackground.init=function(b){b&&"object"==typeof b&&a.extend(randomBackground.config,b);var c=randomBackground.config.images,d=Math.floor(Math.random()*c.length);a(randomBackground.config.parent).css("background-image","url("+randomBackground.config.path+c[d]+")")}}(jQuery);

;(function ( $ ){
  $(document).ready(function() {

    // To extend the default config settings
    // pass a object as an argument for the init function
    // eg. randomBackground.init({ images: 'image01.jpg', 'image02.jpg' });

    randomBackground.init( { parent: '.hero__image', path: '{{ site.static }}/gui/hero/', images: ['jodie-stimpson.jpg', 'event_2013_001.jpg'] });

  });

})( jQuery );

;(function ( $ ){
  $(document).ready(function() {

    $("#navicon").click(function () {
      $("#js-nav__main").toggleClass("js-is-active");
    });

    $(".alert__close").on('click', function(e) {
      e.preventDefault();
      $(this).parent('#js-alert').addClass('hidden');
    });

  });

})( jQuery );
