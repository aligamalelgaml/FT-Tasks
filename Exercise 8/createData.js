$(document).ready(function(){

    $('#backend-form').submit(function(e) {
        e.preventDefault();

        var title = $("#inputTitle").val();
        var description = $("#inputDesc").val();
        var number = $("#inputNumber").val();
        var selected = $('#selectDropdown').find(":selected").text();

        // console.log(title + description + number + selected);

        $('#backend-form').trigger("reset"); // resets form to be empty for new todo.

        localStorage.setItem("title", title);
        localStorage.setItem("desc", description);
        localStorage.setItem("number", number);
        localStorage.setItem("selected", selected);

        console.log($("#backend-form").val());
        
    });

  });