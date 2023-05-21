$(document).ready(function(){

    $('#backend-form').submit(function(e) {
        e.preventDefault();

        var entries = [];

        if(localStorage.getItem("inputData") === null) {
            var data = [];
            localStorage.setItem("inputData", JSON.stringify(data));
        }


        $("#backend-form :input[type=text], #backend-form :input[type=number], #backend-form :input[type=option]").each(function(){
            var input = $(this).val(); 
            var inputLabel = $("label[for='" + $(this).attr('id') + "']").text();

            if(validate($(this), input, inputLabel)) {
                var jsonEntry = { [inputLabel] : input};
                console.log(jsonEntry);
    
                entries.push(jsonEntry);
            }
            
        });

        if(entries.length === 4) {
            data = JSON.parse(localStorage.getItem("inputData"));
            data.push(entries);
            localStorage.setItem("inputData", JSON.stringify(data));
        }

        $('#backend-form').trigger("reset"); // resets form to be empty for new todo.
    });

  });

  function validate(formElement, input, inputLabel) {
    var formType = formElement.attr('type');

    if(formElement.val() === "") {
        alert(inputLabel + " is missing!");
        return false;
    }

    if(formType === "option" && input === "Select a platform") {
        alert("Platform selection is missing!");
        return false;
    }

    return true;
  }