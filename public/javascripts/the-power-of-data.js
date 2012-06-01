$(document).ready(function() {
  
  var dataset = [];  					 //Initialize empty array
  for (var i = 0; i < 25; i++) {			 //Loop 25 times
    var newNumber = Math.random() * 30;  //New random number (0-30)
    dataset = dataset.concat(newNumber); //Add new number to array
  }

d3.select("body").selectAll("div")
    .data(dataset)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("height", function(d) {
    var barHeight = d * 5;
    return barHeight + "px";
    })
    .style("margin-right", "2px");
});

