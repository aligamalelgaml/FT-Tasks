class card {
  constructor(icon, title, details) {
    this.icon = icon;
    this.title = title;

    if (details.length > 120) {
      this.details = truncate(details, 119);

      this.htmlContent = `
      <div class="col-12 col-sm-4 mb-5 mb-sm-4">
      <div class="card shadow p-2 w-75 border border-0 rounded-3 m-auto h-100">
      <span class="fa-stack fa-2x">
      <i class="fa-solid fa-square fa-stack-2x color-grey"></i>
      <i class="fa-solid ${this.icon} fa-stack-1x color-orange"></i>
      </span>
      <span class="text-black ms-2 fw-bold fs-5 ttl">${this.title}</span>
      <p class="ms-2 fs-6 mt-2">
        ${this.details}
      </p>
      <button class="popUpBtnCard purple-background-theme toggle-button-background" onclick="popUp(event)">Read More</button>
      </div>
      </div>
      `;
    } else {
      this.details = details;

      this.htmlContent = `
      <div class="col-12 col-sm-4 mb-5 mb-sm-4">
      <div class="card shadow p-2 w-75 border border-0 rounded-3 m-auto h-100">
      <span class="fa-stack fa-2x">
      <i class="fa-solid fa-square fa-stack-2x color-grey"></i>
      <i class="fa-solid ${this.icon} fa-stack-1x color-orange"></i>
      </span>
      <span class="text-black ms-2 fw-bold fs-5 ttl">${this.title}</span>
      <p class="ms-2 fs-6 mt-2">
        ${this.details}
      </p>
      </div>
      </div>
      `;
    }
  }
}

// CARD GENERATION //

let card1 = new card("fa-layer-group", "Placeholder Title 1", `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
Voluptatum veritatis, esse in provident magni 1.`);

let card2 = new card("fa-face-smile", "Placeholder Title 2", `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
Voluptatum veritatis, soluta illo facere fugit reiciendis repellat
laboriosam consequuntur optio voluptatem voluptates vero ullam
aliquid suscipit similique, esse in provident magni 2.`);

let card3 = new card("fa-star", "Placeholder Title 3", `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
Voluptatum veritatis, soluta illo facere fugit reiciendis repellat
laboriosam consequuntur optio voluptatem voluptates vero ullam
aliquid suscipit similique, esse in provident magni 3.`);

let card4 = new card("fa-thumbs-up", "Placeholder Title 4", `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
Voluptatum veritatis, soluta illo facere fugit reiciendis repellat
laboriosam consequuntur optio voluptatem voluptates vero ullam
aliquid suscipit similique, esse in provident magni 4.`);

let card5 = new card("fa-arrow-trend-up", "Placeholder Title 5", `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
Voluptatum veritatis, soluta illo facere fugit reiciendis repellat
laboriosam consequuntur optio voluptatem voluptates vero ullam
aliquid suscipit similique, esse in provident magni 5.`);

let card6 = new card("fa-dollar-sign", "Placeholder Title 6", `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
Voluptatum veritatis, soluta illo facere fugit reiciendis repellat
laboriosam consequuntur optio voluptatem voluptates vero ullam
aliquid suscipit similique, esse in provident magni 6.`);

let briefText = `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
Voluptatum veritatis, soluta illo facere fugit reiciendis repellat
laboriosam consequuntur optio voluptatem voluptates vero ullam
aliquid suscipit similique, esse in provident magni Lorem ipsum dolor, sit amet consectetur adipisicing elit.
Voluptatum veritatis, soluta illo facere fugit reiciendis repellat
laboriosam consequuntur optio voluptatem voluptates vero ullam
aliquid suscipit similique, esse in provident magni.`

cardList = [card1, card2, card3, card4, card5, card6];

// CARD GENERATION ENDS // 

cardList.forEach(card => { // iterating over list of cards to append them to appropriate HTML element.
  document.getElementById("js-content-cards").appendChild(elementFromHtml(card.htmlContent));
});

injectBrief();


function elementFromHtml(html) { // helper function
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
}

function popUp(event) {
  document.querySelector("body").style.overflow = 'hidden'; // prevents main window scrolling when the popup triggers.

  var popup = document.getElementById("card-modal");

  var popUpTitle = document.getElementById("popUpTitle");
  var popUpText = document.getElementById("popUpText");

  if (event.target.classList.contains("popUpBtnCard")) {
    var title = event.target.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML;
    var text = event.target.previousSibling.previousSibling.innerHTML;
  } else if (event.target.classList.contains("popUpBtnBrief")) {
    var title = event.target.previousElementSibling.previousElementSibling.innerHTML;
    var text = event.target.previousElementSibling.innerHTML;
  }

  popUpTitle.innerHTML = title;
  popUpText.innerHTML = text.replace("...", ""); // replaces ... with empty whitespace to return text to original form.

  popUpText.firstElementChild.classList.toggle("hidden");

  popup.style.display = "block";
}

function closePopUp(event) {
  document.querySelector("body").style.overflow = 'scroll'; // renables scrolling

  var popup = document.getElementById("card-modal");
  popup.style.display = "none";
}

function truncate(text, maxCount) { // surronds text over 120 characers with a span tag assigned a 'hidden' class that hides it in the card.

  var truncatedDetails = text.substring(0, maxCount);
  var appendDotsDetails = truncatedDetails.concat("...");

  var startSpan = '<span class="hidden">';
  var remainingDetails = text.substring(maxCount);
  var endSpan = "</span>"

  var returnText = appendDotsDetails.concat(startSpan).concat(remainingDetails).concat(endSpan);

  return returnText;
}

function injectBrief() {
  var brief = document.getElementById("js-content-brief");

  if (briefText.length > 300) {
    briefText = truncate(briefText, 299);
  }

  var briefHtml = `<p>`.concat(briefText).concat(`</p>`);

  var button = `<button class="popUpBtnBrief purple-background-theme toggle-button-background" onclick="popUp(event)">Read More</button>`;

  brief.appendChild(elementFromHtml(briefHtml));
  brief.appendChild(elementFromHtml(button));
}