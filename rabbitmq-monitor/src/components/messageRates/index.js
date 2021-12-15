import Chart from "../../chart/Chart";
import { Line, Tooltip, XAxis, YAxis } from "recharts";
import { useEffect, useState } from "react";
import ListSelection from "./ListSelection";
import "./messageRates.css";

const MessageRates = ({ data, formatTime, ...props }) => {

  const [publish, setPublish] = useState(true);
  const [publisherConfirm, setPublisherConfirm] = useState(false);
  const [deliverAuto, setDeliverAuto] = useState(false);
  const [deliverManual, setDeliverManual] = useState(false);
  const [unroutabelReturn, setUnroutabelReturn] = useState(false);
  const [unroutabelDrop, setUnroutabelDrop] = useState(false);
  const [consumerAck, setConsumerAck] = useState(true);

  const [messageStats, setMessageStats] = useState([
    { name: '', publish: 0, publisherConfirm: 0, deliverAuto: 0, deliverManual: 0, consumerAck: 0, unroutabelDrop: 0, unroutabelReturn: 0 },
    { name: '', publish: 0, publisherConfirm: 0, deliverAuto: 0, deliverManual: 0, consumerAck: 0, unroutabelDrop: 0, unroutabelReturn: 0 },
    { name: '', publish: 0, publisherConfirm: 0, deliverAuto: 0, deliverManual: 0, consumerAck: 0, unroutabelDrop: 0, unroutabelReturn: 0 },
    { name: '', publish: 0, publisherConfirm: 0, deliverAuto: 0, deliverManual: 0, consumerAck: 0, unroutabelDrop: 0, unroutabelReturn: 0 },
    { name: '', publish: 0, publisherConfirm: 0, deliverAuto: 0, deliverManual: 0, consumerAck: 0, unroutabelDrop: 0, unroutabelReturn: 0 },
    { name: '', publish: 0, publisherConfirm: 0, deliverAuto: 0, deliverManual: 0, consumerAck: 0, unroutabelDrop: 0, unroutabelReturn: 0 },
    { name: '', publish: 0, publisherConfirm: 0, deliverAuto: 0, deliverManual: 0, consumerAck: 0, unroutabelDrop: 0, unroutabelReturn: 0 },
    { name: '', publish: 0, publisherConfirm: 0, deliverAuto: 0, deliverManual: 0, consumerAck: 0, unroutabelDrop: 0, unroutabelReturn: 0 },
    { name: '', publish: 0, publisherConfirm: 0, deliverAuto: 0, deliverManual: 0, consumerAck: 0, unroutabelDrop: 0, unroutabelReturn: 0 },
    { name: '', publish: 0, publisherConfirm: 0, deliverAuto: 0, deliverManual: 0, consumerAck: 0, unroutabelDrop: 0, unroutabelReturn: 0 },
    { name: '', publish: 0, publisherConfirm: 0, deliverAuto: 0, deliverManual: 0, consumerAck: 0, unroutabelDrop: 0, unroutabelReturn: 0 },
    { name: '', publish: 0, publisherConfirm: 0, deliverAuto: 0, deliverManual: 0, consumerAck: 0, unroutabelDrop: 0, unroutabelReturn: 0 }
  ]);

  useEffect(() => {
    if(data) {
      const date = new Date();
      const time = date.getSeconds() % 5 < 2 ? `${formatTime(date.getHours())}:${formatTime(date.getMinutes())}:${formatTime(date.getSeconds())}` : '';
      const { message_stats } = data;
      const { 
        publish_details, 
        confirm_details,
        deliver_no_ack_details,
        deliver_details,
        ack_details,
        drop_unroutable_details, 
        return_unroutable_details
      } = message_stats;
      setMessageStats(messageStats => [
        ...messageStats.slice(1),
        {
          name: time,
          publish: publish_details.rate,
          publisherConfirm: confirm_details.rate,
          deliverAuto: deliver_no_ack_details.rate,
          deliverManual: deliver_details.rate, 
          consumerAck: ack_details.rate,
          unroutabelDrop: drop_unroutable_details.rate,
          unroutabelReturn: return_unroutable_details.rate
        }
      ]);
    }
  }, [data, formatTime]);

  return (
    <div className='chart'>
      <div className='chart-header'>
        <div className='chart-title'>
          Message Rates
        </div>
      </div>
      <Chart data={messageStats} width={props.width * 65 / 100 - 60} height={props.height * 70 / 100 - 200}>
        <XAxis dataKey="name" />
        <YAxis label={{ value: '(message/s)', angle: -90, position: 'insideLeft', dx: 5, style: {textAnchor: 'middle'} }}/>
        <Tooltip />
        {publish && <Line type="monotone" dataKey="publish" stroke="#d34b4e" fontSize='10' isAnimationActive={false}/>}
        {publisherConfirm && <Line type="monotone" dataKey="publisherConfirm" stroke="#3ea753" fontSize='10' isAnimationActive={false}/>}
        {deliverAuto && <Line type="monotone" dataKey="deliverAuto" stroke="#e7a55c" fontSize='10' isAnimationActive={false}/>}
        {deliverManual && <Line type="monotone" dataKey="deliverManual" stroke="#3c486c" fontSize='10' isAnimationActive={false}/>}
        {consumerAck && <Line type="monotone" dataKey="consumerAck" stroke="#9742e8" fontSize='10' isAnimationActive={false}/>}
        {unroutabelDrop && <Line type="monotone" dataKey="unroutabelDrop" stroke="#916768" fontSize='10' isAnimationActive={false}/>}
        {unroutabelReturn && <Line type="monotone" dataKey="unroutabelReturn" stroke="#64808d" fontSize='10' isAnimationActive={false}/>}
      </Chart>
      <ListSelection
        width={props.width * 62 / 100 - 10}
        publish={publish}
        setPublish={setPublish}
        publisherConfirm={publisherConfirm}
        setPublisherConfirm={setPublisherConfirm}
        deliverAuto={deliverAuto}
        setDeliverAuto={setDeliverAuto}
        deliverManual={deliverManual}
        setDeliverManual={setDeliverManual}
        unroutabelDrop={unroutabelDrop}
        setUnroutabelDrop={setUnroutabelDrop}
        unroutabelReturn={unroutabelReturn}
        setUnroutabelReturn={setUnroutabelReturn}
        consumerAck={consumerAck}
        setConsumerAck={setConsumerAck}
      />
    </div>
  );
}

export default MessageRates;