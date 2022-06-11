import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  BarSeries,
  DataLabel,
  Category,
  Legend,
} from "@syncfusion/ej2-react-charts";

import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
import { Tooltip } from "@syncfusion/ej2-react-popups";
import { IoLogoPolymer } from "react-icons/io";

const Bar = () => {
  const { currentMode } = useStateContext();

  return (
    <ChartComponent
      id="charts"
      primaryXAxis={barPrimaryXAxis}
      primaryYAxis={barPrimaryYAxis}

      // background={currentMode === "Dark" ? "#33373E" : "#fff"}
      // // legendSettings={{ background: "white" }}
    >
      <Inject services={[BarSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        {barCustomSeries.map((item) => (
          <SeriesDirective
            dataSource={item.dataSource}
            xName={item.xName}
            yName={item.yName}
            name={item.name}
            type={item.type}
          />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Bar;
