$(document).ready(function() {
    $("form").submit(function(event) {
        event.preventDefault();
        $("#list").empty();
        var input = parseInt($("#input1").val());

        for (var i = 1; i <= input; i++) {
            if (i % 3 === 0) {
                if (i % 5 === 0) {
                  //outputs in a list
                    $("#list").append("<li>pingpong</li>");
                } else {
                    $("#list").append("<li>ping</li>");
                }
            } else if (i % 5 === 0) {
                $("#list").append("<li>pong</li>");
            } else {
                $("#list").append("<li>" + i + "</li>");
            }
        }

        $("#output").show();
    });
});

//   if((num % 3 === 0) && (num % 5 === 0)){
//     return ("pingpong");
//   } else {
//     return ("ping");
//   }
// };
// $(document).ready(function(){
//   $("form#pipong").submit(function(event){
//     event.preventDefault();
//   //for(var i =1; i<=parseInt(input); i++).val()
//   })
// })
