$(document).ready(function() {

var h = 100;
    w = 500;
    barPadding = 1;

var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13, 11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];
  
var svg = d3.select(".barchart");

svg.selectAll("rect")
   .data(dataset)
   .enter()
   .append("rect")
   .attr("x", function(d, i) {
     return i * (w / dataset.length);
   })
   .attr("y", function(d) {
     d = d * 4;
     return h - d;
   })
   .attr("width", w / dataset.length - barPadding)
   .attr("height", function(d) {
     d = d * 4;
     return d;
   })
   .attr("fill", function(d) {
    return "rgb(" + (d * 10) + ", 0, " + (d * 2) + ")";
});

svg.selectAll("text")
   .data(dataset)
   .enter()
   .append("text")
   .text(function(d) {
     return d;
   })
   .attr("x", function(d, i) {
     return (i * (w / dataset.length)) + 5;
   })
   .attr("y", function(d) {
     return h - (d * 4 - 15);
   })
   .attr("fill", "white");
});

