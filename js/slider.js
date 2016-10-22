(function(){
  // adds a slider to the proper div. Non functionion, just for show
  var target = d3.select('#sildercont').append('svg')
        .attr("id", 'slidersvg')
        .attr('width', 600)
        .attr('height', 200);

  var txtArr = ['Disagree', 'No Opinion', 'Agree'];

  target.append('rect')
    .attr('x', 5)
    .attr('y', 5)
    .attr('ry', 50)
    .attr('width', 590)
    .attr('height', 190)
    .style('fill', '#ababab');

  target.append('rect')
    .attr('x', (600 /2) - 2)
    .attr('y', 50)
    .attr('ry', 5)
    .attr('width', 4)
    .attr('height', 120)
    .style('fill', '#999');


  target.append('rect')
    .attr('x', 30)
    .attr('y', 120)
    .attr('ry', 5)
    .attr('width', 540)
    .attr('height', 4)
    .style('fill', '#232323');

  target.append('circle')
    .attr('id', 'draghandle')
    .attr('cx', 300)
    .attr('cy', 120)
    .attr('r', 35)
    .style('fill', '#4242ac');

    // .call(d3.drag()
    //   .on("start", dragstarted)
    //   .on("drag", dragged)
    //   .on("end", dragended)
    // );

  target.selectAll('.lab1')
    .data(txtArr)
    .enter()
    .append('text')
    .attr('x', function(d, i) {return 90  + (i*(600/3)); })
    .attr('y', 50 )
    .attr('font-size', '25px')
    .attr('text-anchor', 'middle')
    .text(function(d){ return d; });


  // var contW = document.getElementById('slidersvg');
  // console.log(contW.width)  


  // function dragstarted(d) {
  //   console.log(this);

  //   d3.select(this).raise().classed("dragging", true);
  // }

  // function dragged(d) {
  //   d3.select(this).attr("cx", d3.event.x );
  // }

  // function dragended(d, i) {
  //   console.log(d3.event.x);
  //   d3.select(this).classed("dragging", false);
  // }






}());