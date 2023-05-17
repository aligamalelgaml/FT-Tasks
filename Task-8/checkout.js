let purchase = JSON.parse(`{
    "color": "black",
    "size": "small",
    "number": 1
  }`);

let purchases = [];


$(document).ready(function() {

    removeOnMenuClick();

    getColorSize();

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

function initialAddCart() { // handles the initial click on the 'add to basket' button, creates the new footer and calls the function that listens to the plus/minus clicks.
    $("#initialAddButton").click(function(e) { 
        e.preventDefault();

        $("#footer-basket-add").addClass("hide");

        let footerTemplate = createFooterTemplate(1)

        $("#footer-container").append(footerTemplate);

        addPurchase();

        updateFooterCartCounter();
    });
}

function updateFooterCartCounter() { // listens to + or - events and adjusts the counter accordingly, reverts to the old footer if the counter reachs zero.
    let total_purchase_counter = 1;


    $("#minusCart").click(function (e) { 
        e.preventDefault();

        if(total_purchase_counter == 1) {
            $("#js-purchase-counter").remove();
            $("#footer-basket-add").removeClass("hide");
        }

        total_purchase_counter = total_purchase_counter - 1;

        deletePurchase();

        $("#purchase-count").text(total_purchase_counter);

        console.log(purchases);
    });

    $("#plusCart").click(function (e) { 
        e.preventDefault();

        total_purchase_counter = total_purchase_counter + 1;

        $("#purchase-count").text(total_purchase_counter);

        addPurchase();
    });

}

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

}

function addPurchase() {
    console.log("purchases:" + purchases);
    console.log(purchase);


    // let existingPurchase = purchases.find(e => (e.color === purchase.color && e.size === purchase.size));

    existingPurchase = purchases.some(function(e) {
        return e.color === purchase.color && e.size === purchase.size;
    });

    console.log("existing purchase:" + existingPurchase)
    
    // if() {
    //     console.log("found exisiting purchase, incrementing")
    //     e.number = e.number + 1;
    // } else {
    //     purchases.push(purchase);
    // }
    // // if (!existingPurchase) {
    // } else {
    //     existingPurchase.number++;
    // }
}

function deletePurchase() {
    let existingPurchase = purchases.find(e => e.color === purchase.color && e.size === purchase.size);
    
    if (existingPurchase) {
      existingPurchase.number--;

      if(existingPurchase.number == 0) {
        purchases = purchases.filter(function(e) {e != existingPurchase});
      }
    } else {
      return;
    }
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

