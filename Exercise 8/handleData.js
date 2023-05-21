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
        icon = `<i class="fa-brands fa-square-facebook fa-xl me-2" style="color: #1791f7;"></i>`;
        borderTopColor = `facebookBorderTop`;
    } else if(platform === "2") { // twitter
        icon = `<i class="fa-brands fa-square-twitter fa-xl me-2" style="color: #1da2f0;"></i>`;
        borderTopColor = `twitterBorderTop`;
    } else if(platform === "3") { // instagram
        icon = `<i class="fa-brands fa-square-instagram fa-xl me-2" style="color: #c4268c;"></i>`;
        borderTopColor = `instagramBorderTop`;
    } else if(platform === "4") { // youtube
        icon = `<i class="fa-brands fa-square-youtube fa-xl me-2" style="color: #c4032b;"></i>`;
        borderTopColor = `youtubeBorderTop`;
    }

    var template = `
    <div class="col-3">
    <div class="card ${borderTopColor}" style="width: 18rem;">
        <div class="card-body text-center">
          <h6 class="card-title pt-2 mb-5">${icon} ${title}</h6>
          <h2 class="card-subtitle mb-2 number-text">${number}</h2>
          <h2 class="card-subtitle mb-4 followers-text">FOLLOWERS</h2>
          <p class="card-text">${desc}</p>
        </div>
      </div>
    </div>
    `;

    return template;
}