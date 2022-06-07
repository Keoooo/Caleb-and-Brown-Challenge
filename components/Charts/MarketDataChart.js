import React from "react";
import { formatDollar } from "../../utils/helpers";
import {
  Label,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

//https://github.com/recharts/recharts/issues/2272

// Need to asisgn values to the numbers in the array for RECHART.
const MarketDataChart = ({ prices, marketCap, total_volumes }) => {
  const priceData = prices.map((item) => ({
    x: new Date(item[0]).toISOString().split("T")[0],
    price: Math.round(item[1] * 100) / 100,
  }));

  const marketCapData = marketCap.map((item) => ({
    x: new Date(item[0]).toISOString().split("T")[0],
    market_cap: Math.round(item[1] * 100) / 100,
  }));

  const totalVolumesData = total_volumes.map((item) => ({
    x: new Date(item[0]).toISOString().split("T")[0],
    total_volume: Math.round(item[1] * 100) / 100,
  }));

  return (
    <div className="flex grow h-screen m-0 sm:mb-10 min-w-min sm:mt-10 flex-col sm:ml-10 ">
      <h2 className="text-companySecondary uppercase">Price Data</h2>

      <AreaChart
        width={400}
        height={200}
        data={priceData}
        syncId="anyId"
        margin={{
          top: 10,
          right: 20,
          left: 0,
          bottom: 0,
        }}
      >
        <Tooltip content={<CustomTooltip />} position={{ x: 120, y: 1 }} />
        <XAxis dataKey="x" />
        <YAxis hide domain={["dataMin - 100", "dataMax + 100"]}>
          <Label
            value={"price"}
            angle={-90}
            position="outside"
            fill="#676767"
            fontSize={14}
          />
        </YAxis>

        <Area type="monotone" dataKey="price" stroke="#B47382" fill="#B47382" />
      </AreaChart>

      <h2 className="uppercase text-companySecondary">Market Cap Data</h2>

      <AreaChart
        width={400}
        height={200}
        data={marketCapData}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <XAxis dataKey="x" />
        <YAxis hide domain={["dataMin - 100", "dataMax + 100"]} />
        <Tooltip content={<CustomTooltip />} position={{ x: 120, y: 1 }} />
        <Area
          type="monotone"
          dataKey="market_cap"
          stroke="#B47382"
          fill="#B47382"
        />
      </AreaChart>

      <h2 className="uppercase text-companySecondary ">24h volume</h2>

      <AreaChart
        width={400}
        height={200}
        data={totalVolumesData}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <XAxis dataKey="x" />
        <YAxis hide domain={["dataMin - 100", "dataMax + 100"]} />
        <Tooltip
          content={<CustomTooltipVolume />}
          position={{ x: 120, y: 1 }}
        />
        <Area
          type="monotone"
          dataKey="total_volume"
          stroke="#B47382"
          fill="#B47382"
        />
      </AreaChart>
    </div>
  );
};

export default MarketDataChart;

export const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-companySecondary rounded-lg p-2 text-sm">
        <p className="label">{`Date : ${label} `}</p>
        <p className="price">{`Price: ${formatDollar(payload[0].value)}`}</p>
      </div>
    );
  }
};

export const CustomTooltipVolume = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-companySecondary  rounded-lg p-2 text-sm">
        <p className="label">{`Date : ${label} `}</p>
        <p className="Volume">{`Volume 24h: ${formatDollar(
          payload[0].value
        )}`}</p>
      </div>
    );
  }
};
