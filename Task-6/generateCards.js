class card {
  constructor(icon, title, details) {
    this.icon = icon;
    this.title = title;
    this.details = details;

    this.htmlContent = `<div class="col-12 col-sm-4 mb-5 mb-sm-4">
    <div class="card shadow p-2 w-75 border border-0 rounded-3 m-auto">
        <i class="fa-solid ms-2 ${this.icon} fs-1 color-orange mb-3"></i>
    <span class="text-black ms-2 fw-bold fs-5">${this.title}</span>
    <p class="ms-2 fs-6 mt-2">
      ${this.details}
    </p>
    </div>
    </div>`;
  }
}

let card1 = new card("fa-layer-group", "Placeholder Title", `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
Voluptatum veritatis, soluta illo facere fugit reiciendis repellat
laboriosam consequuntur optio voluptatem voluptates vero ullam
aliquid suscipit similique, esse in provident magni.`);

let card2 = new card("fa-face-smile", "Placeholder Title", `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
Voluptatum veritatis, soluta illo facere fugit reiciendis repellat
laboriosam consequuntur optio voluptatem voluptates vero ullam
aliquid suscipit similique, esse in provident magni.`);

let card3 = new card("fa-star", "Placeholder Title", `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
Voluptatum veritatis, soluta illo facere fugit reiciendis repellat
laboriosam consequuntur optio voluptatem voluptates vero ullam
aliquid suscipit similique, esse in provident magni.`);

let card4 = new card("fa-thumbs-up", "Placeholder Title", `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
Voluptatum veritatis, soluta illo facere fugit reiciendis repellat
laboriosam consequuntur optio voluptatem voluptates vero ullam
aliquid suscipit similique, esse in provident magni.`);

let card5 = new card("fa-arrow-trend", "Placeholder Title", `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
Voluptatum veritatis, soluta illo facere fugit reiciendis repellat
laboriosam consequuntur optio voluptatem voluptates vero ullam
aliquid suscipit similique, esse in provident magni.`);

let card6 = new card("fa-trend-up", "Placeholder Title", `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
Voluptatum veritatis, soluta illo facere fugit reiciendis repellat
laboriosam consequuntur optio voluptatem voluptates vero ullam
aliquid suscipit similique, esse in provident magni.`);

cardList = [card1, card2, card3, card4, card5, card6];


cardList.forEach(element => {
  console.log(element.htmlContent);
  document.getElementById("js-content").appendChild(elementFromHtml(element.htmlContent));
});


function elementFromHtml(html) {
    const template = document.createElement("template");

    template.innerHTML = html.trim();

    return template.content.firstElementChild;
}