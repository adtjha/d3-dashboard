import { useEffect, useState } from "react";
import * as d3 from "d3";
import { useD3 } from "./useD3";

export const StackedBarChart = ({ parentData }) => {
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

      svg.select(".x-axis").select("path").style("opacity", 0);
      svg
        .select(".x-axis")
        .selectAll(".tick")
        .select("line")
        .style("opacity", 0);

      svg
        .select(".x-axis")
        .selectAll(".tick")
        .select("text")
        .style("font-size", "14px")
        .style("color", "#bbb");

      svg.select(".x-axis").call(xAxis);
      // svg.select(".y-axis").call(y1Axis);

      svg
        .select(".plot-area")
        // .selectAll(".bar-group")
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
        .select(".plot-area")
        // .selectAll(".bar-group2")
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
      <g className='plot-area' />
      <g className='x-axis' />
      {/* <g className='y-axis' /> */}
    </svg>
  );
};
