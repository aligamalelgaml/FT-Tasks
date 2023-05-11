

htmlContent = `
<div class="js-container"> 

<div class="row mt-3 pb-5 ps-5 pe-5 g-0">
    <div class="col-12 col-sm-4 mb-5 mb-sm-0">
        <div class="card p-2 w-75 border border-0 rounded-3 m-auto">
            <i class="fa-solid fa-layer-group fs-1 color-orange mb-3"></i>
        <span class="text-black fw-bold fs-5">Placeholder Title</span>
        <p class="fs-6 mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Voluptatum veritatis, soluta illo facere fugit reiciendis repellat
          laboriosam consequuntur optio voluptatem voluptates vero ullam
          aliquid suscipit similique, esse in provident magni.
        </p>
      </div>
    </div>

    <div class="col-12 col-sm-4 mb-5 mb-sm-0" >
        <div class="card p-2 w-75 border border-0 rounded-3 m-auto">
            <i class="fa-solid fa-face-smile fs-1 color-orange mb-3"></i>
            <span class="text-black fw-bold fs-5">Placeholder Title</span>
            <p class="fs-6 mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum veritatis, soluta illo facere fugit reiciendis repellat
              laboriosam consequuntur optio voluptatem voluptates vero ullam
              aliquid suscipit similique, esse in provident magni.
            </p>
        </div> 
    </div>

    <div class="col-12 col-sm-4 mb-5 mb-sm-0">
        <div class="card p-2 w-75 border border-0 rounded-3 m-auto">
            <i class="fa-solid fa-star fs-1 color-orange mb-3"></i>
            <span class="text-black fw-bold fs-5">Placeholder Title</span>
            <p class="fs-6 mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum veritatis, soluta illo facere fugit reiciendis repellat
              laboriosam consequuntur optio voluptatem voluptates vero ullam
              aliquid suscipit similique, esse in provident magni.
            </p>
        </div>
    </div>
</div>

<div class="row mt-3 pb-5 ps-5 pe-5 g-0">
    <div class="col-12 col-sm-4 mb-5 mb-sm-0">
      <div class="card p-2 w-75 border border-0 rounded-3 m-auto">
        <i class="fa-solid fa-thumbs-up fs-1 color-orange mb-3"></i>
        <span class="text-black fw-bold fs-5">Placeholder Title</span>
        <p class="fs-6 mt-2 pb-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Voluptatum veritatis, soluta illo facere fugit reiciendis repellat
          laboriosam consequuntur optio voluptatem voluptates vero ullam
          aliquid suscipit similique, esse in provident magni.
        </p>
      </div>
    </div>

    <div class="col-12 col-sm-4 mb-5 mb-sm-0" >
        <div class="card p-2 w-75 border border-0 rounded-3 m-auto">
            <i class="fa-solid fa-arrow-trend-up fs-1 color-orange mb-3"></i>
            <span class="text-black fw-bold fs-5">Placeholder Title</span>
            <p class="fs-6 mt-2 pb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum veritatis, soluta illo facere fugit reiciendis repellat
              laboriosam consequuntur optio voluptatem voluptates vero ullam
              aliquid suscipit similique, esse in provident magni.
            </p>
        </div> 
    </div>

    <div class="col-12 col-sm-4 mb-5 mb-sm-0">
        <div class="card p-2 w-75 border border-0 rounded-3 m-auto">
            <i class="fa-solid fa-dollar-sign fs-1 color-orange mb-3"></i>
            <span class="text-black fw-bold fs-5">Placeholder Title</span>
            <p class="fs-6 mt-2 pb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum veritatis, soluta illo facere fugit reiciendis repellat
              laboriosam consequuntur optio voluptatem voluptates vero ullam
              aliquid suscipit similique, esse in provident magni.
            </p>
        </div>
    </div>
</div>

</div>`;


document.getElementById("js-content").appendChild(elementFromHtml(htmlContent));


function elementFromHtml(html) {
    const template = document.createElement("template");

    template.innerHTML = html.trim();

    return template.content.firstElementChild;
}