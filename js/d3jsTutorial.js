/** this is how we start d3js with javascript **/
function start ()
{
    d3.select("body")
        .append("p")
        .text("Load text with d3.js! today");

    console.log(d3);
}
function svgExample()
{
   var canvas = d3.select("body")
       .append("svg")
       .attr("width", 700)
       .attr("height", 700);

    var circle = canvas.append("circle")
        .attr("cx", 10)
        .attr("cy", 10)
        .attr("r", 10)
        .attr("fill", "blue");

    var rectangle = canvas.append("rect")
        .attr("width", 100)
        .attr("height", 100);

    var line = canvas.append("line")
        .attr("x1", 0)
        .attr("x2", 200)
        .attr("y1", 100)
        .attr("y2", 300)
        .attr("stroke", "grey")
        .attr("stroke-width", 3);

}