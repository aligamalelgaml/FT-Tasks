let purchase = {
    "color": "black",
    "size": "small",
    "number": 1
  };

let purchases = [];

let total_purchase_counter = 1;


$(document).ready(function() {

    $(".navbar-toggler").click(function() {

        if ($(this).hasClass("collapsed")) {

          setTimeout(function() {
            $(".menu-hide").toggleClass("hide");
          }, 375); // 375ms delay to ensure rest of navbar icons do not float up the screen as the menu is closing.
          
        } else {
          $(".menu-hide").toggleClass("hide");
        }
    });

    $("#black-add-button").click(function (e) { 
        e.preventDefault();

        purchase.color = "black";
    });

    $("#red-add-button").click(function (e) { 
        e.preventDefault();

        purchase.color = "red";
    });

    $("#silver-add-button").click(function (e) { 
        e.preventDefault();

        purchase.color = "silver";
        console.log(purchase);
    });

    $("#small-add-button").click(function (e) { 
        e.preventDefault();

        purchase.size = "small";
    });

    $("#meduim-add-button").click(function (e) { 
        e.preventDefault();

        purchase.size = "meduim";
    });

    $("#large-add-button").click(function (e) { 
        e.preventDefault();

        purchase.size = "large";
        console.log(purchase);
    });

    $("#initialAddButton").click(function(e) { 
        e.preventDefault();

        $("#footer-basket-add").addClass("hide");

        let footerTemplate = createFooterTemplate(1)

        $("#footer-container").append(footerTemplate);

        addPurchase();
    });
});


function minusHandle(e){
    e.preventDefault();

    if(total_purchase_counter == 1) {
        $("#js-purchase-counter").remove();
        $("#footer-basket-add").removeClass("hide");
    }

    total_purchase_counter = total_purchase_counter - 1;

    deletePurchase();

    $("#purchase-count").text(total_purchase_counter);
}

function plusHandle(e){
    e.preventDefault();

    total_purchase_counter = total_purchase_counter + 1;

    $("#purchase-count").text(total_purchase_counter);

    addPurchase();
}

function addPurchase() {
    let existingPurchase = purchases.find(e => (e.color === purchase.color && e.size === purchase.size));

    if(existingPurchase === undefined) {
        const newPurchase = JSON.parse(JSON.stringify(purchase));
        purchases.push(newPurchase);
    } else {
        console.log("found exisiting, incrementing..")
        existingPurchase.number = existingPurchase.number + 1;
    }
   
}

function deletePurchase() {
    let lastPurchase = purchases.at(-1);

    if (lastPurchase) {
      lastPurchase.number--;

      if(lastPurchase.number == 0) {
        purchases = purchases.filter(function(e) {e !== lastPurchase});
      }
    } else {
      return;
    }
}

function showCart(e){
    e.preventDefault();

    $(".listing-page").addClass("hide");
    $(".cart-page").removeClass("hide");

}

function closeCart(e){
    e.preventDefault();

    $(".cart-page").addClass("hide");
    $(".listing-page").removeClass("hide");
}

function createFooterTemplate(count) { // helper function
    let footerTemplate = `
    <div class="row align-items-center text-center gx-0" id="js-purchase-counter">
        <div class="col-4">
            <a href="#" onclick="minusHandle(event)" id="minusCart"><i class="fa-solid fa-circle-minus text-decoration-none text-white fs-1"></i></a>
        </div>
        <div class="col-4">
            <span id="purchase-count"> ${count} </span>
        </div>
        <div class="col-4">
            <a href="#" onclick="plusHandle(event)" id="plusCart"><i class="fa-solid fa-circle-plus text-decoration-none text-white fs-1"></i></a>
        </div>
    </div>
    `;

    return footerTemplate;
}

