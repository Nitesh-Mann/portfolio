// responsive header //

$(document).ready(function(){
    $('.ph-list').click(function(){
        $(this).toggleClass('ph-list ph-x');
        $('.header2').toggleClass('show');
        
    });
});

// when page is refreshed it goes to top //


$(document).ready(function(){
  // Scroll to top on page refresh
  $(window).on("beforeunload", function(){
      $(window).scrollTop(0);
      $(window).off("beforeunload");
  });

  // Delay execution to ensure scrollTop runs before the page is refreshed
  setTimeout(function(){
      $(window).scrollTop(0);
  }, 0);
});


// reveal animation //

$(document).ready(function(){
  function revealOnLoad() {
      $('.onloadreveal').addClass('reveal');
  }

  // Run on initial page load
  revealOnLoad();

  // Run on page refresh
  $(window).on("load", function(){
      revealOnLoad();
  });
});



// scroll animation//

$(document).ready(function () {
    $(window).on("scroll", function () {
      $(".animation").each(function () {
        var position = $(this).offset().top;
        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop();
  
        if (position < scrollTop + windowHeight) {
          $(this).addClass("reveal2");
        } else {
          $(this).removeClass("reveal2");
        }
      });
    });
  });
  


