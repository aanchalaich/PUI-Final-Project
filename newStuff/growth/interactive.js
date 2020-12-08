$(document).ready(function () {
    new WOW().init();
});

function changeImage(id, imgSource) {
    document.getElementById(id).src = imgSource;
}

$(".animated").addClass("slower");

function corpGov() {



    document.getElementById("funFact").innerText = "Jeff Bezos's salary is only $81,840, a little more than the median American average salary!" +
        "  He has never even taken a stock award - he simply owns 16% of Amazon." +
        "  What can we learn from this?" +
        "  Since Jeff Bezos's salary is directly tied to company performance, he has a personal stake in making sure Amazon does well."


    d3.select("SVG").remove()

    const width = 400;
    const height = 400;
    const margin = 0;

    const adj = width * 0.3;
    var paddingLeft = 50, paddingRight = 40, paddingTop = 10, paddingBottom = 10;
    // we are appending SVG first
    const svg = d3.select("div#container").append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "-"
            + 150 + " -"
            + 50 + " "
            + (width + adj * 3) + " "
            + (height + adj * 3))

        .classed("svg-content", true);




    //-----------------------------DATA------------------------------//





    var nameObj = {
        "Year": [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        "Rev": [8490, 10711, 14835, 19166, 24509, 34204, 48077, 61093, 74452, 88988, 107006, 135987, 177866, 232887, 280522],
        "Salary": [81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840]
    };

    const dataset = nameObj;

    const years = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];
    const rev = [8490, 10711, 14835, 19166, 24509, 34204, 48077, 61093, 74452, 88988, 107006, 135987, 177866, 232887, 280522];
    const salary = [81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840];

    finalArray = {
        x: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        y: [8490, 10711, 14835, 19166, 24509, 34204, 48077, 61093, 74452, 88988, 107006, 135987, 177866, 232887, 280522]
    };

    finalArray2 = {
        x: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        y: [81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840]
    };

    var rearrangedData = finalArray.x.map(function (d, i) {
        return { x: d, y: finalArray.y[i] };

    })

    var rearrangedData2 = finalArray2.x.map(function (d, i) {
        return { x: d, y: finalArray.y[i] };

    })



    var xscale = d3.scaleTime()
        .domain([d3.min(finalArray.x), d3.max(finalArray.x)])
        .range([paddingLeft, width]);
    svg.append("g")
        .attr("transform", "translate(0," + width / 2 + ")")
        .attr('class', 'axisWhite')
        .call(d3.axisBottom(xscale).tickFormat(d3.format("d")));



    var yscale = d3.scaleLinear()
        .domain([d3.min(finalArray.y), 300000])
        .range([height / 2 - paddingBottom, paddingTop]);
    svg.append("g")
        .attr("transform", "translate(50, 10)")
        .attr('class', 'axisWhite')
        .call(d3.axisLeft(yscale));




    var yscale2 = d3.scaleLinear()
        .domain([d3.min(finalArray2.y), d3.max(finalArray2.y)])
        .range([height / 2 - paddingBottom, paddingTop]);
    svg.append("g")
        .attr("transform", "translate(50, 10)")
        .attr('class', 'axisWhite')
        .call(d3.axisLeft(yscale));



    var valueline = d3.line()
        .x(function (d) { return xscale(d.x); })
        .y(function (d) { return yscale(d.y); });

    var valueline2 = d3.line()
        .x(function (d) { return xscale(d.x); })
        .y(function (d) { return yscale2(d.y); });




    svg.append("path")
        .attr("fill", "none")
        .attr("stroke", "teal")
        .attr("stroke-width", 1.5)
        .attr("d", valueline(rearrangedData));

    svg.append("path")
        .attr("fill", "none")
        .attr("stroke", "teal")
        .attr("stroke-width", 1.5)
        .attr("d", valueline2(rearrangedData2));
}

function segment() {

    document.getElementById("funFact").innerText = "According to the sector/industry section, Amazon has three major business segments - North America, International, and Amazon Web Services (AWS)."

    d3.select("SVG").remove()

    const treeData = {
        "name": "Amazon",
        "value": 15,
        "type": "black",
        "level": "yellow",
        "children": [
            {
                "name": "North America",
                "value": 10,
                "type": "grey",
                "level": "red"
            },
            {
                "name": "International",
                "value": 10,
                "type": "grey",
                "level": "red",

            },
            {
                "name": "Amazon Web Services",
                "value": 10,
                "type": "grey",
                "level": "blue"
            },

        ]
    };

    // set the dimensions and margins of the diagram
    const margin = { top: 20, right: 200, bottom: 30, left: 500 },
        width = 1500 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    // declares a tree layout and assigns the size
    const treemap = d3.tree().size([height, width]);

    //  assigns the data to a hierarchy using parent-child relationships
    let nodes = d3.hierarchy(treeData, d => d.children);

    // maps the node data to the tree layout
    nodes = treemap(nodes);

    // append the svg object to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    const svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom),
        g = svg.append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

    // adds the links between the nodes
    const link = g.selectAll(".link")
        .data(nodes.descendants().slice(1))
        .enter().append("path")
        .attr("class", "link")
        .style("stroke", d => d.data.level)
        .style("stroke", 'white')
        .attr("d", d => {
            return "M" + d.y + "," + d.x
                + "C" + (d.y + d.parent.y) / 2 + "," + d.x
                + " " + (d.y + d.parent.y) / 2 + "," + d.parent.x
                + " " + d.parent.y + "," + d.parent.x;
        });

    // adds each node as a group
    const node = g.selectAll(".node")
        .data(nodes.descendants())
        .enter().append("g")
        .attr("class", d => "node" + (d.children ? " node--internal" : " node--leaf"))
        .attr("transform", d => "translate(" + d.y + "," + d.x + ")");

    // adds the circle to the node
    node.append("circle")
        .attr("r", d => d.data.value)
        .style("stroke", d => d.data.type)
        .style("fill", d => d.data.level);

    // adds the text to the node
    node.append("text")
        .attr("dy", ".35em")
        .attr('stroke', 'white')
        .attr("x", d => d.children ? (d.data.value + 5) * -1 : d.data.value + 5)
        .attr("y", d => d.children && d.depth !== 0 ? -(d.data.value + 5) : d)
        .style("text-anchor", d => d.children ? "end" : "start")
        .text(d => d.data.name);
}

function peRatio() {
    document.getElementById("funFact").innerText = "You can see from the Summary Page that Amazon has a very high PE ratio of 90+." +
        "  Generally, the lower the PE ratio the more undervalued a stock is and the better of a buy it could be." +
        "  However, Amazon is expected to have much higher growth than companies like Apply or Microsoft, so its PE ratio is actually a good signal." +
        " This is one reason why it is considered a growth company."

    d3.select("SVG").remove();
    const width = 200;
    const height = 100;
    const margin = 5;

    const adj = width * 0.9;
    var paddingLeft = 60, paddingRight = 40, paddingTop = 10, paddingBottom = 10;
    // we are appending SVG first
    const svg = d3.select("div#container").append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "-"
            + 200 + " -"
            + 30 + " "
            + 550 + " "
            + 200)

        .classed("svg-content", true);

    //-----------------------------DATA------------------------------//





    var nameObj = {
        "Year": [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        "Rev": [8490, 10711, 14835, 19166, 24509, 34204, 48077, 61093, 74452, 88988, 107006, 135987, 177866, 232887, 280522],
        "Salary": [81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840]
    };

    const dataset = nameObj;

    const years = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];
    const rev = [8490, 10711, 14835, 19166, 24509, 34204, 48077, 61093, 74452, 88988, 107006, 135987, 177866, 232887, 280522];
    const salary = [81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840];

    finalArray = {
        x: ['AMZN', 'EBAY', 'BABA', 'GOOG', 'BAIDU'],
        y: [92.47, 7.07, 28.71, 35.32, 11.23]
    };


    var rearrangedData = finalArray.x.map(function (d, i) {
        return { x: d, y: finalArray.y[i] };

    })

    var barPadding = 5;
    var barWidth = (width / dataset.length);





    var xscale = d3.scaleBand()
        .range([0, width])
        .domain(finalArray.x)
        .padding(0.2);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xscale))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end")
        .attr('class', 'axisWhite');

    var yscale = d3.scaleLinear()
        .domain([0, 100])
        .range([height, 0]);
    svg.append("g")
        .call(d3.axisLeft(yscale))
        .attr('class', 'axisWhite');


    svg.selectAll("mybar")
        .data(rearrangedData)
        .enter()
        .append("rect")
        .attr("x", function (d) { return xscale(d.x); })
        .attr("y", function (d) { return yscale(d.y); })
        .attr("width", xscale.bandwidth())
        .attr("height", function (d) { return height - yscale(d.y); })
        .attr("fill", "#69b3a2")
}

function price() {

    document.getElementById("funFact").innerText = "The price of Amazon as of the close of 12/04/2020 was 3,162.58." +
        "  We can compare this across companies and see that Amazon leads in price above its peers." +
        "  So is Amazon truly worth as much as the market says it is, or could it be overvalued?"

    d3.select("SVG").remove();
    const width = 200;
    const height = 100;
    const margin = 5;

    const adj = width * 0.9;
    var paddingLeft = 60, paddingRight = 40, paddingTop = 10, paddingBottom = 10;
    // we are appending SVG first
    const svg = d3.select("div#container").append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "-"
            + 200 + " -"
            + 30 + " "
            + 550 + " "
            + 200)

        .classed("svg-content", true);

    //-----------------------------DATA------------------------------//





    var nameObj = {
        "Year": [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        "Rev": [8490, 10711, 14835, 19166, 24509, 34204, 48077, 61093, 74452, 88988, 107006, 135987, 177866, 232887, 280522],
        "Salary": [81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840]
    };

    const dataset = nameObj;

    const years = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];
    const rev = [8490, 10711, 14835, 19166, 24509, 34204, 48077, 61093, 74452, 88988, 107006, 135987, 177866, 232887, 280522];
    const salary = [81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840];

    finalArray = {
        x: ['AMZN', 'EBAY', 'BABA', 'GOOG', 'BAIDU'],
        y: [3198.21, 50.03, 271.02, 1824.52, 271.02]
    };


    var rearrangedData = finalArray.x.map(function (d, i) {
        return { x: d, y: finalArray.y[i] };

    })

    var barPadding = 5;
    var barWidth = (width / dataset.length);





    var xscale = d3.scaleBand()
        .range([0, width])
        .domain(finalArray.x)
        .padding(0.2);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xscale))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end")
        .attr('class', 'axisWhite');

    var yscale = d3.scaleLinear()
        .domain([0, 3500])
        .range([height, 0]);
    svg.append("g")
        .call(d3.axisLeft(yscale))
        .attr('class', 'axisWhite');


    svg.selectAll("mybar")
        .data(rearrangedData)
        .enter()
        .append("rect")
        .attr("x", function (d) { return xscale(d.x); })
        .attr("y", function (d) { return yscale(d.y); })
        .attr("width", xscale.bandwidth())
        .attr("height", function (d) { return height - yscale(d.y); })
        .attr("fill", "#69b3a2")
}

function previousClose() {

    document.getElementById("funFact").innerText = "The previous close of Amazon as of 12/04/2020 was 3,186.73." +
        "  A stock's closing price is the standard benchmark used by investors to track its performance over time." +
        "  So we can rely on the previous closing price of Amazon and its peers as a solid indicator of the way the market is valuing the companies."

    d3.select("SVG").remove();
    d3.select("SVG").remove();
    const width = 200;
    const height = 100;
    const margin = 5;

    const adj = width * 0.9;
    var paddingLeft = 60, paddingRight = 40, paddingTop = 10, paddingBottom = 10;
    // we are appending SVG first
    const svg = d3.select("div#container").append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "-"
            + 200 + " -"
            + 30 + " "
            + 550 + " "
            + 200)

        .classed("svg-content", true);

    //-----------------------------DATA------------------------------//





    var nameObj = {
        "Year": [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        "Rev": [8490, 10711, 14835, 19166, 24509, 34204, 48077, 61093, 74452, 88988, 107006, 135987, 177866, 232887, 280522],
        "Salary": [81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840]
    };

    const dataset = nameObj;

    const years = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];
    const rev = [8490, 10711, 14835, 19166, 24509, 34204, 48077, 61093, 74452, 88988, 107006, 135987, 177866, 232887, 280522];
    const salary = [81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840];

    finalArray = {
        x: ['AMZN', 'EBAY', 'BABA', 'GOOG', 'BAIDU'],
        y: [3186.73, 50.29, 266.91, 1826.77, 144.24]
    };


    var rearrangedData = finalArray.x.map(function (d, i) {
        return { x: d, y: finalArray.y[i] };

    })

    var barPadding = 5;
    var barWidth = (width / dataset.length);





    var xscale = d3.scaleBand()
        .range([0, width])
        .domain(finalArray.x)
        .padding(0.2);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xscale))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end")
        .attr('class', 'axisWhite')


    var yscale = d3.scaleLinear()
        .domain([0, 3500])
        .range([height, 0]);
    svg.append("g")
        .call(d3.axisLeft(yscale))
        .attr('class', 'axisWhite')



    svg.selectAll("mybar")
        .data(rearrangedData)
        .enter()
        .append("rect")
        .attr("x", function (d) { return xscale(d.x); })
        .attr("y", function (d) { return yscale(d.y); })
        .attr("width", xscale.bandwidth())
        .attr("height", function (d) { return height - yscale(d.y); })
        .attr("fill", "#69b3a2")

}
//-----------------------------Open function does not work------------------------------//
function open() {
    d3.select("SVG").remove();
    const width = 500;
    const height = 500;
    const margin = 5;

    const adj = 30;
    var paddingLeft = 60, paddingRight = 40, paddingTop = 10, paddingBottom = 10;
    // we are appending SVG first
    const svg = d3.select("div#container").append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "-"
            + adj + " -"
            + adj + " "
            + (width + adj * 3) + " "
            + (height + adj * 3))

        .classed("svg-content", true);

    //-----------------------------DATA------------------------------//





    var nameObj = {
        "Year": [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        "Rev": [8490, 10711, 14835, 19166, 24509, 34204, 48077, 61093, 74452, 88988, 107006, 135987, 177866, 232887, 280522],
        "Salary": [81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840]
    };

    const dataset = nameObj;

    const years = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];
    const rev = [8490, 10711, 14835, 19166, 24509, 34204, 48077, 61093, 74452, 88988, 107006, 135987, 177866, 232887, 280522];
    const salary = [81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840];

    finalArray = {
        x: ['AMZN', 'EBAY', 'BABA', 'GOOG', 'BAIDU'],
        y: [3198.21, 50.03, 271.02, 1824.52, 144.30]
    };


    var rearrangedData = finalArray.x.map(function (d, i) {
        return { x: d, y: finalArray.y[i] };

    })

    var barPadding = 5;
    var barWidth = (width / dataset.length);





    var xscale = d3.scaleBand()
        .range([0, width])
        .domain(finalArray.x)
        .padding(0.2);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xscale))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end")
        .attr('class', 'axisWhite');

    var yscale = d3.scaleLinear()
        .domain([0, 3500])
        .range([height, 0]);
    svg.append("g")
        .call(d3.axisLeft(yscale))
        .attr('class', 'axisWhite');


    svg.selectAll("mybar")
        .data(rearrangedData)
        .enter()
        .append("rect")
        .attr("x", function (d) { return xscale(d.x); })
        .attr("y", function (d) { return yscale(d.y); })
        .attr("width", xscale.bandwidth())
        .attr("height", function (d) { return height - yscale(d.y); })
        .attr("fill", "#69b3a2")
}

function volume() {
    document.getElementById("funFact").innerText = "Now here is some interesting data - Alibaba (Baba) is leading in volume amongst its peer group." +
        "  What does this mean?" +
        "  It means the market activity for Alibaba is much stronger than that of Amazon, and the security is more liquid as well."


    d3.select("SVG").remove();
    d3.select("SVG").remove();
    const width = 200;
    const height = 100;
    const margin = 5;

    const adj = width * 0.9;
    var paddingLeft = 60, paddingRight = 40, paddingTop = 10, paddingBottom = 10;
    // we are appending SVG first
    const svg = d3.select("div#container").append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "-"
            + 200 + " -"
            + 30 + " "
            + 550 + " "
            + 200)

        .classed("svg-content", true);

    //-----------------------------DATA------------------------------//





    var nameObj = {
        "Year": [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        "Rev": [8490, 10711, 14835, 19166, 24509, 34204, 48077, 61093, 74452, 88988, 107006, 135987, 177866, 232887, 280522],
        "Salary": [81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840]
    };

    const dataset = nameObj;

    const years = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];
    const rev = [8490, 10711, 14835, 19166, 24509, 34204, 48077, 61093, 74452, 88988, 107006, 135987, 177866, 232887, 280522];
    const salary = [81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840];

    finalArray = {
        x: ['AMZN', 'EBAY', 'BABA', 'GOOG', 'BAIDU'],
        y: [2913.611, 4791.038, 15527.567, 1378.166, 2450.206]
    };


    var rearrangedData = finalArray.x.map(function (d, i) {
        return { x: d, y: finalArray.y[i] };

    })

    var barPadding = 5;
    var barWidth = (width / dataset.length);





    var xscale = d3.scaleBand()
        .range([0, width])
        .domain(finalArray.x)
        .padding(0.2);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xscale))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end")
        .attr('class', 'axisWhite');

    var yscale = d3.scaleLinear()
        .domain([0, 20000])
        .range([height, 0]);
    svg.append("g")
        .call(d3.axisLeft(yscale))
        .attr('class', 'axisWhite');


    svg.selectAll("mybar")
        .data(rearrangedData)
        .enter()
        .append("rect")
        .attr("x", function (d) { return xscale(d.x); })
        .attr("y", function (d) { return yscale(d.y); })
        .attr("width", xscale.bandwidth())
        .attr("height", function (d) { return height - yscale(d.y); })
        .attr("fill", "#69b3a2")

}

function marketCap() {

    document.getElementById("funFact").innerText = "Not suprisingly, Amazon is in the top of its peer group for market share, followed closely by Google and Alibaba." +
        " Now you can start to see why its share price is so high -  its market Cap is high but volume is low, creating an almost inflated share price."


    d3.select("SVG").remove();
    d3.select("SVG").remove();
    const width = 200;
    const height = 100;
    const margin = 5;

    const adj = width * 0.9;
    var paddingLeft = 60, paddingRight = 40, paddingTop = 10, paddingBottom = 10;
    // we are appending SVG first
    const svg = d3.select("div#container").append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "-"
            + 200 + " -"
            + 30 + " "
            + 550 + " "
            + 200)

        .classed("svg-content", true);

    //-----------------------------DATA------------------------------//





    var nameObj = {
        "Year": [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        "Rev": [8490, 10711, 14835, 19166, 24509, 34204, 48077, 61093, 74452, 88988, 107006, 135987, 177866, 232887, 280522],
        "Salary": [81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840]
    };

    const dataset = nameObj;

    const years = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];
    const rev = [8490, 10711, 14835, 19166, 24509, 34204, 48077, 61093, 74452, 88988, 107006, 135987, 177866, 232887, 280522];
    const salary = [81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840];

    finalArray = {
        x: ['AMZN', 'EBAY', 'BABA', 'GOOG', 'BAIDU'],
        y: [1587, 35.136, 719.581, 1235, 49.139]
    };


    var rearrangedData = finalArray.x.map(function (d, i) {
        return { x: d, y: finalArray.y[i] };

    })

    var barPadding = 5;
    var barWidth = (width / dataset.length);





    var xscale = d3.scaleBand()
        .range([0, width])
        .domain(finalArray.x)
        .padding(0.2);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xscale))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end")
        .attr('class', 'axisWhite');

    var yscale = d3.scaleLinear()
        .domain([0, 1600])
        .range([height, 0]);
    svg.append("g")
        .call(d3.axisLeft(yscale))
        .attr('class', 'axisWhite');


    svg.selectAll("mybar")
        .data(rearrangedData)
        .enter()
        .append("rect")
        .attr("x", function (d) { return xscale(d.x); })
        .attr("y", function (d) { return yscale(d.y); })
        .attr("width", xscale.bandwidth())
        .attr("height", function (d) { return height - yscale(d.y); })
        .attr("fill", "#69b3a2")
}

function beta() {

    document.getElementById("funFact").innerText = "Amazon's beta is 1.2." +
        " In fact, its beta and that of its peers are all above 1, indicating more fluctuation in stock price in comparison to the overall market." +
        " Amazon's beta is right around 1 so it is relatively stable in price fluctuations, a given considerig its diverse lines of business."


    d3.select("SVG").remove();
    d3.select("SVG").remove();
    const width = 200;
    const height = 100;
    const margin = 5;

    const adj = width * 0.9;
    var paddingLeft = 60, paddingRight = 40, paddingTop = 10, paddingBottom = 10;
    // we are appending SVG first
    const svg = d3.select("div#container").append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "-"
            + 200 + " -"
            + 30 + " "
            + 550 + " "
            + 200)

        .classed("svg-content", true);

    //-----------------------------DATA------------------------------//





    var nameObj = {
        "Year": [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        "Rev": [8490, 10711, 14835, 19166, 24509, 34204, 48077, 61093, 74452, 88988, 107006, 135987, 177866, 232887, 280522],
        "Salary": [81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840]
    };

    const dataset = nameObj;

    const years = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];
    const rev = [8490, 10711, 14835, 19166, 24509, 34204, 48077, 61093, 74452, 88988, 107006, 135987, 177866, 232887, 280522];
    const salary = [81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840];

    finalArray = {
        x: ['AMZN', 'EBAY', 'BABA', 'GOOG', 'BAIDU'],
        y: [1.20, 1.26, 1.03, 1.00, 1.08]
    };


    var rearrangedData = finalArray.x.map(function (d, i) {
        return { x: d, y: finalArray.y[i] };

    })

    var barPadding = 5;
    var barWidth = (width / dataset.length);





    var xscale = d3.scaleBand()
        .range([0, width])
        .domain(finalArray.x)
        .padding(0.2);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xscale))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end")
        .attr('class', 'axisWhite');

    var yscale = d3.scaleLinear()
        .domain([0, 2])
        .range([height, 0]);
    svg.append("g")
        .call(d3.axisLeft(yscale))
        .attr('class', 'axisWhite');


    svg.selectAll("mybar")
        .data(rearrangedData)
        .enter()
        .append("rect")
        .attr("x", function (d) { return xscale(d.x); })
        .attr("y", function (d) { return yscale(d.y); })
        .attr("width", xscale.bandwidth())
        .attr("height", function (d) { return height - yscale(d.y); })
        .attr("fill", "#69b3a2")
}

function eps() {

    document.getElementById("funFact").innerText = "Amazon has the second highest EPS ratio amongst its peer group at 34.20, second to Google." +
        " This is a very good sign, as it shows large profits per dollar of its share price."


    d3.select("SVG").remove();
    const width = 200;
    const height = 100;
    const margin = 5;

    const adj = width * 0.9;
    var paddingLeft = 60, paddingRight = 40, paddingTop = 10, paddingBottom = 10;
    // we are appending SVG first
    const svg = d3.select("div#container").append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "-"
            + 200 + " -"
            + 30 + " "
            + 550 + " "
            + 200)

        .classed("svg-content", true);
    //-----------------------------DATA------------------------------//





    var nameObj = {
        "Year": [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        "Rev": [8490, 10711, 14835, 19166, 24509, 34204, 48077, 61093, 74452, 88988, 107006, 135987, 177866, 232887, 280522],
        "Salary": [81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840]
    };

    const dataset = nameObj;

    const years = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];
    const rev = [8490, 10711, 14835, 19166, 24509, 34204, 48077, 61093, 74452, 88988, 107006, 135987, 177866, 232887, 280522];
    const salary = [81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840];

    finalArray = {
        x: ['AMZN', 'EBAY', 'BABA', 'GOOG', 'BAIDU'],
        y: [34.20, 7.21, 9.31, 51.75, 12.83]
    };


    var rearrangedData = finalArray.x.map(function (d, i) {
        return { x: d, y: finalArray.y[i] };

    })

    var barPadding = 5;
    var barWidth = (width / dataset.length);





    var xscale = d3.scaleBand()
        .range([0, width])
        .domain(finalArray.x)
        .padding(0.2);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xscale))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end")
        .attr('class', 'axisWhite');

    var yscale = d3.scaleLinear()
        .domain([0, 100])
        .range([height, 0]);
    svg.append("g")
        .call(d3.axisLeft(yscale))
        .attr('class', 'axisWhite');



    svg.selectAll("mybar")
        .data(rearrangedData)
        .enter()
        .append("rect")
        .attr("x", function (d) { return xscale(d.x); })
        .attr("y", function (d) { return yscale(d.y); })
        .attr("width", xscale.bandwidth())
        .attr("height", function (d) { return height - yscale(d.y); })
        .attr("fill", "#69b3a2")
}

function oneYr() {

    document.getElementById("funFact").innerText = "Amazon has by far the highest consensus estimate of 1 year target price amongst its peer group at 3,81278." +
        " This is likely due to it's growth prospects - Amazon has had record shattering growth rates for e-commerce in the past, and that trend is expected to continue."


    d3.select("SVG").remove();
    const width = 200;
    const height = 100;
    const margin = 5;

    const adj = width * 0.9;
    var paddingLeft = 60, paddingRight = 40, paddingTop = 10, paddingBottom = 10;
    // we are appending SVG first
    const svg = d3.select("div#container").append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "-"
            + 200 + " -"
            + 30 + " "
            + 550 + " "
            + 200)

        .classed("svg-content", true);

    //-----------------------------DATA------------------------------//





    var nameObj = {
        "Year": [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        "Rev": [8490, 10711, 14835, 19166, 24509, 34204, 48077, 61093, 74452, 88988, 107006, 135987, 177866, 232887, 280522],
        "Salary": [81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840]
    };

    const dataset = nameObj;

    const years = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];
    const rev = [8490, 10711, 14835, 19166, 24509, 34204, 48077, 61093, 74452, 88988, 107006, 135987, 177866, 232887, 280522];
    const salary = [81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840];

    finalArray = {
        x: ['AMZN', 'EBAY', 'BABA', 'GOOG', 'BAIDU'],
        y: [3812.78, 62.65, 338.88, 1839.17, 168.32]
    };


    var rearrangedData = finalArray.x.map(function (d, i) {
        return { x: d, y: finalArray.y[i] };

    })

    var barPadding = 5;
    var barWidth = (width / dataset.length);





    var xscale = d3.scaleBand()
        .range([0, width])
        .domain(finalArray.x)
        .padding(0.2);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xscale))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end")
        .attr('class', 'axisWhite');


    var yscale = d3.scaleLinear()
        .domain([0, 4000])
        .range([height, 0]);
    svg.append("g")
        .call(d3.axisLeft(yscale))
        .attr('class', 'axisWhite');



    svg.selectAll("mybar")
        .data(rearrangedData)
        .enter()
        .append("rect")
        .attr("x", function (d) { return xscale(d.x); })
        .attr("y", function (d) { return yscale(d.y); })
        .attr("width", xscale.bandwidth())
        .attr("height", function (d) { return height - yscale(d.y); })
        .attr("fill", "#69b3a2")
}

function earningsEstimate() {
    d3.select("SVG").remove();
    var margin = { top: 10, right: 30, bottom: 30, left: 40 },
        width = 400 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select("div#container")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    // create dummy data
    var data = [4.51, 7.09, 11.16]

    // Compute summary statistics used for the box:
    var data_sorted = data.sort(d3.ascending)
    var q1 = d3.quantile(data_sorted, .25)
    var median = d3.quantile(data_sorted, .5)
    var q3 = d3.quantile(data_sorted, .75)
    var interQuantileRange = q3 - q1
    var min = q1 - 1.5 * interQuantileRange
    var max = q1 + 1.5 * interQuantileRange

    // Show the Y scale
    var y = d3.scaleLinear()
        .domain([0, 24])
        .range([height, 0]);
    svg.call(d3.axisLeft(y))

    // a few features for the box
    var center = 200
    var width = 100

    // Show the main vertical line
    svg
        .append("line")
        .attr("x1", center)
        .attr("x2", center)
        .attr("y1", y(min))
        .attr("y2", y(max))
        .attr("stroke", "white")

    // Show the box
    svg
        .append("rect")
        .attr("x", center - width / 2)
        .attr("y", y(q3))
        .attr("height", (y(q1) - y(q3)))
        .attr("width", width)
        .attr("stroke", "white")
        .style("fill", "#69b3a2")

    // show median, min and max horizontal lines
    svg
        .selectAll("toto")
        .data([min, median, max])
        .enter()
        .append("line")
        .attr("x1", center - width / 2)
        .attr("x2", center + width / 2)
        .attr("y1", function (d) { return (y(d)) })
        .attr("y2", function (d) { return (y(d)) })
        .attr("stroke", "white")
}

function revenueEstimate() {
    d3.select("SVG").remove();
    var margin = { top: 10, right: 30, bottom: 30, left: 40 },
        width = 400 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select("div#container")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    // create dummy data
    var data = [119.44, 111.99, 123.18]

    // Compute summary statistics used for the box:
    var data_sorted = data.sort(d3.ascending)
    var q1 = d3.quantile(data_sorted, .25)
    var median = d3.quantile(data_sorted, .5)
    var q3 = d3.quantile(data_sorted, .75)
    var interQuantileRange = q3 - q1
    var min = q1 - 1.5 * interQuantileRange
    var max = q1 + 1.5 * interQuantileRange

    // Show the Y scale
    var y = d3.scaleLinear()
        .domain([0, 150])
        .range([height, 0]);
    svg.call(d3.axisLeft(y))

    // a few features for the box
    var center = 200
    var width = 100

    // Show the main vertical line
    svg
        .append("line")
        .attr("x1", center)
        .attr("x2", center)
        .attr("y1", y(min))
        .attr("y2", y(max))
        .attr("stroke", "white")

    // Show the box
    svg
        .append("rect")
        .attr("x", center - width / 2)
        .attr("y", y(q3))
        .attr("height", (y(q1) - y(q3)))
        .attr("width", width)
        .attr("stroke", "white")
        .style("fill", "#69b3a2")

    // show median, min and max horizontal lines
    svg
        .selectAll("toto")
        .data([min, median, max])
        .enter()
        .append("line")
        .attr("x1", center - width / 2)
        .attr("x2", center + width / 2)
        .attr("y1", function (d) { return (y(d)) })
        .attr("y2", function (d) { return (y(d)) })
        .attr("stroke", "white")
}

function growth() {
    d3.select("SVG").remove();
    var models = [
        {
            "model_name": "2020",
            "field1": 35.40,
            "field2": 10
        },
        {
            "model_name": "2021",
            "field1": 18.30,
            "field2": 10
        },

    ];

    var container = d3.select('div#container'),
        width = 720,
        height = 420,
        margin = { top: 30, right: 20, bottom: 30, left: 50 },
        barPadding = .2,
        axisTicks = { qty: 5, outerSize: 0, dateFormat: '%m-%d' };
    var svg = container
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);


    var xScale0 = d3.scaleBand().range([0, width - margin.left - margin.right]).padding(barPadding)
    var xScale1 = d3.scaleBand()
    var yScale = d3.scaleLinear().range([height - margin.top - margin.bottom, 0])

    var xAxis = d3.axisBottom(xScale0).tickSizeOuter(axisTicks.outerSize);
    var yAxis = d3.axisLeft(yScale).ticks(axisTicks.qty).tickSizeOuter(axisTicks.outerSize);

    xScale0.domain(models.map(d => d.model_name))
    xScale1.domain(['field1', 'field2']).range([0, xScale0.bandwidth()])
    yScale.domain([0, d3.max(models, d => d.field1 > d.field2 ? d.field1 : d.field2)])


    var model_name = svg.selectAll(".model_name")
        .data(models)
        .enter().append("g")
        .attr("class", "model_name")
        .attr("transform", d => `translate(${xScale0(d.model_name)},0)`);

    model_name.selectAll(".bar.field1")
        .data(d => [d])
        .enter()
        .append("rect")
        .attr("class", "bar field1")
        .style("fill", "blue")
        .attr("x", d => xScale1('field1'))
        .attr("y", d => yScale(d.field1))
        .attr("width", xScale1.bandwidth())
        .attr("height", d => {
            return height - margin.top - margin.bottom - yScale(d.field1)
        });


    model_name.selectAll(".bar.field2")
        .data(d => [d])
        .enter()
        .append("rect")
        .attr("class", "bar field2")
        .style("fill", "red")
        .attr("x", d => xScale1('field2'))
        .attr("y", d => yScale(d.field2))
        .attr("width", xScale1.bandwidth())
        .attr("height", d => {
            return height - margin.top - margin.bottom - yScale(d.field2)
        });

    // Add the X Axis
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", `translate(0,${height - margin.top - margin.bottom})`)
        .attr("stroke", "white")
        .call(xAxis);
    // Add the Y Axis
    svg.append("g")
        .attr("class", "y axis")
        .attr("stroke", "white")
        .call(yAxis);
}

function incomeStatement() {




    d3.select("SVG").remove();

    // set the dimensions and margins of the graph
    var margin = { top: 10, right: 30, bottom: 90, left: 40 },
        width = 460 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;


    const adj = 30;
    var paddingLeft = 60, paddingRight = 40, paddingTop = 10, paddingBottom = 10;
    // we are appending SVG first
    const svg = d3.select("div#container").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    //-----------------------------DATA------------------------------//





    var nameObj = {
        "Year": [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        "Rev": [8490, 10711, 14835, 19166, 24509, 34204, 48077, 61093, 74452, 88988, 107006, 135987, 177866, 232887, 280522],
        "Salary": [81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840]
    };

    const dataset = nameObj;

    const years = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];
    const rev = [8490, 10711, 14835, 19166, 24509, 34204, 48077, 61093, 74452, 88988, 107006, 135987, 177866, 232887, 280522];
    const salary = [81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840];

    finalArray = {
        x: ['Revenue', 'Cost of Goods Sold', 'Gross Profit', 'Operating Expenses', 'Operating Income', 'Pretax Income', 'Net Income'],
        y: [280522000, 205768000, 74754000, 60213000, 14541000, 13976000, 11588000]
    };


    var rearrangedData = finalArray.x.map(function (d, i) {
        return { x: d, y: finalArray.y[i] };

    })

    var barPadding = 5;
    var barWidth = (width / dataset.length);





    var xscale = d3.scaleBand()
        .range([0, width])
        .domain(finalArray.x)
        .padding(0.2);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xscale))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");


    var yscale = d3.scaleLinear()
        .domain([0, 1000000000])
        .range([height, 0]);
    svg.append("g")
        .call(d3.axisLeft(yscale))
        .attr('fill', 'white');

    // Lines
    svg.selectAll("myline")
        .data(rearrangedData)
        .enter()
        .append("line")
        .attr("x1", function (d) { return xscale(d.x); })
        .attr("x2", function (d) { return xscale(d.x); })
        .attr("y1", function (d) { return yscale(d.y); })
        .attr("y2", yscale(0))
        .attr("stroke", "white")


    // Circles
    svg.selectAll("mycircle")
        .data(rearrangedData)
        .enter()
        .append("circle")
        .attr("cx", function (d) { return xscale(d.x); })
        .attr("cy", function (d) { return yscale(d.y); })
        .attr("r", "4")
        .style("fill", "#69b3a2")
        .attr("stroke", "white")
}

function statementOfCashFlows() {




    d3.select("SVG").remove();

    // set the dimensions and margins of the graph
    var margin = { top: 10, right: 30, bottom: 90, left: 40 },
        width = 460 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;


    const adj = 30;
    var paddingLeft = 60, paddingRight = 40, paddingTop = 10, paddingBottom = 10;
    // we are appending SVG first
    const svg = d3.select("div#container").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    //-----------------------------DATA------------------------------//





    var nameObj = {
        "Year": [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        "Rev": [8490, 10711, 14835, 19166, 24509, 34204, 48077, 61093, 74452, 88988, 107006, 135987, 177866, 232887, 280522],
        "Salary": [81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840]
    };

    const dataset = nameObj;

    const years = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];
    const rev = [8490, 10711, 14835, 19166, 24509, 34204, 48077, 61093, 74452, 88988, 107006, 135987, 177866, 232887, 280522];
    const salary = [81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840, 81840];

    finalArray = {
        x: ['Operating', 'Investing', 'Financing', 'Ending Cash Position'],
        y: [38514000, -24281000, -10066000, 36410000]
    };


    var rearrangedData = finalArray.x.map(function (d, i) {
        return { x: d, y: finalArray.y[i] };

    })

    var barPadding = 5;
    var barWidth = (width / dataset.length);





    var xscale = d3.scaleBand()
        .range([0, width])
        .domain(finalArray.x)
        .padding(0.2);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xscale))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");


    var yscale = d3.scaleLinear()
        .domain([-1000000000, 1000000000])
        .range([height, 0]);
    svg.append("g")
        .call(d3.axisLeft(yscale))
        .attr('fill', 'white');

    // Lines
    svg.selectAll("myline")
        .data(rearrangedData)
        .enter()
        .append("line")
        .attr("x1", function (d) { return xscale(d.x); })
        .attr("x2", function (d) { return xscale(d.x); })
        .attr("y1", function (d) { return yscale(d.y); })
        .attr("y2", yscale(0))
        .attr("stroke", "white")


    // Circles
    svg.selectAll("mycircle")
        .data(rearrangedData)
        .enter()
        .append("circle")
        .attr("cx", function (d) { return xscale(d.x); })
        .attr("cy", function (d) { return yscale(d.y); })
        .attr("r", "4")
        .style("fill", "#69b3a2")
        .attr("stroke", "white")
}

function balanceSheet() {

    d3.select("SVG").remove();

    var width = 450
    height = 450
    margin = 40

    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    var radius = Math.min(width, height) / 2 - margin

    // append the svg object to the div called 'my_dataviz'
    var svg = d3.select("div#container")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    // Create dummy data
    var data = { 'Total Assets': 225248000, 'Total Liabilities': 163188000, 'Total Equity': 62060000 }

    // set the color scale
    var color = d3.scaleOrdinal()
        .domain(data)
        .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"])

    // Compute the position of each group on the pie:
    var pie = d3.pie()
        .value(function (d) { return d.value; })
    var data_ready = pie(d3.entries(data))

    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    svg
        .selectAll('whatever')
        .data(data_ready)
        .enter()
        .append('path')
        .attr('d', d3.arc()
            .innerRadius(0)
            .outerRadius(radius)
        )
        .attr('fill', function (d) { return (color(d.data.key)) })
        .attr("stroke", "black")
        .style("stroke-width", "2px")
        .style("opacity", 0.7)


}








