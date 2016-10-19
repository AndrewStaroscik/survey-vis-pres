(function(){ 
  'use strict';

  var barData = [
        {set: 'Set 1', vals: [{w: 1, y: 0, s: 7.5}, {w: 2, y: 1, s: 7.5}, {w: 9, y: 3, s: 7.5}, {w: 2, y: 12, s: 7.5}, {w: 1, y: 14, s: 7.5}], c:'#ff0000'},
        {set: 'Set 2', vals: [{w: 6, y: 0, s: 7.5}, {w: 1, y: 6, s: 7.5}, {w: 1, y: 7, s: 7.5}, {w: 1, y: 8, s: 7.5}, {w: 6, y: 9, s: 7.5}], c:'#00ff00'},    
      ],
      c = ['#d7191c','#fdae61','#ffffbf','#a6d96a','#1a9641'],
      w = 300,
      h = 250,
      svgBar01 = d3.select('#stdevbar').append('svg')
        .attr("width", w)
      .attr('height', h);

  var x = d3.scaleLinear()
      .domain([-15,15])
      .range([35, w-25]),

      y = d3.scalePoint()
      .padding([0.5])
      .domain(["Set 1", "Set 2"])
      .range([25, h-25]);

 var xAxis = d3.axisBottom()
      .scale(x)
      .ticks(5),

    yAxis = d3.axisLeft()
      .scale(y);
    
  svgBar01.append("g")
    .attr('transform', 'translate(0, ' + (h-25) + ')')
    .attr("class", "x axis")
    .call(xAxis);

  svgBar01.append("g")
    .attr('transform', 'translate(35, 0)')
    .attr("class", "y axis")
    .call(yAxis);

  var stdevPtSets = svgBar01.selectAll('.stdevbarpts')  
    .data(barData, function(d) {return d.set; });


  var stdevPtSetsEnter = stdevPtSets.enter()
    .append('g')
    .attr('transform', function(d){
      return 'translate(0,' + y(d.set) + ')';
    });

  stdevPtSetsEnter.selectAll(".pts")
    .data(function(d) { 
      return d.vals; 
    })
    .enter()
    .append("rect")
    .attr('class', 'pts')
    .attr('x', function(d) {
      return x(d.y - d.s);
    })
    .attr('y', -25)
    .attr('height', 50)
    .attr('width', function(d) {
      
      return  x(d.w) - x(0);
    })
    .style('fill', function(d,i) {return c[i]})
    .style('stroke', '#444')
    .style('fill-opacity', 1);


 

    

}());