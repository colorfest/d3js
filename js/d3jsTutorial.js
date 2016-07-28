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
/** this is how we start d3js with javascript **/
function start ()
{
    d3.select("body")
        .append("p")
        .text("Load text with d3.js! today");

    console.log(d3);
}
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
function importData ()
{
    d3.json("data/suicide-squad.json", function (data)
    {
        var canvas = d3.select(".importData").append("svg")
            .attr("width", 1000)
            .attr("height", 700);

        canvas.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("width", function (d)
            {
                return d.rank * 60;
            })
            .attr("height", 50)
            .attr("y", function (d, i)
            {
                return i * 80
            })
            .attr("fill", "red");

        canvas.selectAll("text")
            .data(data)
            .enter()
            .append("text")
            .attr("fill", "#ffffff")
            .attr("y", function (d,i)
            {
                return i * 80 + 30;
            })
            .attr("x", 5)
            .text(function (d)
            {
                return d.name + " rank: " + d.rank;
            })
    })
}

function paths ()
{
    var canvas = d3.select(".paths").append("svg")
        .attr("width", 500)
        .attr("height", 500);

    var data = [
        {x: 10, y: 20},
        {x: 100, y: 100},
        {x: 10, y: 200}
    ];

    var group = canvas.append('g')
        .attr("transform", "translate(200,20)");

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
}
function scaling ()
{
    var graphData   = [10, 1200],
        w           = 500,
        h           = 800;

    var scaling     = d3.scale.linear()
        .domain([0,1200])
        .range([0,w]);

    var canvas  = d3.select(".graphContainer")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

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
function transitions ()
{
    var w = 800,
        h = 600;

    var canvas = d3.select(".transitionsContainer")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

    var rect = canvas.append("rect")
        .attr("width", 100)
        .attr("height", 100)
        .attr("fill", "red");

    var circle = canvas.append("circle")
        .attr("cx", 50)
        .attr("cy", 200)
        .attr("r", 50)
        .attr("fill", "blue");

    circle.transition()
        .duration(2000)
        .delay(4000)
        .attr("cx", 200)
        .each("end", function ()
        {
            d3.select(this)
                .attr("fill", "orange");
        });

    rect.transition()
        .duration(1000)
        .delay(2000)
        .attr("width", 200)
        .attr("transform", "translate(200,0)")
        .transition()
        .attr("transform", "translate(200,200)")
        .each("start", function ()
        {
            d3.select(this)
                .attr("fill", "green");
        });
}
function visualizeOranges ()
{
    var orangeData  = [10, 30, 50, 100];

    var canvas = d3.select(".orangeContainer")
        .append("svg")
        .attr("width", 768)
        .attr("height", 1024);

    var oranges     = canvas.selectAll("circle")
        .data(orangeData)
        .enter()
        .append("circle")
        .attr("fill", "orange")
        .attr("cx", function (d,i)
        {
            return d + (i * 100);
        })
        .attr("cy", function (d)
        {
            return d;
        })
        .attr("r", function (d)
        {
            return d;
        });

}