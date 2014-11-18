$(document).ready(function(){

  var wineQuery = function(name) {
    return $.ajax({
      url: "http://daretodiscover.net/wine",
      data: {id: name}
    });
  };

  $.when(wineQuery(name)).done(function(results) {
    $("#list").remove();

    // results.forEach(function(wine) {
    //   console.log(wine);
    // });

    var ul = $('<ul>').attr("id", "list");

    results.forEach(function(wine) {
      var wineHTML = HandlebarsTemplates["wines/wine"](wine);
      ul.append(wineHTML);
    });

    $("#wine-container").append(ul);


  });

wineQuery();
});