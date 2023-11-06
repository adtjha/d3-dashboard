import { useRef, useEffect } from "react";
import * as d3 from "d3";

export const useD3 = (renderChartFn, dependencies) => {
  const ref = useRef();

  useEffect(() => {
    console.log("Re-rendering", dependencies);
    renderChartFn(d3.select(ref.current));
    return () => {};
  }, [dependencies, renderChartFn]);
  return ref;
};
