import * as d3 from 'd3';

const square = d3.selectAll('rect');
square.style('fill', 'orange');

var circle = d3.selectAll('circle');

circle.style('fill', 'steelblue');
circle.attr('r', 30);
