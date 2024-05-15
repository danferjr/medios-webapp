import { Box } from "@mui/system";
import { useState, useEffect, useRef } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Brush,
} from "recharts";

let targetUrl = "ws://" + window.location.hostname + "/ws";

export default function SensorLineChart(props) {
  const [data, setData] = useState([]);
  const [isPaused, setPause] = useState(false);
  const ws = useRef(null);

  //   const addData = (value) => {
  //     let newData = {light: value };
  //     setData(data => [...data, newData]);
  //   };

  const getTime = () => {
    function addZero(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }

    const d = new Date();
    let h = addZero(d.getHours());
    let m = addZero(d.getMinutes());
    let s = addZero(d.getSeconds());
    let time = h + ":" + m + ":" + s;
    return time;
  };

  useEffect(() => {
    ws.current =
      props.url != null ? new WebSocket(props.url) : new WebSocket(targetUrl);
    ws.current.onopen = () => console.log("ws opened");
    ws.current.onclose = () => console.log("ws closed");
    setData([{ time: getTime(), sensor: "sensor", value: 0 }]);
    const wsCurrent = ws.current;

    return () => {
      wsCurrent.close();
    };
  }, []);

  useEffect(() => {
    if (!ws.current) return;

    ws.current.onmessage = (e) => {
      if (isPaused) return;
      //addData(e.data);
      const obj = JSON.parse(e.data);
      let newData = { time: getTime(), sensor: obj.sensor, value: obj.value };
      setData((data) => [...data, newData]);
    };
  }, [isPaused]);

  useEffect(() => {
    if (data.length > 15) {
      let tmpData = [...data];
      tmpData.shift();
      setData(tmpData);
    }
    //console.log(data.length);
  }, [data]);

  return (
    <Box>
      <div>
        <button onClick={() => setPause(!isPaused)}>
          {isPaused ? "Resume" : "Pause"}
        </button>
      </div>
      <ResponsiveContainer width="100%" aspect={1.5}>
        <LineChart
          width="100%"
          data={data}
          margin={{ right: 0, left: 0, top: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" height={60} padding={{ left: 15, right: 15 }} />
          <YAxis
            padding={{ top: 15, bottom: 15 }}
            type="number"
            domain={[0, "auto"]}
            allowDataOverflow={false}
          />
          <Tooltip />
          <Legend />
          <Brush></Brush>
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}
