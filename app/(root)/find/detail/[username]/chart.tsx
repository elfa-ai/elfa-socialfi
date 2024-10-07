import FullWidthContainer from "@/components/ui/atomic/layout/FullWidthContainer";
import ValueIndication from "@/components/ui/atomic/typography/value-indication";
import React from "react";
import { Line, ResponsiveContainer, ComposedChart } from "recharts";

const data = [
  {
    name: "Page A",
    pv: 2400,
  },
  {
    name: "Page B",
    pv: 1398,
  },
  {
    name: "Page C",
    pv: 3800,
  },
  {
    name: "Page D",
    pv: 3908,
  },
  {
    name: "Page E",
    pv: 4800,
  },
  {
    name: "Page F",
    pv: 7700,
  },
  {
    name: "Page G",
    pv: 6900,
  },
  {
    name: "Page H",
    pv: 8800,
  },
];

const Example = ({
  metadata,
}: {
  metadata: { lfa: number; increase: number };
}) => {
  return (
    <FullWidthContainer childClassName="px-0 xs:px-0 sm:px-8 2xl:px-0">
      <div className="h-[200px] relative">
        <div className="absolute w-[200px] h-[30px] z-[10] top-10 left-4">
          <div className="flex items-center gap-4">
            <div className="text-[25px]">{metadata.lfa} LFA</div>
            <ValueIndication delta={metadata.increase} isPercentage />
          </div>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            margin={{
              top: 30,
              bottom: 20,
            }}
            className="text-xs  text-[#0D0417]"
            data={data}
          >
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#F36FD5"
              strokeWidth={2}
              dot={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </FullWidthContainer>
  );
};

export default Example;
