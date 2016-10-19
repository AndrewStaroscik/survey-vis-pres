(function(){ 
  'use strict';

  var stdevData = [
        {set: 'Set 1', vals: [10,11.6,8.96,9,5,10.9,9.25,7.8,8.99,13], c:'#ff0000'},
        {set: 'Set 2', vals: [11.5,13.6,9.8,0.75,17.25,6,15.1,14,2], c: '#00ff00'}    
      ],
      w = 300,
      h = 250,
      svgStdev = d3.select('#stdevchart').append('svg')
        .attr("width", w)
      .attr('height', h);

  
  var c = ['#ff0000', '#00ff00'];
  var x = d3.scalePoint()
      .padding([0.5])
      .domain(["Set 1", "Set 2"])
      .range([25, w-25]),

    y = d3.scaleLinear()
      .domain([0,20])
      .range([h-25, 25]);

 var xAxis = d3.axisBottom()
      .scale(x),

    yAxis = d3.axisLeft()
      .scale(y)
      .ticks(5);
    
  svgStdev.append("g")
    .attr('transform', 'translate(0, ' + (h-25) + ')')
    .attr("class", "x axis")
    .call(xAxis);

  svgStdev.append("g")
    .attr('transform', 'translate(25, 0)')
    .attr("class", "y axis")
    .call(yAxis);

  var stdevPtSets = svgStdev.selectAll('.stdevpts')  
    .data(stdevData, function(d) {return d.set; });

  var stdevPtSetsEnter = stdevPtSets.enter()
    .append('g')
    .attr('transform', function(d){
      return 'translate(' + x(d.set) + ', 0)';
    });

 stdevPtSetsEnter.selectAll(".pts")
.data(function(d) { 
  return d.vals; })
  .enter()
  .append("circle")
  .attr('class', 'child')
  .attr('cx', 0)
  .attr('cy', function(d,i) {
    return y(d);
  })
  .attr('r', 6)
  .style('fill', "darkseagreen")
  .style('stroke', '#898989')
  .style('opacity', 0.6);


    

}());