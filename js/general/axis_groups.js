function axisGroups ()
{
    var graphData   = [100, 1200],
        w           = 500,
        h           = 800;

    var scaling     = d3.scale.linear()
        .domain([0,1200])
        .range([0,w]);

    var axis        = d3.svg.axis()
        .ticks(2)
        .scale(scaling);

    var canvas  = d3.select(".graphContainer")
        .append("svg")
        .attr("width", w)
        .attr("height", h)
        .append("g")
        .attr("transform", "translate(10,50)");

    var graphBars   = canvas.selectAll("rect")
        .data(graphData)
        .enter()
        .append("rect")
        .attr("fill", "pink")
        .attr("width", function (d)
        {
            return scaling(d);
        })
        .attr("height", 20)
        .attr("y", function (d,i)
        {
            return i * 50;
        })

    canvas.append("g")
        .attr("transform", "translate(0,200)")
        .call(axis);
}