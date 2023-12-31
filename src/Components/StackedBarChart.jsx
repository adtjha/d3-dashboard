import { useEffect, useState } from "react";
import * as d3 from "d3";
import { useD3 } from "./useD3";

export const StackedBarChart = ({ parentData }) => {
  const [data, setData] = useState(parentData);

  const ref = useD3(
    (svg) => {
      const height = 240;
      const width = 540;
      const margin = { top: 20, right: 0, bottom: 30, left: 0 };

      const x = d3
        .scaleBand()
        .domain(data.map((d) => d.year))
        .rangeRound([margin.left, width - margin.right])
        .padding(0.8);

      const y1 = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.sales + d.sales2)])
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
            .tickSizeOuter(0)
            .tickFormat(
              (d, i) =>
                [
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                  "January",
                ][i]
            )
        );

      svg.select(".stacked-x-axis").call(xAxis);

      svg
        .select(".stacked-plot-area")
        .selectAll(".bar-sales")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "bar-sales")
        .attr("x", (d) => x(d.year))
        .attr("width", x.bandwidth())
        .attr("y", (d) => y1(d.sales))
        .attr("height", (d) => y1(0) - y1(d.sales))
        .attr("fill", "#02bb7d")
        .attr("rx", "4");

      svg
        .select(".stacked-plot-area")
        .selectAll(".bar-sales2")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "bar-sales2")
        .attr("x", (d) => x(d.year))
        .attr("width", x.bandwidth())
        .attr("y", (d) => y1(d.sales2))
        .attr("height", (d) => y1(0) - y1(d.sales2))
        .attr("fill", "#47b747")
        .attr("rx", "4");
    },
    [data.length]
  );

  useEffect(() => {
    setData(parentData);
  }, [parentData]);

  return (
    <svg ref={ref} style={{ width: "540px", height: "240px" }}>
      <g className='stacked-plot-area' />
      <g className='stacked-x-axis' />
    </svg>
  );
};
