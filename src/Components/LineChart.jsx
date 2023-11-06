import { useEffect, useState } from "react";
import * as d3 from "d3";
import { useD3 } from "./useD3";

export const LineChart = ({ parentData }) => {
  const [data, setData] = useState(parentData);

  useEffect(() => {
    setData([...parentData]);
  }, [parentData]);

  const ref = useD3(
    (svg) => {
      const height = 240;
      const width = 540;
      const margin = { top: 20, right: 0, bottom: 20, left: 0 };

      const x = d3
        .scaleBand()
        .domain(data.map((d) => d.year))
        .rangeRound([margin.left, width - margin.right])
        .padding(0.75);

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
                ["09", "10", "11", "12", "13", "14", "15", "16", "17", "18"][i]
            )
            .tickSizeOuter(0)
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
        .style("font-family", "'Poppins', sans-serif")
        .style("color", "#bbb");

      svg.select(".x-axis").call(xAxis);

      const line = d3
        .line()
        .x((d) => x(d.year))
        .y((d) => y1(d.sales))
        .curve(d3.curveBasis);

      svg
        .select(".plot-area")
        .attr("fill", "steelblue")
        .attr("d", line(data))
        .attr("class", "line")
        .style("fill", "none")
        .style("stroke", "#47b747")
        .style("stroke-linecap", "round")
        .style("stroke-width", "3");
    },
    [data]
  );

  return (
    <svg ref={ref} style={{ width: "540px", height: "240px" }}>
      <path className='plot-area' />
      <g className='x-axis' />
    </svg>
  );
};
