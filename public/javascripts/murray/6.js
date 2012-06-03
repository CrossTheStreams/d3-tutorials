$(document).ready(function() {

var h = 100;
    w = 700;

var dataset = [
                  [ 5,     20 ],
                  [ 480,   90 ],
                  [ 250,   50 ],
                  [ 100,   33 ],
                  [ 330,   95 ],
                  [ 410,   12 ],
                  [ 475,   44 ],
                  [ 25,    67 ],
                  [ 85,    21 ],
                  [ 220,   88 ]
              ];

var svg1 = d3.select("#box")
             .append("svg")
             .attr("width", w)
             .attr("height", h);

svg1.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx", function(d) {
      return d[0];
    })
    .attr("cy", function(d) {
      return d[1];
    })
    .attr("r", 5);

var svg2 = d3.select("#box")
             .append("svg")
             .attr("width", w)
             .attr("height", h);

svg2.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx", function(d) {
      return d[0] + 20;
    })
    .attr("cy", function(d) {
      return d[1];
    })
    .attr("r", function(d) {
     return Math.sqrt(h - d[1]);  
    });

svg2.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d) {
      return d[0] + "," + d[1];
    })
    .attr("x", function(d) {
      return d[0];
     })
    .attr("y", function(d) {
      return d[1];
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px")
    .attr("fill", "red");

$("svg").css("margin", "20px")

});


