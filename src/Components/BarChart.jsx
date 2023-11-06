import { useEffect, useState } from "react";
import * as d3 from "d3";
import { useD3 } from "./useD3";

export const BarChart = ({ parentData }) => {
  const [data, setData] = useState(parentData);

  const ref = useD3(
    (svg) => {
      const height = 240;
      const width = 540;
      const margin = { top: 20, right: 0, bottom: 20, left: 0 };

      const x = d3
        .scaleBand()
        .domain(data.map((d) => d.year))
        .rangeRound([margin.left, width - margin.right])
        .padding(0.8);

      const y1 = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.sales)])
        .rangeRound([height - margin.bottom, margin.top]);

      const xAxis = (g) =>
        g.attr("transform", `translate(0,${height - margin.bottom})`).call(
          d3
            .axisBottom(x)
            .tickValues(
              d3
                .ticks(...d3.extent(x.domain()), width / 40)
                .filter((v) => x(v) !== undefined)
            )
            .tickFormat(
              (d, i) =>
                [
                  "Older",
                  "Jan 01-08",
                  "Jan 09-16",
                  "Jan 17-24",
                  "Jan 25-31",
                  "Future",
                ][i]
            )
            .tickSizeOuter(0)
        );

      svg.select(".bar-x-axis").call(xAxis);

      svg
        .select(".bar-plot-area")
        .attr("fill", "steelblue")
        .selectAll(".bar")
        .data(data)
        .join("rect")
        .attr("class", "bar")
        .attr("x", (d) => x(d.year))
        .attr("width", x.bandwidth())
        .attr("fill", "#47b747")
        .attr("rx", "4")
        .attr("y", (d) => y1(d.sales))
        .attr("height", (d) => y1(0) - y1(d.sales));
    },
    [data.length]
  );

  useEffect(() => {
    setData(parentData);
  }, [parentData]);

  return (
    <svg ref={ref} style={{ width: "540px", height: "240px" }}>
      <g className='bar-plot-area' />
      <g className='bar-x-axis' />
    </svg>
  );
};
