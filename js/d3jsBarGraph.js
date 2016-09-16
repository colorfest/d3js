function barGraph ()
{
    //variables
    var margin  = {top: 20, right: 20, bottom: 100, left: 60},
        width   = 800 - margin.left - margin.right,
        height  = 500 - margin.top - margin.bottom,
        x       = d3.scale.ordinal().rangeRoundBands([0,width], 0.5),
        y       = d3.scale.linear().range([height,0]);

    //draw axis
    var xAxis   = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis   = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(5);

    var svg     = d3.select("#barGraph")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.json("data/suicide-squad.json", function (data)
    {
        x.domain(data.map(function (d)
        {
            return d.name;
        }));

        y.domain([0, d3.max(data, function (d)
        {
            return d.rank;
        })]);

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0, " + height + ")")
            .call(xAxis)
            .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-0.5em")
            .attr("dy", "-.55em")
            .attr("y", 30)
            .attr("transform", "rotate(-45)" );

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 5)
            .attr("dy", "0.8em")
            .attr("text-anchor", "end")
            .text("Member Rank");

        svg.selectAll("bar")
            .data(data)
            .enter()
            .append("rect")
            .style("fill", "orange")
            .attr("x", function(d)
            {
                return x(d.name);
            })
            .attr("width", x.rangeBand())
            .attr("y", function (d)
            {
                return y(d.rank);
            })
            .attr("height", function (d)
            {
                return height - y(d.rank);
            });
    })
}