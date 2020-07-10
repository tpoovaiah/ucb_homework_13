$(function() {
    $(".devour").on("click", function(event) {
      event.preventDefault();
      var id = $(this).data("id");
      console.log("id"+id)
  
      var isDevoured = {
        devoured: true
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: isDevoured
      }).then(
        function() {
          location.reload();
        }
      );
    });
  



    $(".add-burger").on("click", function(event) {
      event.preventDefault();

      // var burgerName = $("#burgerType").val()

      // console.log("burgername: "+ burgerName )
  
      var newBurger = {
        burger_name: $("#burgerType").val(),
        devoured: 0
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger!");
          location.reload();
        }
      );
    });
  
  });
  