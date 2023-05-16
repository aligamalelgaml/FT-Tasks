let iterator = 0;

function handleInput(event) {
    event.preventDefault(); // prevents submit from reloading page

    let input = $("#textField").val();

    addInput(input);

    $('#todoForm').trigger("reset"); // resets form to be empty for new todo.

}

function addInput(input) {
    let inputTemplate = `<div class="d-flex todo align-items-baseline gap-5"><p>${input}</p><button data-index="${iterator}" class="checkDeleteBtn" data-bs-toggle="modal" data-bs-target="#deleteModal" onclick="deleteTodo(event)">Delete</button></div>`;
    $("#todoContainer").append(inputTemplate);

    iterator = iterator + 1;
}

function deleteTodo(event) {
    let buttonIndex = event.target.getAttribute("data-index");

    $("#confirmDelete").click(function() {
        $('#deleteModal').modal('hide');
        
        $(`.checkDeleteBtn[data-index=${buttonIndex}]`).parent().remove();
    });
}
