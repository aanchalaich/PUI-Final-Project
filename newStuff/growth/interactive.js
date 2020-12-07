$(document).ready(function () {
  new WOW().init();
});

function changeImage(id, imgSource) {
  document.getElementById(id).src = imgSource;
}

$(".animated").addClass("slower");


/*$(window).scroll(function makeCompensationGraph(){ 
  //------------------------1. PREPARATION-------------------------//
  //-----------------------------SVG-------------------------------//
  function elementScrolled(elem)
  {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    $(elem).addClass('done');
    console.log('done');
    return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
    
  }


  if(elementScrolled('div#container')  && $('div#container').attr(class) === "done") {

    if( $('div#container').addClass == "done")  {
      console.log('bye bitch');
    }
    
    const width = 500;
    const height = 500;
    const margin = 0;

    const adj = 30;
    var paddingLeft = 50, paddingRight = 40, paddingTop = 10, paddingBottom = 10;
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
      .range([paddingLeft, width - paddingRight]);
    svg.append("g")
      .attr("transform", "translate(0," + width / 2 + ")")
      .call(d3.axisBottom(xscale).tickFormat(d3.format("d")));


    var yscale = d3.scaleLinear()
      .domain([d3.min(finalArray.y), 300000])
      .range([height / 2 - paddingBottom, paddingTop]);
    svg.append("g")
      .attr("transform", "translate(50, 10)")
      .call(d3.axisLeft(yscale));



    var yscale2 = d3.scaleLinear()
      .domain([d3.min(finalArray2.y), d3.max(finalArray2.y)])
      .range([height / 2 - paddingBottom, paddingTop]);
    svg.append("g")
      .attr("transform", "translate(50, 10)")
      .call(d3.axisLeft(yscale));



    var valueline = d3.line()
      .x(function (d) { return xscale(d.x); })
      .y(function (d) { return yscale(d.y); });

    var valueline2 = d3.line()
      .x(function (d) { return xscale(d.x); })
      .y(function (d) { return yscale2(d.y); });




    svg.append("path")
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", valueline(rearrangedData));

    svg.append("path")
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 1.5)
      .attr("d", valueline2(rearrangedData2));




  }
})**/



/*window.onload = function industries() {
  segments = document.createElement('p');
  segments.className = "slideInLeft";
  document.body.appendChild(segments);
  segments.innerHTML = "Amazon operates through 3 major segments: North America, International, and Amazon Web Services";

}*/

//------------------------1. PREPARATION-------------------------//
//-----------------------------Corporateb Governance-------------------------------//
/* profile: governance const width = 500;
const height = 500;
const margin = 0;

const adj = 30;
var paddingLeft = 50, paddingRight = 40, paddingTop = 10, paddingBottom = 10;
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
                 .range([paddingLeft, width - paddingRight]);
             svg.append("g")
                 .attr("transform", "translate(0," + width / 2 + ")")
                 .call(d3.axisBottom(xscale).tickFormat(d3.format("d")));


             var yscale = d3.scaleLinear()
                 .domain([d3.min(finalArray.y), 300000])
                 .range([height / 2 - paddingBottom, paddingTop]);
             svg.append("g")
                 .attr("transform", "translate(50, 10)")
                 .call(d3.axisLeft(yscale));



             var yscale2 = d3.scaleLinear()
                 .domain([d3.min(finalArray2.y), d3.max(finalArray2.y)])
                 .range([height / 2 - paddingBottom, paddingTop]);
             svg.append("g")
                 .attr("transform", "translate(50, 10)")
                 .call(d3.axisLeft(yscale));



             var valueline = d3.line()
                 .x(function (d) { return xscale(d.x); })
                 .y(function (d) { return yscale(d.y); });

             var valueline2 = d3.line()
                 .x(function (d) { return xscale(d.x); })
                 .y(function (d) { return yscale2(d.y); });




             svg.append("path")
                 .attr("fill", "none")
                 .attr("stroke", "steelblue")
                 .attr("stroke-width", 1.5)
                 .attr("d", valueline(rearrangedData));

             svg.append("path")
                 .attr("fill", "none")
                 .attr("stroke", "red")
                 .attr("stroke-width", 1.5)
                 .attr("d", valueline2(rearrangedData2));*/

             /* profile: segment    const treeData = {
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
              const margin = { top: 20, right: 200, bottom: 30, left: 200 },
                  width = 660 - margin.left - margin.right,
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
                  .attr("x", d => d.children ? (d.data.value + 5) * -1 : d.data.value + 5)
                  .attr("y", d => d.children && d.depth !== 0 ? -(d.data.value + 5) : d)
                  .style("text-anchor", d => d.children ? "end" : "start")
                  .text(d => d.data.name); */





//------------------------Summary-------------------------//

                  //------------------------PE Ratio-------------------------//



 /*//------------------------1. PREPARATION-------------------------//
                //-----------------------------SVG-------------------------------//
                const width = 500;
                const height = 500;
                const margin = 5;

                const adj = 30;
                var paddingLeft = 50, paddingRight = 40, paddingTop = 10, paddingBottom = 10;
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
                    .style("text-anchor", "end");


                var yscale = d3.scaleLinear()
                    .domain([0, 100])
                    .range([height, 0]);
                svg.append("g")
                    .call(d3.axisLeft(yscale));



                svg.selectAll("mybar")
                    .data(rearrangedData)
                    .enter()
                    .append("rect")
                    .attr("x", function (d) { return xscale(d.x); })
                    .attr("y", function (d) { return yscale(d.y); })
                    .attr("width", xscale.bandwidth())
                    .attr("height", function (d) { return height - yscale(d.y); })
                    .attr("fill", "#69b3a2")*/

                //------------------------Price-------------------------//

                 //------------------------1. PREPARATION-------------------------//
                //-----------------------------SVG-------------------------------//
              /*  const width = 500;
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
                    .style("text-anchor", "end");


                var yscale = d3.scaleLinear()
                    .domain([0, 3500])
                    .range([height, 0]);
                svg.append("g")
                    .call(d3.axisLeft(yscale));



                svg.selectAll("mybar")
                    .data(rearrangedData)
                    .enter()
                    .append("rect")
                    .attr("x", function (d) { return xscale(d.x); })
                    .attr("y", function (d) { return yscale(d.y); })
                    .attr("width", xscale.bandwidth())
                    .attr("height", function (d) { return height - yscale(d.y); })
                    .attr("fill", "#69b3a2")*/

                //------------------------Previous close-------------------------//
                /*
                 //------------------------1. PREPARATION-------------------------//
                //-----------------------------SVG-------------------------------//
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
                    .style("text-anchor", "end");


                var yscale = d3.scaleLinear()
                    .domain([0, 3500])
                    .range([height, 0]);
                svg.append("g")
                    .call(d3.axisLeft(yscale));



                svg.selectAll("mybar")
                    .data(rearrangedData)
                    .enter()
                    .append("rect")
                    .attr("x", function (d) { return xscale(d.x); })
                    .attr("y", function (d) { return yscale(d.y); })
                    .attr("width", xscale.bandwidth())
                    .attr("height", function (d) { return height - yscale(d.y); })
                    .attr("fill", "#69b3a2")



                */

                //------------------------Open-------------------------//
                /*
                 //------------------------1. PREPARATION-------------------------//
                //-----------------------------SVG-------------------------------//
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
                    .style("text-anchor", "end");


                var yscale = d3.scaleLinear()
                    .domain([0, 3500])
                    .range([height, 0]);
                svg.append("g")
                    .call(d3.axisLeft(yscale));



                svg.selectAll("mybar")
                    .data(rearrangedData)
                    .enter()
                    .append("rect")
                    .attr("x", function (d) { return xscale(d.x); })
                    .attr("y", function (d) { return yscale(d.y); })
                    .attr("width", xscale.bandwidth())
                    .attr("height", function (d) { return height - yscale(d.y); })
                    .attr("fill", "#69b3a2")



                 */

                 //------------------------Volume-------------------------//
                /*
                 //------------------------1. PREPARATION-------------------------//
                //-----------------------------SVG-------------------------------//
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
                    .style("text-anchor", "end");


                var yscale = d3.scaleLinear()
                    .domain([0, 20000])
                    .range([height, 0]);
                svg.append("g")
                    .call(d3.axisLeft(yscale));



                svg.selectAll("mybar")
                    .data(rearrangedData)
                    .enter()
                    .append("rect")
                    .attr("x", function (d) { return xscale(d.x); })
                    .attr("y", function (d) { return yscale(d.y); })
                    .attr("width", xscale.bandwidth())
                    .attr("height", function (d) { return height - yscale(d.y); })
                    .attr("fill", "#69b3a2")



                 */

                  //------------------------Market Cap-------------------------//
                  /* 
                   //------------------------1. PREPARATION-------------------------//
                //-----------------------------SVG-------------------------------//
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
                    .style("text-anchor", "end");


                var yscale = d3.scaleLinear()
                    .domain([0, 1600])
                    .range([height, 0]);
                svg.append("g")
                    .call(d3.axisLeft(yscale));



                svg.selectAll("mybar")
                    .data(rearrangedData)
                    .enter()
                    .append("rect")
                    .attr("x", function (d) { return xscale(d.x); })
                    .attr("y", function (d) { return yscale(d.y); })
                    .attr("width", xscale.bandwidth())
                    .attr("height", function (d) { return height - yscale(d.y); })
                    .attr("fill", "#69b3a2")
                  */

                  //------------------------Beta-------------------------//
                  /*
                  //------------------------1. PREPARATION-------------------------//
                //-----------------------------SVG-------------------------------//
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
                    .style("text-anchor", "end");


                var yscale = d3.scaleLinear()
                    .domain([0, 2])
                    .range([height, 0]);
                svg.append("g")
                    .call(d3.axisLeft(yscale));



                svg.selectAll("mybar")
                    .data(rearrangedData)
                    .enter()
                    .append("rect")
                    .attr("x", function (d) { return xscale(d.x); })
                    .attr("y", function (d) { return yscale(d.y); })
                    .attr("width", xscale.bandwidth())
                    .attr("height", function (d) { return height - yscale(d.y); })
                    .attr("fill", "#69b3a2")
                   */

                   //------------------------EPS Ratio-------------------------//
                   /*
                   //------------------------1. PREPARATION-------------------------//
                //-----------------------------SVG-------------------------------//
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
                    .style("text-anchor", "end");


                var yscale = d3.scaleLinear()
                    .domain([0, 100])
                    .range([height, 0]);
                svg.append("g")
                    .call(d3.axisLeft(yscale));



                svg.selectAll("mybar")
                    .data(rearrangedData)
                    .enter()
                    .append("rect")
                    .attr("x", function (d) { return xscale(d.x); })
                    .attr("y", function (d) { return yscale(d.y); })
                    .attr("width", xscale.bandwidth())
                    .attr("height", function (d) { return height - yscale(d.y); })
                    .attr("fill", "#69b3a2")


                    */

                    //------------------------1 yr target est-------------------------//
                    /*
                     //------------------------1. PREPARATION-------------------------//
                //-----------------------------SVG-------------------------------//
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
                    .style("text-anchor", "end");


                var yscale = d3.scaleLinear()
                    .domain([0, 4000])
                    .range([height, 0]);
                svg.append("g")
                    .call(d3.axisLeft(yscale));



                svg.selectAll("mybar")
                    .data(rearrangedData)
                    .enter()
                    .append("rect")
                    .attr("x", function (d) { return xscale(d.x); })
                    .attr("y", function (d) { return yscale(d.y); })
                    .attr("width", xscale.bandwidth())
                    .attr("height", function (d) { return height - yscale(d.y); })
                    .attr("fill", "#69b3a2")

                     */
                   //------------------------Analysis Page-------------------------//
                    //------------------------2020-20201 Sales Growth vs. S&P Growth-------------------------//
                    /*
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
                .call(xAxis);
            // Add the Y Axis
            svg.append("g")
                .attr("class", "y axis")
                .call(yAxis);
                     */

                    //------------------------Earnings Estimate Boxplot-------------------------//
                    /*
                     // set the dimensions and margins of the graph
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
                    .attr("stroke", "black")

                // Show the box
                svg
                    .append("rect")
                    .attr("x", center - width / 2)
                    .attr("y", y(q3))
                    .attr("height", (y(q1) - y(q3)))
                    .attr("width", width)
                    .attr("stroke", "black")
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
                    .attr("stroke", "black")
                     */
                  //------------------------Revenue Estimate Page-------------------------//
                  /*
                  // set the dimensions and margins of the graph
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
                    .attr("stroke", "black")

                // Show the box
                svg
                    .append("rect")
                    .attr("x", center - width / 2)
                    .attr("y", y(q3))
                    .attr("height", (y(q1) - y(q3)))
                    .attr("width", width)
                    .attr("stroke", "black")
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
                    .attr("stroke", "black")

                   */
                  //------------------------EPS Trend Bar Graph-------------------------//
                  /*
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
                    x: ['Current Estimate', '7 Days Ago', '30 Days Ago', '60 Days Ago', '90 Days Ago'],
                    y: [7.09, 7.09, 7.08, 8.81, 8.85,]
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
                    .domain([0, 10])
                    .range([height, 0]);
                svg.append("g")
                    .call(d3.axisLeft(yscale));



                svg.selectAll("mybar")
                    .data(rearrangedData)
                    .enter()
                    .append("rect")
                    .attr("x", function (d) { return xscale(d.x); })
                    .attr("y", function (d) { return yscale(d.y); })
                    .attr("width", xscale.bandwidth())
                    .attr("height", function (d) { return height - yscale(d.y); })
                    .attr("fill", "#69b3a2");

                   */


                





