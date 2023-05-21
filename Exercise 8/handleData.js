$(document).ready(function(){

    var inputData = JSON.parse(localStorage.getItem("inputData"));

    inputData.forEach(entry => {
        entry.forEach(atr => {
            console.log(atr);
        })
        
    });

    // var title = localStorage.getItem("title");
    // var desc = localStorage.getItem("desc");
    // var number = localStorage.getItem("number");
    // var selected = localStorage.getItem("selected");
    // var oldData = JSON.parse(localStorage.getItem("oldData"));

    // var cardTemplate = createCardTemplate(title, desc, number, selected)

    // console.log(oldData);


    // if(oldData === null) {
    //     var data = [];
    //     data.push(cardTemplate);
    //     localStorage.setItem("oldData", JSON.stringify(data));
    // } else {
    //     oldData.forEach(element => {
    //         $("#js-card-content").append(element);
    //     });
    //     oldData.push(cardTemplate);
    //     localStorage.setItem("oldData", JSON.stringify(oldData));
    // }

    // $("#js-card-content").append(cardTemplate);


  });


function createCardTemplate(title, desc, number, selected) {
    var template = `
    <div class="col-3">
    <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${desc}</h6>
          <p class="card-text">${number}</p>
          <p class="card-text">Platform: ${selected}</p>
        </div>
      </div>
    </div>
    `;

    return template;
}