import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Brush,
} from "recharts";

export default function LineGraph(props) {
  const [data, setData] = useState([]);

  useEffect(()=>{
    setData(props.data)
  }, [props])

  return (
    <>
      <LineChart
        syncId="anyId"
        width={500}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="light" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />  
        <Brush />
      </LineChart>
    </>
  );
}
