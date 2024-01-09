import {
  Chart as Chartjs,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import revenueData from "../../data/Data.json";


Chartjs.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler
);

const Chart = () => {
  return (
    <div className="flex-[5] border shadow-lg p-5 w-full">
      <Line
        id="canvas"
        data={{
          labels: revenueData.map((data) => data.label),
          datasets: [
            {
              label: "Revenue",
              data: revenueData.map((data) => data.revenue),
              backgroundColor: (context) => {
                const bgColor = [
                  // "rgba(54,162,235,0.2)",
                  // "rgba(255,206,86,0.2)",
                  // "rgba(153,102,255,0.2)",
                  // "rgba(255,159,64,0.2)",
                  // "rgba(0,0,0,0.2)",
                  "rgba(54,162,235,0.4)",
                  "rgba(153,102,255,0.3)",
                  "rgba(255,255,255,0.2)",
                ];

                if (!context.chart.chartArea) {
                  return;
                }

                const {
                  ctx,
                  data,
                  chartArea: { top, bottom },
                } = context.chart;

                const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
                gradientBg.addColorStop(0, bgColor[0]);
                gradientBg.addColorStop(0.5, bgColor[1]);
                gradientBg.addColorStop(1, bgColor[2]);
                return gradientBg;
              },
              fill: true,
              tension: 0.3,
            },
            {
              label: "Cost",
              data: revenueData.map((data) => data.cost),
              backgroundColor: (context) => {
                const bgColor = [
                  "rgba(255, 0, 0, 0.4)",
                  "rgba(255, 0, 0, 0.3)",
                  "rgba(218, 60, 42, 0.3)",
                  "rgba(255,255,255, 0)",
                ];

                if (!context.chart.chartArea) {
                  return;
                }

                const {
                  ctx,
                  data,
                  chartArea: { top, bottom },
                } = context.chart;

                const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
                gradientBg.addColorStop(0, bgColor[0]);
                gradientBg.addColorStop(0.5, bgColor[1]);
                gradientBg.addColorStop(1, bgColor[2]);
                return gradientBg;
              },
              fill: true,
              tension: 0.4,
            },
          ],
        }}
      />
    </div>
  );
};

export default Chart;
