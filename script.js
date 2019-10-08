var search = "skunk";
var limit = 10;
var apiKey = "Kfdsg3pgJEX2b3rt0Ofr1yrjNig3NFli";
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=" + apiKey + "&limit=" + limit;

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
})