function switchTheme(color) {
    let cardBackgrounds = document.querySelectorAll('.card');

    if(color === "orange") {
        cardBackgrounds.forEach((element) => {
            element.classList.remove('bg-primary')
            element.classList.add('bg-warning');
        });
    } else {
        cardBackgrounds.forEach((element) => {
            element.classList.remove('bg-warning')
            element.classList.add('bg-primary');
        });
    }

}