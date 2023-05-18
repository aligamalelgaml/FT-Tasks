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

    getColorSize();

    $("#initialAddButton").click(function(e) { 
        e.preventDefault();

        $("#footer-basket-add").addClass("hide");

        let footerTemplate = createFooterTemplate(1)

        $("#footer-container").append(footerTemplate);

        addPurchase();
    });
});

function getColorSize() {
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
    });
}


function minusHandle(e){
    e.preventDefault();

    total_purchase_counter = total_purchase_counter - 1;

    if(total_purchase_counter >= 1) {
        deletePurchase();
        $(".purchase-count").text(total_purchase_counter);

    } else {
        $("#js-purchase-counter").remove();
        $("#footer-basket-add").removeClass("hide");
        $(".purchase-count").text(0);
    }

}

function plusHandle(e){
    e.preventDefault();

    total_purchase_counter = total_purchase_counter + 1;

    $(".purchase-count").text(total_purchase_counter);

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

    calculateAndInjectTotal();
}

function closeCart(e){
    e.preventDefault();

    $(".cart-page").addClass("hide");
    $(".listing-page").removeClass("hide");
    $("#js-cart-items").empty();
}

function calculateAndInjectTotal() {
    if(purchases.length === 0) {
        $("#js-cart-items").append(createEmptyCartTemplate());
        console.log("empty cart");
    } else {
        $("#js-cart-items").append(createItemAppendTemplate());

        $("#js-cart-items").append(createSubtotalAppendTemplate());
    }

    // purchases.forEach(itemPurchase => { // incase we need to create seperate item listing for different colors/sizes.
    //     $("#js-cart-items").append(createItemAppendTemplate(item));
    //     console.log(itemPurchase);
    // });

}

function createFooterTemplate(count) { // helper function
    let footerTemplate = `
    <div class="row align-items-center text-center gx-0" id="js-purchase-counter">
        <div class="col-4">
            <a href="#" onclick="minusHandle(event)" id="minusCart"><i class="fa-solid fa-circle-minus text-decoration-none text-white fs-1"></i></a>
        </div>
        <div class="col-4">
            <span class="purchase-count"> ${count} </span>
        </div>
        <div class="col-4">
            <a href="#" onclick="plusHandle(event)" id="plusCart"><i class="fa-solid fa-circle-plus text-decoration-none text-white fs-1"></i></a>
        </div>
    </div>
    `;

    return footerTemplate;
}

function createItemAppendTemplate() {
    itemAppendTemplate = `
    <div class="row item-img-wrapper">
        <div class="col-4">
            <img src="./assets/jacket.png" class="img-fluid" alt="jacket small image">
        </div>

        <div class="col-8 item-details-wrapper">
            <div class="row">
                <span class="item-brand fs-6">MOHAN</span>
                <span class="item-title fs-6 ">Recycle Boucle Knit Cardigan Pink</span>

                <div class="col-12">
                    <a href="#" onclick="minusHandle(event);updateSubtotal();" id="minusCart"><i class="fa-solid fa-circle-minus text-decoration-none text-black fs-4"></i></a>
                    <span class="item-price purchase-count">${total_purchase_counter}</span>
                    <a href="#" onclick="plusHandle(event);updateSubtotal();" id="plusCart"><i class="fa-solid fa-circle-plus text-decoration-none text-black fs-4"></i></a>
                </div>
                <span class="item-price">$120</span>
            </div>
        </div>
    </div>`

    return itemAppendTemplate;
}

function createSubtotalAppendTemplate() {
    var total = 120 * total_purchase_counter;
    subtotalTemplate = 
    `
    <div class="row justify-content-between  border border-top border-light">
        <div class="col-6">
            <span class="item-brand fs-6">SUB TOTAL </span>
        </div>

        <div class="col-6 text-end">
            <span class="item-brand fs-6 text-orange total">${total}</span>
        </div>
    </div>

    <div class="row">
        <p class="open-fashion-font disclaimer-text">* shipping charges, taxes and discount codes are calculated at time of accounting.</p>
    </div> 
    `;

    return subtotalTemplate;
}

function createEmptyCartTemplate() {
    var emptyCartTemplate = `
    <h2 class="tenor-sans text-silvergrey text-center fs-4 mt-5">You have no items in your cart</h2>
    `;

    return emptyCartTemplate;
}

function updateSubtotal() {
    if(total_purchase_counter >= 0) {
        var total = 120 * total_purchase_counter;
        $(".total").text(total);
    }
}

