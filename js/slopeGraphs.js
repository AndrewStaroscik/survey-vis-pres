(function(){ 
  'use strict';

  // data
  var q1Data = [
    {pre: 3, post: 3},
    {pre: 3, post: 2},
    {pre: 1, post: 1},
    {pre: 2, post: 2},
    {pre: 2, post: 2},
    {pre: 3, post: 2},
    {pre: 2, post: 2},
    {pre: 4, post: 2},
    {pre: 2, post: 1},
    {pre: 2, post: 1},
    {pre: 2, post: 1},
    {pre: 2, post: 1},
    {pre: 3, post: 2},
    {pre: 3, post: 3},
    {pre: 1, post: 1},
    {pre: 2, post: 1},
    {pre: 2, post: 2}
  ];

  var changeEx = [
    {pre: 2, post: 1},
    {pre: 4, post: 1},
    {pre: 4, post: 2},
    {pre: 4, post: 3},
    {pre: 5, post: 3},
    {pre: 5, post: 2},
    {pre: 5, post: 4},
    {pre: 5, post: 3},
    {pre: 5, post: 3},
    {pre: 4, post: 3},
    {pre: 5, post: 4},
    {pre: 5, post: 4},
    {pre: 5, post: 3},
    {pre: 5, post: 2},
    {pre: 5, post: 4},
    {pre: 5, post: 4}
  ];

  var noChangeEx = [
    {pre: 2, post: 1},
    {pre: 1, post: 2},
    {pre: 2, post: 2},
    {pre: 2, post: 3},
    {pre: 3, post: 2},
    {pre: 5, post: 5},
    {pre: 4, post: 4},
    {pre: 3, post: 3},
    {pre: 3, post: 3},
    {pre: 3, post: 4},
    {pre: 4, post: 3},
    {pre: 4, post: 4},
    {pre: 3, post: 3},
    {pre: 2, post: 2},
    {pre: 4, post: 4},
    {pre: 5, post: 4}
  ];

  var churnEx = [
    {pre: 1, post: 2},
    {pre: 4, post: 1},
    {pre: 2, post: 4},
    {pre: 4, post: 2},
    {pre: 3, post: 5},
    {pre: 5, post: 3},
    {pre: 2, post: 5},
    {pre: 5, post: 4},
    {pre: 5, post: 3},
    {pre: 2, post: 5},
    {pre: 2, post: 5},
    {pre: 5, post: 4},
    {pre: 3, post: 5},
    {pre: 5, post: 3},
    {pre: 4, post: 5},
    {pre: 5, post: 4}
  ];

  // process data before rendering:
  var q1Renderable = processData(q1Data);
  var changeRenderable = processData(changeEx);
  var ncRenderable = processData(noChangeEx);
  var churnRenderable = processData(churnEx);

  addSlope('change-ex', changeRenderable, 1);
  addSlope('no-change-ex', ncRenderable, 1);
  addSlope('churn-ex', churnRenderable, 1);

  addSlope('no-change-ex2', ncRenderable, 1);
  addSlope('churn-ex2', churnRenderable, 1);

  addSlope('change-exsm', changeRenderable, 1.75);
  addSlope('no-change-exsm', ncRenderable, 1.75);
  addSlope('churn-exsm', churnRenderable, 1.75);

  addSlope('change-v2', changeRenderable, 1);

  function addSlope(id, data, size) {
    var w = 300 / size,
        h = 350 / size,
        targetSVG = d3.select('#' + id).append('svg')
          .attr('width', w)
          .attr('height', h);

    var bins = {"1" : 0, "2" : 0, "3" : 0, "4" : 0, "5" : 0},
        colors_6 = ['#ffa089','#ffd2b5','#ffffe0','#c3ede1','#78dbe2'],
        ansRange = [0,5]; 

  

  
    var x = d3.scaleOrdinal()
        .domain(["Pre", "Post"])
        .range([35, w-25]);

    var y = d3.scaleOrdinal()
        .domain(['SA', 'A', 'N', 'D', 'SD'])
        .range([25 + ((h-50)*0/4), 25 + ((h-50)*1/4), 25 + ((h-50)*2/4), 25 + ((h-50)*3/4), 25 + ((h-50)*4/4)]);


    var xAxis = d3.axisTop()
        .scale(x)
        .tickValues(["Pre", "Post"]);    

    var yAxis0 = d3.axisLeft()
      .scale(y)
      .tickFormat(function(d){return d; });
      

    var yAxis1 = d3.axisRight()
      .scale(y)
      .ticks(0);
          
    targetSVG.append("g")
      .attr('transform', 'translate(0, ' + (25) + ')')
      .attr("class", "x xnone")
      .call(xAxis);

    targetSVG.append("g")
      .attr('transform', 'translate(35, 0)')
      .attr("class", "y axis")
      .call(yAxis0);  

    targetSVG.append("g")
      .attr('transform', 'translate(' + (w - 35) + ', 0)')
      .attr("class", "y axis")
      .call(yAxis1);   



    var slopeLines = targetSVG.selectAll('.q1lines')
      .data(data)
      .enter()
      .append('line')
      .attr('class', 'q1lines')
      .attr('x1', 35)
      .attr('y1', function(d) {
        var opt = ['SA', 'A', 'N', 'D', 'SD'];
        return y(opt[d.pre-1]);
      })
      .attr('x2', w-35)
      .attr('y2', function(d) {
        var opt = ['SA', 'A', 'N', 'D', 'SD'];
        return y(opt[d.post-1]);
      })
      .style('stroke', function(d) {
        if (d.pre == d.post) return '#a97e00';
        if (d.pre > d.post) return '#a3e971';
        return '#ed7494';
      })
      .style('stroke-width', function (d) {
        return d.count;
      })
      .style('stroke-linecap', 'round');

  }

  function processData(data) {
    var i, j, k,
    iMax = 5,
    jMax = 5,
    kMax = data.length,
    count, 
    returnArray = []

    for (i = 0; i < iMax; i += 1) {
      for (j = 0; j < jMax; j += 1) {
        count = 0;
        for (k = 0; k < kMax; k += 1) {
          if (data[k].pre == i+1 && data[k].post == j+1) count += 1; 
        }
        if (count > 0) returnArray.push({pre: i+1, post: j+1, count: count});
      }      
    }

    return returnArray;

  }
  

}());