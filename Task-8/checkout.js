$(document).ready(function() {

    removeOnMenuClick();

    initialAddCart();




  });



function removeOnMenuClick() { // removes menu icons & logo on button expansion

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

function initialAddCart() {
    $("#initialAddButton").click(function(e) { 
        e.preventDefault();

        $("#footer-basket-add").addClass("hide");

        let footerTemplate = createFooterTemplate(1)

        $("#footer-container").append(footerTemplate);

        updateFooterCartCounter();
    });
}

function updateFooterCartCounter() {
    let counter = 1;

    $("#minusCart").click(function (e) { 
        e.preventDefault();

        if(counter == 1) {
            $("#js-purchase-counter").remove();
            $("#footer-basket-add").removeClass("hide");
        }

        counter = counter - 1;

        $("#purchase-count").text(counter);
    });

    $("#plusCart").click(function (e) { 
        e.preventDefault();

        counter = counter + 1;

        $("#purchase-count").text(counter);
    });



}




function createFooterTemplate(count) { // helper function
    let footerTemplate = `
    <div class="row align-items-center text-center gx-0" id="js-purchase-counter">
        <div class="col-4">
            <a href="#" id="minusCart"><i class="fa-solid fa-circle-minus text-decoration-none text-white fs-1"></i></a>
        </div>
        <div class="col-4">
            <span id="purchase-count"> ${count} </span>
        </div>
        <div class="col-4">
            <a href="#" id="plusCart"><i class="fa-solid fa-circle-plus text-decoration-none text-white fs-1"></i></a>
        </div>
    </div>
    `;

    return footerTemplate;
}

