function switchTheme(color)
{
    let background = document.querySelector('.toggle-hero-background');
    let cards = document.querySelectorAll('.toggle-card-background');
    let glowingButton = document.querySelector('.toggle-glow');
    let buttonColors = document.querySelectorAll('.toggle-button-background');

    if(color === 'green') {
        background.classList.remove('purple-background-theme');
        background.classList.add('green-background-theme');

        cards.forEach((element) => {
            element.classList.remove('purple-background-theme')
            element.classList.add('green-background-theme');
        });

        buttonColors.forEach((element) => {
            element.classList.remove('purple-background-theme')
            element.classList.add('green-background-theme');
        });

        glowingButton.classList.remove('glow-purple');
        glowingButton.classList.add('glow-green');
    }

    if(color === 'purple') {
        background.classList.remove('green-background-theme');
        background.classList.add('purple-background-theme');

        cards.forEach((element) => {
            element.classList.remove('green-background-theme')
            element.classList.add('purple-background-theme');
        });

        buttonColors.forEach((element) => {
            element.classList.remove('green-background-theme')
            element.classList.add('purple-background-theme');
        });

        glowingButton.classList.remove('glow-green');
        glowingButton.classList.add('glow-purple');
    }
}