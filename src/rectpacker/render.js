import * as d3 from 'd3'
import '../d3-styles.js'
import { RectArrangement } from './arranger.js'

function map2range(value, min, max, newMin, newMax) {
  return ((value - min) / (max - min)) * (newMax - newMin) + newMin
}

const arrange = (rectangles, width, height, config) => {
  const sa = new RectArrangement([width / 2, height / 2], config)
  let i = 0
  for (let rect of rectangles) {
    sa.addRect(rect[0], rect[1], rect[2])
    i++
  }
  return sa
}

export function render(
  svgNode,
  data,
  visualOptions,
  mapping,
  originalData,
  styles
) {
  const { width, height, heuristic, metric, closeFactor, minSize, maxSize } = visualOptions
  const config = {
    heuristic: heuristic,
    metric: metric,
    closeFactor: closeFactor,
    renderFreq: 10,
    closeFreq: 1,
  }

  const min_value = d3.min(data, (d) => +d.size)
  const max_value = d3.max(data, (d) => +d.size)

  const rectangles = data
    .map((d) => [
      map2range(+d.size, min_value, max_value, minSize, maxSize),
      d.aspectRatio,
      d.imagePath,
    ])
    .sort((a, b) => b[0] - a[0])
    .slice(0, 100)

  const arrangement = arrange(rectangles, width, height, config)

  d3.select(svgNode)
    .selectAll('image')
    .data(arrangement.rects)
    .enter()
    .append('image')
    .attr('x', (d) => d[0][0].p[0])
    .attr('y', (d) => d[0][0].p[1])
    .attr('width', (d) => d[0][1].p[0] - d[0][0].p[0])
    .attr('height', (d) => d[0][3].p[1] - d[0][0].p[1])
    .attr("xlink:href", (d) => d[1])
}
