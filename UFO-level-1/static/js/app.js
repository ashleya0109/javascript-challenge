// from data.js
var tableData = data;

// YOUR CODE HERE!


var tbody = d3.select("tbody");

//**************** PRE FILTERED DATA ****************//

// UFO Sighting for each column
tableData.forEach(function(ufoSighting) {

    // Append one row each UFO Sighting column
    var row = tbody.append("tr");

    // log each UFO Sighting value
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      
        // Append a value to the row
      var cell = row.append("td");
      cell.text(value);
    });
  });


//*************FILTER DATA************//
// Filter Button
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    // Select the input date category
    var inputElement = d3.select("#datetime");
    
    // Get the value of the input date
    var inputValue = inputElement.property("value");
    
    // Filter Data with category and value
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);


  //******* RETURN FILTERED DATA **************//
    filteredData.forEach(function(selections) {

    // Append one table row for each UFO Sighting object
    var row = tbody.append("tr");
        
    // log each UFO Sighting value
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        
        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});
});