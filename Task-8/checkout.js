$(document).ready(function() {

    removeOnMenuClick();




  });



function removeOnMenuClick() {
    $(".navbar-toggler").click(function() {
        if ($(this).hasClass("collapsed")) {
          setTimeout(function() {
            $(".menu-hide").toggleClass("hide");
          }, 375); // 375ms delay to ensure rest of navbar icons do not float up the screen as the menu is closing.
        } else {
          $(".menu-hide").toggleClass("hide");
        }
      });
}

