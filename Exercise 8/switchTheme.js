$(document).ready(function () {
    $("#themeSwitch").change(function (e) { 
        e.preventDefault();
        
        $("body").toggleClass("body-dark-theme");
        $(".card-body").toggleClass("card-dark-theme text-white");
        $(".title").toggleClass("text-white");
        $(".text-grey-bold, .followers-text").toggleClass("grey-text-dark-mode");
        $(".upper-section").toggleClass("upper-section-dark");
    });
});