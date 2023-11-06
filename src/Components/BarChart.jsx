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

      // const y1Axis = (g) =>
      //   g
      //     .attr("transform", `translate(${margin.left},0)`)
      //     .style("color", "#444")
      //     .call(d3.axisLeft(y1).ticks(null, "s"))
      //     .call((g) => g.select(".domain").remove())
      //     .call((g) =>
      //       g
      //         .append("text")
      //         .attr("x", -margin.left)
      //         .attr("y", 10)
      //         .attr("fill", "currentColor")
      //         .attr("text-anchor", "start")
      //         .text(data.y1)
      //     );

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
      // svg.select(".y-axis").call(y1Axis);

      svg
        .select(".plot-area")
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
      <g className='plot-area' />
      <g className='x-axis' />
      {/* <g className='y-axis' /> */}
    </svg>
  );
};