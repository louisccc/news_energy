function init(){
		
	$("#gco2").click(function(){
		$('#myModal').modal('show');
	});
	set_popover();
	graph();
	animated_graph();

	$("#louis").click(function(){
		graph();
	});
}
title=["<p class=\"lead\" style=\"font-size:16px font-weight:bold;\">-WHAT(什麼是佔土地面積)?</p>" ,"<p class=\"lead\" style=\"font-size:16px font-weight:bold;\">-WHAT(什麼是溫室氣體)?</p>"];

mydata = [
[5, 3, 3, 3, 240, 320, 100], 
[25, 400, 180, 320, 4, 5, 10],
[5, 3, 3, 3, 240, 320, 300]
];

maxvalue = [6000, 1000];
function set_popover(){
	$("#gco2").mouseover(function(){
		$(this).popover('show');
	});
	$("#gco2").mouseout(function(){
		$(this).popover('hide');
	});
	$("#coal").mouseover(function(){
		$(this).popover('show');
	});
	$("#coal").mouseout(function(){
		$(this).popover('hide');
	});
	$("#factory").mouseover(function(){
		$(this).popover('show');
	});
	$("#factory").mouseout(function(){
		$(this).popover('hide');
	});
	$("#hot").mouseover(function(){
		$(this).popover('show');
	});
	$("#hot").mouseout(function(){
		$(this).popover('hide');
	});
	$("#retired").mouseover(function(){
		$(this).popover('show');
	});
	$("#retired").mouseout(function(){
		$(this).popover('hide');
	});
	$("#radio1").mouseover(function(){
		$(this).popover('show');
	});
	$("#radio1").mouseout(function(){
		$(this).popover('hide');
	});
	$("#can").mouseover(function(){
		$(this).popover('show');
	});
	$("#can").mouseout(function(){
		$(this).popover('hide');
	});	
}
function animated_graph(){
	// Suppose there is currently one div with id "d3TutoGraphContainer" in the DOM
	// We append a 600x300 empty SVG container in the div
	var chart = d3.select("#graph2").append("svg").attr("width", "540").attr("height", "500")
	.append("g").attr("transform", "translate(40, 20)");
	
	width = 500;
	height = 400;
	var x = d3.scale.ordinal()
	    .rangeRoundBands([0, width], .1);

	var y = d3.scale.linear()
	    .rangeRound([height, 0]); 
 	var xAxis = d3.svg.axis()
	    .scale(x)
	    .orient("bottom");

	var yAxis = d3.svg.axis()
	    .scale(y)
	    .orient("left")
	    .tickFormat(d3.format(".2s"));

	// Create the bar chart which consists of ten SVG rectangles, one for each piece of data
	data = [1 ,4, 5, 6, 24, 8, 12, 1, 1, 20];
	var rects = chart.selectAll('rect').data(mydata[1])
	                 .enter().append('rect')
	                 .attr("stroke", "none").attr("fill", "rgb(7, 130, 180)")
	                 .attr("x", function(d, i) { return 70 * i+20; })
	                 .attr("y", function(d) {return height-d;})
	                 .attr("width", "40")
	                 .attr("height", function(d) { return d; } );

 	x.domain(["核能", "煤礦", "天然氣", "石油", "風力", "水力", "太陽能"]);

	chart.append("g")
	  	.attr("class", "x axis")
	  	.attr("transform", "translate(0," + height + ")")
	  	.call(xAxis);
	chart.append("g")
		.attr("class", "y axis")
	    .call(yAxis)
	    .append("text")
	    .attr("transform", "rotate(-90)")
	    .attr("y", 6)
	    .attr("dy", ".71em")
	    .style("text-anchor", "end");

	// Transition on click managed by jQuery
	$(".btn").on('click', function() {
	  // Generate randomly a data set with 10 elements
	  var newData = [];
	  var id = $(this).attr("datapage");
	  var y = d3.scale.linear()
	    .rangeRound([height, 0]); 
	  var yAxis = d3.svg.axis()
	    .scale(y)
	    .orient("left")
	    .tickFormat(d3.format(".2s"));
      x.domain(["核能", "煤礦", "天然氣", "石油", "風力", "水力", "太陽能"]);
	  console.log(y);

	  for (var i=0; i<10; i+=1) { newData.push(Math.floor(24 * Math.random())); }
	  	console.log(chart.select(".y axis"));
	  chart.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end");
	  // Generate a random color
	  
	  var newColor = 'rgb(' + Math.floor(255 * Math.random()) +
	                   ', ' + Math.floor(255 * Math.random()) +
	                   ', ' + Math.floor(255 * Math.random()) + ')';
	 
	  rects.data(mydata[id])
	       .transition().duration(2000).delay(200)
	       .attr("y", function(d) {return height - d;})
	       .attr("height", function(d) { return d; } )
	       .attr("fill", newColor);
	  $("#content2").html(title[id]);
	});
}
function graph(){
	var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 640 - margin.left - margin.right,
    height = 390 - margin.top - margin.bottom;

	var x = d3.scale.ordinal()
	    .rangeRoundBands([0, width], .1);

	var y = d3.scale.linear()
	    .rangeRound([height, 0]);

	var color = d3.scale.ordinal()
	    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

	var xAxis = d3.svg.axis()
	    .scale(x)
	    .orient("bottom");

	var yAxis = d3.svg.axis()
	    .scale(y)
	    .orient("left")
	    .tickFormat(d3.format(".2s"));

	var svg = d3.select("#graph").append("svg")
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	  .append("g")
	    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	d3.csv("data.csv", function(error, data) {

	  color.domain(d3.keys(data[0]).filter(function(key) { return key !== "State"; }));

	  data.forEach(function(d) {
	    var y0 = 0;
	    d.ages = color.domain().map(function(name) { return {name: name, y0: y0, y1: y0 += +d[name]}; });
	    d.total = d.ages[d.ages.length - 1].y1;
	  });

	  data.sort(function(a, b) { return b.total - a.total; });
	  x.domain(data.map(function(d) { return d.State; }));
	  y.domain([0, d3.max(data, function(d) { return d.total; })]);

	  svg.append("g")
	      .attr("class", "x axis")
	      .attr("transform", "translate(0," + height + ")")
	      .call(xAxis);

	  svg.append("g")
	      .attr("class", "y axis")
	      .call(yAxis)
	    .append("text")
	      .attr("transform", "rotate(-90)")
	      .attr("y", 6)
	      .attr("dy", ".71em")
	      .style("text-anchor", "end");


	  var state = svg.selectAll(".state")
	      .data(data)
	    .enter().append("g")
	      .attr("class", "g")
	      .attr("transform", function(d) { return "translate(" + x(d.State) + ",0)"; });

	  var rects = state.selectAll("rect")
	      .data(function(d) { return d.ages; })
	      .enter().append("rect")
	      .attr("width", x.rangeBand())
	      .attr("y", function(d) { return y(d.y1); })
	      .attr("height", function(d) { return y(d.y0) - y(d.y1); })
	      .style("fill", function(d) { return color(d.name); });

	  var legend = svg.selectAll(".legend")
	      .data(color.domain().slice().reverse())
	    .enter().append("g")
	      .attr("class", "legend")
	      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

	  legend.append("rect")
	      .attr("x", width - 18)
	      .attr("width", 18)
	      .attr("height", 18)
	      .style("fill", color);

	  legend.append("text")
	      .attr("x", width - 24)
	      .attr("y", 9)
	      .attr("dy", ".35em")
	      .style("text-anchor", "end")
	      .text(function(d) { return d; });
	});
	
	
}
