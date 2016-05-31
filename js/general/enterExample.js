function enterExamples ()
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

    var boxes = canvas.selectAll("rect")
        .data(data)
        .exit()
        /*.enter()
        .append("rect")
        .attr("width", function (d) { return d;})
        .attr("height", function (d) { return d;})
        .attr("fill", "grey")
        .attr("stroke", "black")*/;
}