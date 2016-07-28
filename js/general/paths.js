function paths ()
{
    var canvas = d3.select(".paths").append("svg")
        .attr("width", 500)
        .attr("height", 500);

    var data = [
        {x: 100, y: 20},
        {x: 200, y: 100},
        {x: 100, y: 200}
    ];

    var group = canvas.append('g')
        .attr("transform", "translate(100,100)");

    var line = d3.svg.line()
        .x(function(d) { return d.x})
        .y(function(d) { return d.y});

    group.selectAll("path")
        .data([data])
        .enter()
        .append("path")
        .attr("d", line)
        .attr("fill", "none")
        .attr("stroke", "red")
        .attr("stroke-width", 5);

    var radius = 50;
    var p = Math.PI * 2;

    var arc = d3.svg.arc()
        .innerRadius(radius - 10)
        .outerRadius(radius)
        .startAngle(0)
        .endAngle(p);

    group.append("path")
        .attr("d", arc);


}