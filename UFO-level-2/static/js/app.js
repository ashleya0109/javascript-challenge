// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

//************************//
//PRE FILTERED DATA       //
//***********************//

// UFO Sighting values for each column
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");

    // Log each UFO Sighting value
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      
        // Append a cell for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });


//************************//
    //Filter Data      //
//***********************//
// Button select
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    // Select the value category
    var inputElement = d3.select("#input");
    
    // Get the value 
    var inputValue = inputElement.property("value");
  
    // Filter Data with column selected and equal to input value
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue ||
                                                    sighting.city === inputValue ||
                                                    sighting.state === inputValue ||
                                                    sighting.country === inputValue ||
                                                    sighting.shape === inputValue);

//************************//
//Return FILTERED DATA       //
//***********************//

    filteredData.forEach(function(selections) {

    // One row for each UFO Sighting object
    var row = tbody.append("tr");
    
    // Log each UFO Sighting value
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        
        // Append a cell for each value
        var cell = row.append("td");
        cell.text(value);
    });
});
});
