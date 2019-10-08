var animals = ["dog", "cat", "rabbit", "hamster", "skunk", "goldfish", "bird", "turtle"];
// var search;


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
        // event.preventDefault();
        // alert("this is working");
        var search = $(this).val().trim();
        var limit = 10;
        var apiKey = "Kfdsg3pgJEX2b3rt0Ofr1yrjNig3NFli";
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=" + apiKey + "&limit=" + limit;

        // console.log($(this).val().trim());
        
        // console.log("===");
        // console.log(search);

        $("#gifs-here").empty();
        
        
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(queryURL);
            console.log(response);
            // console.log(response.data[0].url)
            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                var animalDIV = $("<div>");
                var p = $("<p>").text("Rating: " + results[i].rating);
                var animalImage = $("<img>");
                animalImage.attr("src", results[i].images.fixed_height.url);
                animalDIV.append(p);
                animalDIV.append(animalImage);
                $("#gifs-here").append(animalDIV);

            };
        });
   });

    $("#add-button").on("click", function (event) {
        event.preventDefault();
        var newButton = $(this).val().trim();
        console.log($(this).val().trim());
        var b = $("<button>")
        b.addClass("animalButton btn btn-lg btn-primary");
        b.attr("value", newButton);
        $("#buttons").append(b);

    })
    
 });
