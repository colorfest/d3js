function animations ()
{
    var data = [200, 100],
        w = 800,
        h = 600;

    var canvas = d3.select(".graphContainer")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

    var box = canvas.append("rect")
        .attr("width", 300)
        .attr("height", 300)
        .attr("fill", "red");

    box.transition()
        .duration(3000)
        .attr("width", 100)
        .attr("height", 100);
}