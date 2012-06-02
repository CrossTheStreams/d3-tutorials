$(document).ready(function() {
dataset = [ 5, 10, 15, 20, 25 ];

d3.select("#box").selectAll("div")
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
