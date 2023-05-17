$(document).ready(function() {

    removeOnMenuClick();




  });



function removeOnMenuClick() {
    $(".navbar-toggler").click(function() {

        if($(".navbar-toggler").hasClass("collapsed")) {

            setTimeout(function (){
            $(".menu-hide").toggleClass("hide");
              }, 350); // 350 ms delay so that the rest of the menu does not show up as sliding up with the collapsing menu.

            return;  
        } 

        $(".menu-hide").toggleClass("hide");
    });
}

