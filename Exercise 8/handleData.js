$(document).ready(function(){

    var inputData = JSON.parse(localStorage.getItem("inputData"));

    if(inputData === null) {
        alert("No data inserted! Go back to backend.html!")
        var data = [];
        localStorage.setItem("inputData", JSON.stringify(data));
    } else {
        inputData.forEach(entry => {
            var cardTemplate = createCardTemplate(entry.title, entry.description, entry.followers, entry.platform)
            $("#js-card-content").append(cardTemplate);
        });

    }

  });


function createCardTemplate(title, desc, number, platform) {

    var icon = ``;
    var borderTopColor = ``;

    if(platform === "1") { // facebook
        icon = `<i class="fa-brands fa-square-facebook ms-2" style="color: #1791f7;"></i>`;
        borderTopColor = `facebookBorderTop`;
    } else if(platform === "2") { // twitter
        icon = `<i class="fa-brands fa-square-twitter" style="color: #005eff;"></i>`;
        borderTopColor = `twitterBorderTop`;
    } else if(platform === "3") { // instagram
        icon = `<i class="fa-brands fa-square-instagram" style="color: #005eff;"></i>`;
        borderTopColor = `instagramBorderTop`;
    } else if(platform === "4") { // youtube
        icon = `<i class="fa-brands fa-square-youtube" style="color: #005eff;"></i>`;
        borderTopColor = `youtubeBorderTop`;
    }

    var template = `
    <div class="col-3">
    <div class="card ${borderTopColor}" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title text-center">${icon} ${title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${desc}</h6>
          <p class="card-text">${number}</p>
        </div>
      </div>
    </div>
    `;

    return template;
}