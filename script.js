var animals = ["dog", "cat", "rabbit", "hamster", "skunk", "goldfish", "bird", "turtle"];

window.onload = function () {
    for (var i = 0; i < animals.length; i++) {
        var a = $("<button>")
        a.text(animals[i]);
        a.addClass("animalButton btn btn-lg btn-primary");
        a.attr("value", animals[i]);
        $("#buttons").append(a);
    };
};

$(document).ready(function () {
    $(".animalButton").on("click", function () {
        var search = $(this).val().trim();
        var limit = 10;
        var apiKey = "Kfdsg3pgJEX2b3rt0Ofr1yrjNig3NFli";
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=" + apiKey + "&limit=" + limit;

        $("#gifs-here").empty();
        
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(queryURL);
            console.log(response);
        
            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                var animalDIV = $("<div>");
                var p = $("<p>").text("Rating: " + results[i].rating);
                var animalImage = $("<img>");
                animalImage.addClass("gif");
                animalImage.attr("src", results[i].images.fixed_height_still.url);
                animalImage.attr("data-still", results[i].images.fixed_height_still.url);
                animalImage.attr("data-animate", results[i].images.fixed_height.url);
                animalImage.attr("data-state", "still");
                animalDIV.append(p);
                animalDIV.append(animalImage);
                $("#gifs-here").append(animalDIV);
            };

            $(".gif").on("click", function () {
                var state = $(this).attr("data-state");

                if (state === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                } else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                };
            });


        });
   });

    $("#add-button").on("click", function (event) {
        event.preventDefault();

        var newButton = $("#search").val().trim();
        var limit = 10;
        var apiKey = "Kfdsg3pgJEX2b3rt0Ofr1yrjNig3NFli";
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + newButton + "&api_key=" + apiKey + "&limit=" + limit;
        
        var b = $("<button>");
        console.log($("#search").val().trim());

        b.addClass("animalButtonNew btn btn-lg btn-primary");
        b.text(newButton);
        b.attr("value", newButton);
        $("#buttons").append(b);
        
        $(".animalButtonNew").on("click", function () {
            console.log(queryURL);

            $("#gifs-here").empty();

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                console.log(response);
            
                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var animalDIV = $("<div>");
                    var p = $("<p>").text("Rating: " + results[i].rating);
                    var animalImage = $("<img>");
                    animalImage.addClass("gif");
                    animalImage.attr("src", results[i].images.fixed_height_still.url);
                    animalImage.attr("data-still", results[i].images.fixed_height_still.url);
                    animalImage.attr("data-animate", results[i].images.fixed_height.url);
                    animalImage.attr("data-state", "still");
                    animalDIV.append(p);
                    animalDIV.append(animalImage);
                    $("#gifs-here").append(animalDIV);
                };

                $(".gif").on("click", function () {
                    var state = $(this).attr("data-state");
    
                    if (state === "still") {
                        $(this).attr("src", $(this).attr("data-animate"));
                        $(this).attr("data-state", "animate");
                    } else {
                        $(this).attr("src", $(this).attr("data-still"));
                        $(this).attr("data-state", "still");
                    };
                });
            });
        });
    });
 });
