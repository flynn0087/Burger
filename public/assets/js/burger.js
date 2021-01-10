$(function() {

    // Add a new burger.
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        let newBurger = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Created new burger");
            // Reload the page to get the updated burger list.
            location.reload();
        });
    });

    $(".change-devoured").on("click", function(event) {
        event.preventDefault();

        let id = $(this).data("id");
        let ifDevoured = {
            devoured: 1
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: ifDevoured
        }).then(function() {
            console.log("Burger devoured");
            location.reload();
        });
    });
});    