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


  var changeRndSet = randomSets(changeEx);

  changeRndSet.unshift(changeEx);

  changeRndSet = shuffleArray(changeRndSet);




  for (var i = 0; i < 5; i += 1) addSlope('random-ex' + (i+1), changeRndSet[i], 2.5);
  for (var i = 5; i < 10; i += 1) addSlope('random-ex' + (i+1), changeRndSet[i], 2.5);
  for (var i = 10; i < 15; i += 1) addSlope('random-ex' + (i+1), changeRndSet[i], 2.5);
  for (var i = 15; i < 20; i += 1) addSlope('random-ex' + (i+1), changeRndSet[i], 2.5);

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

  function randomSets(data) {

    var i, j, iMax, jMax = data.length, 
        tmpInnerArr = [],
        returnArray = [],
        tmpObj = {},
        rndNumb;

    for (i = 0; i < 20; i += 1) {
       tmpInnerArr = [];
      for (j = 0; j < jMax; j += 1) {
        rndNumb = Math.round(Math.random());

        tmpObj = {
          pre: (rndNumb === 0 ? data[j].pre : data[j].post),
          post: (rndNumb === 0 ? data[j].post : data[j].pre)
        };

        tmpInnerArr.push(tmpObj);
      } // end j
        
        returnArray.push(tmpInnerArr);
    } // end i

    return returnArray;
  }
  
  function shuffleArray(a) {
  var j, x, i;
    for (i = a.length; i; i--) {
      j = Math.floor(Math.random() * i);
      x = a[i - 1];
      a[i - 1] = a[j];
      a[j] = x;
    }

  return a;

};

}());