/**
 * @file
 * Alexander in Education functionality.
 */

(function ($, Drupal, drupalSettings) {

  'use strict';

  /**
   *
   * @param group
   */
  $.equalHeight = function (group) {
    var tallest = 0;
    group.removeAttr('style').each(function () {
      var thisHeight = $(this).height();
      if (thisHeight > tallest) {
        tallest = thisHeight;
      }
    });
    group.height(tallest);
  };

  /**
   *
   * @returns {*[]}
   */
  $.getPageSize = function () {
    var xScroll, yScroll, windowWidth, windowHeight, pageWidth, pageHeight;

    if (window.innerHeight && window.scrollMaxY) {
      xScroll = document.body.scrollWidth;
      yScroll = window.innerHeight + window.scrollMaxY;
    } else if (document.body.scrollHeight > document.body.offsetHeight) { // all but Explorer Mac
      xScroll = document.body.scrollWidth;
      yScroll = document.body.scrollHeight;
    } else if (document.documentElement && document.documentElement.scrollHeight > document.documentElement.offsetHeight) { // Explorer 6 strict mode
      xScroll = document.documentElement.scrollWidth;
      yScroll = document.documentElement.scrollHeight;
    } else { // Explorer Mac...would also work in Mozilla and Safari
      xScroll = document.body.offsetWidth;
      yScroll = document.body.offsetHeight;
    }

    if (self.innerHeight) { // all except Explorer
      windowWidth = self.innerWidth;
      windowHeight = self.innerHeight;
    } else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
      windowWidth = document.documentElement.clientWidth;
      windowHeight = document.documentElement.clientHeight;
    } else if (document.body) { // other Explorers
      windowWidth = document.body.clientWidth;
      windowHeight = document.body.clientHeight;
    }

    // for small pages with total height less then height of the viewport
    if (yScroll < windowHeight) {
      pageHeight = windowHeight;
    } else {
      pageHeight = yScroll;
    }

    // for small pages with total width less then width of the viewport
    if (xScroll < windowWidth) {
      pageWidth = windowWidth;
    } else {
      pageWidth = xScroll;
    }

    return [pageWidth, pageHeight, windowWidth, windowHeight];
  };


  /**
   *
   * @type {{attach: attach}}
   */
  Drupal.behaviors.OtherTweaks = {
    attach: function (context, settings) {

      $('.upper').on('click', function (event) {
        event.preventDefault();
        $('html, body', context).animate({scrollTop: 0}, 1000);
        return false;
      });

      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          $('.upper').fadeIn();
        } else {
          $('.upper').fadeOut();
        }
      });
    }
  }

})(jQuery, Drupal, drupalSettings);
