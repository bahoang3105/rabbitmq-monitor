import Chart from "../../chart/Chart";
import { Line, Tooltip, XAxis, YAxis } from "recharts";
import { useEffect, useState } from "react";
import ListSelection from "./ListSelection";
import "./messageQueued.css";

const MessageQueued = ({ data, time, formatTime, ...props }) => {

  const [ready, setReady] = useState(true);
  const [unacked, setUnacked] = useState(true);
  const [total, setTotal] = useState(true);
  const [countMessages, setCountMessages] = useState({
    ready: 0,
    unacked: 0,
    total: 0
  });

  const [messageStats, setMessageStats] = useState([
    { name: '', ready: 0, unacked: 0, total: 0 },
    { name: '', ready: 0, unacked: 0, total: 0 },
    { name: '', ready: 0, unacked: 0, total: 0 },
    { name: '', ready: 0, unacked: 0, total: 0 },
    { name: '', ready: 0, unacked: 0, total: 0 },
    { name: '', ready: 0, unacked: 0, total: 0 },
    { name: '', ready: 0, unacked: 0, total: 0 },
    { name: '', ready: 0, unacked: 0, total: 0 },
    { name: '', ready: 0, unacked: 0, total: 0 },
    { name: '', ready: 0, unacked: 0, total: 0 },
    { name: '', ready: 0, unacked: 0, total: 0 },
    { name: '', ready: 0, unacked: 0, total: 0 }
  ]);

  useEffect(() => {
    if(data) {
      const date = new Date();
      const time = date.getSeconds() % 5 < 2 ? `${formatTime(date.getHours())}:${formatTime(date.getMinutes())}:${formatTime(date.getSeconds())}` : '';
      const { queue_totals } = data;
      const { messages, messages_details, messages_ready, messages_ready_details, messages_unacknowledged, messages_unacknowledged_details } = queue_totals;
      setMessageStats(messageStats => [
        ...messageStats.slice(1),
        {
          name: time,
          ready: messages_ready_details.rate,
          unacked: messages_unacknowledged_details.rate,
          total: messages_details.rate,
        }
      ]);
      setCountMessages({
        ready: messages_ready,
        unacked: messages_unacknowledged,
        total: messages
      });
    }
  }, [data, formatTime]);

  return (
    <div className='chart'>
      <div className='chart-header'>
        <div className='chart-title'>
          Queued Message
        </div>
      </div>
      <Chart data={messageStats} width={props.width * 35 / 100 - 60} height={props.height * 70 / 100 - 200}>
        <XAxis dataKey="name" />
        <YAxis label={{ value: '(message/s)', angle: -90, position: 'insideLeft', dx: 5, style: {textAnchor: 'middle'} }}/>
        <Tooltip />
        {ready && <Line type="monotone" dataKey="ready" stroke="#d34b4e" fontSize='10' isAnimationActive={false}/>}
        {unacked && <Line type="monotone" dataKey="unacked" stroke="#3ea753" fontSize='10' isAnimationActive={false}/>}
        {total && <Line type="monotone" dataKey="total" stroke="#e7a55c" fontSize='10' isAnimationActive={false}/>}
      </Chart>
      <ListSelection
        width={props.width * 20 / 100 - 10}
        ready={ready}
        setReady={setReady}
        unacked={unacked}
        setUnacked={setUnacked}
        total={total}
        setTotal={setTotal}
        countMessages={countMessages}
      />
    </div>
  );
}

export default MessageQueued;