$(function() {

    $(".move-burger").on("click", function(event) {
        const id = $(this).data("id");

        const burgerEaten = {
            devoured: true
        };

        console.log(burgerEaten);

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: burgerEaten
        }).then(
            function() {
                location.reload();
            }
        )
    })

    $(".makeBurgerForm").on("submit", function(event) {
        event.preventDefault();

        const burgerNew = {
            burger_name: $("#makeBurgerName").val().trim(),
            devoured: 0
        }

        console.log(burgerNew);

        $.ajax("/api/burgers/", {
            type: "POST",
            data: burgerNew
        }).then(
            function() {
                location.reload();
            }
        )
    })
});
