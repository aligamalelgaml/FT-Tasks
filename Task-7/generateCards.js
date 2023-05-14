let jsonCards = [
    {cardTitle:"Placeholder Title 1", cardText:"Lorem ipsum dolor sit amet consectetur adipisicing elitatae obcaecati"},
    {cardTitle:"Placeholder Title 2", cardText:"Lorem ipsum dolor sit amet consectetur adipisicing elitatae obcaecati"},
    {cardTitle:"Placeholder Title 3", cardText:"Lorem ipsum dolor sit amet consectetur adipisicing elitatae obcaecati"},
    {cardTitle:"Placeholder Title 4", cardText:"Lorem ipsum dolor sit amet consectetur adipisicing elitatae obcaecati"},
    {cardTitle:"Placeholder Title 5", cardText:"Lorem ipsum dolor sit amet consectetur adipisicing elitatae obcaecati"},
    {cardTitle:"Placeholder Title 6", cardText:"Lorem ipsum dolor sit amet consectetur adipisicing elitatae obcaecati"}
]

let htmlTemplate = `
<div class="col-12 col-sm-4 mb-5 mb-sm-4">
<div class="card bg-primary rounded rounded-3 shadow p-4 border border-2 rounded-3 m-auto">
    <div class="row">
        <div class="col-8">
            <span class="text-black fw-bold fs-5"> {placeholderTitle} </span>
            <p class="fs-6 mt-2">{placeholderText}</p>
        </div>

        <div class="col-4 m-auto text-center">
            <a onclick='deleteCard(this);' class="badge bg-danger pt-2 pb-2 ps-3 pe-3" href="#">Delete</a>
        </div>
    </div>
</div>
</div>
`

jsonCards.forEach(jsonCards => {
    htmlCard = bindHtml(jsonCards, htmlTemplate);
    document.getElementById("js-content").appendChild(elementFromHtml(htmlCard));
})

function bindHtml(card, htmlTemplate) {
    var boundHtmlCard = htmlTemplate.replace("{placeholderTitle}", card.cardTitle).replace("{placeholderText}", card.cardText);
    return boundHtmlCard;
}


function elementFromHtml(html) {
    const template = document.createElement("template");

    template.innerHTML = html.trim();

    return template.content.firstElementChild;
}

function deleteCard(eventNode) {
    eventNode.closest("div.col-12").remove();
}


