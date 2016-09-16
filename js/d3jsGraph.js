function init ()
{
    var xMin            = 0,
        xMax            = 100,
        yMin            = 0,
        yMax            = 100
        gridUnitSize    = 5,
        grid            = null;

    var x   = d3.scale.linear().domain([xMin,xMax]).range([0,xMax * gridUnitSize]);
    var y   = d3.scale.linear().domain([yMin,yMax]).range([0,yMax * gridUnitSize]);

    //define container
    grid        = d3.select("#gridContainer")
        .append("svg")
        .attr("class", "graph")
        .attr("width", (xMax * gridUnitSize) + 100)
        .attr("height", (yMax * gridUnitSize) + 100)
        .call(d3.behavior.zoom()
            .scaleExtent([1,3])
            .on("zoom", function ()
            {
                grid.attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")")
            }))
        .append("g")
        .attr("transform", "translate(20,20)");

    //add axis layers
    grid.append("g")
        .attr("class", "x-grid")
        .selectAll("line.x")
        .data(x.ticks(20))
        .enter()
        .append("line")
        .attr("class", "x")
        .attr("x1", x)
        .attr("x2", x)
        .attr("y1", 0)
        .attr("y2", yMax * gridUnitSize)
        .style("stroke", "#818181");

    grid.append("g")
        .attr("class", "y-grid")
        .selectAll("line.y")
        .data(y.ticks(20))
        .enter()
        .append("line")
        .attr("class", "y")
        .attr("x1", 0)
        .attr("x2", xMax * gridUnitSize)
        .attr("y1", y)
        .attr("y2", y)
        .style("stroke", "#818181");
}