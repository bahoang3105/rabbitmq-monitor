import { useEffect, useState } from "react";
import FormAdd from "../../elements/formAdd";
import ModalGlobalCount from "../../elements/modal/ModalGlobalCount";
import Table from "../../elements/table/Table";
import ExchangesModal from "../modalDetails/channelsModal";
import SeeMore from "./SeeMore";

const GlobalCount = (props) => {

  const [data, setData] = useState({
    connections: 0,
    channels: 0,
    exchanges: 0,
    queues: 0,
    consumers: 0
  });
  const [showedModal, setShowedModal] = useState();

  const dataHeaderConnections = [
    [
      { value: 'Overview', colSpan: 3 },
      { value: 'Details', colSpan: 3 },
      { value: 'Network', colSpan: 2 } 
    ], [
      { value: 'Name' },
      { value: 'User name' },
      { value: 'State' },
      { value: 'SSL/TLS' },
      { value: 'Protocol' },
      { value: 'Channels' },
      { value: 'From client' },
      { value: 'To client' }
    ]
  ];

  const dataHeaderChannels = [
    [
      { value: 'Overview', colSpan: 4 },
      { value: 'Details', colSpan: 3 },
      { value: 'Message rates', colSpan: 5 } 
    ], [
      { value: 'Channel' },
      { value: 'User name' },
      { value: 'Mode' },
      { value: 'State' },
      { value: 'Unconfirmed' },
      { value: 'prefetch' },
      { value: 'Unacked' },
      { value: 'publish' },
      { value: 'confirm' },
      { value: 'unroutable (drop)' },
      { value: 'unroutable (return)' }
    ]
  ];

  const dataHeaderExchanges = [
    [], [
      { value: 'Name' },
      { value: 'Type' },
      { value: 'Features' },
      { value: 'Message rate in' },
      { value: 'Message rate out' },
    ]
  ];

  const dataHeaderQueues = [
    [
      { value: 'Overview', colSpan: 4 },
      { value: 'Messages', colSpan: 3 },
      { value: 'Message rates', colSpan: 3 } 
    ], [
      { value: 'Name' },
      { value: 'Type' },
      { value: 'Features' },
      { value: 'State' },
      { value: 'Ready' },
      { value: 'Unacked' },
      { value: 'Total' },
      { value: 'imcoming' },
      { value: 'deliver/get' },
      { value: 'ack' },
    ]
  ];

  useEffect(() => {
    if(props.data) {
      setData(props.data.object_totals);
    }
  }, [props.data]);

  return (
    <div className='chart' style={{ width: props.width * 98 / 100 }}>
      <div className='chart-header' style={{ marginBottom: 22 }}>
        <div className='chart-title' style={{ marginTop: 50 }}>
          Global Count
        </div>
      </div>
      <Table width={props.width * 70 / 100} height={props.height * 30 / 100 - 180} marginLeft={props.width * 14 /100}>
        <tr>
          <th>Name</th>
          <td>Connections</td>
          <td>Channels</td>
          <td>Exchanges</td>
          <td>Queues</td>
          <td>Consumers</td>
        </tr>
        <tr style={{ backgroundColor: 'rgb(223, 223, 223)' }}>
          <th>Quantity</th>
          <td>{data.connections}</td>
          <td>{data.channels}</td>
          <td>{data.exchanges}</td>
          <td>{data.queues}</td>
          <td>{data.consumers}</td>
        </tr>
        <tr style={{ height: '40%' }}>
          <td></td>
          <td><SeeMore openModal={setShowedModal} typeModal='Connections' /></td>
          <td><SeeMore openModal={setShowedModal} typeModal='Channels' /></td>
          <td><SeeMore openModal={setShowedModal} typeModal='Exchanges' /></td>
          <td><SeeMore openModal={setShowedModal} typeModal='Queues' /></td>
          <td><SeeMore openModal={setShowedModal} typeModal='Consumers' /></td>
        </tr>
      </Table>
      <>
        <ModalGlobalCount show={showedModal === 'Connections'} setShow={setShowedModal} typeModal='Connections' count={data.connections} dataHeader={dataHeaderConnections} />
        <ModalGlobalCount show={showedModal === 'Channels'} setShow={setShowedModal} typeModal='Channels' count={data.channels} dataHeader={dataHeaderChannels} />
        <ModalGlobalCount show={showedModal === 'Exchanges'} setShow={setShowedModal} typeModal='Exchanges' count={data.exchanges} dataHeader={dataHeaderExchanges}>
          <FormAdd typeAdd='exchange' type={['direct', 'fanout', 'headers', 'topic']} />
        </ModalGlobalCount>
        <ModalGlobalCount show={showedModal === 'Queues'} setShow={setShowedModal} typeModal='Queues' count={data.queues} dataHeader={dataHeaderQueues}>
          <FormAdd typeAdd='queue' type={['Classic', 'Quorum', 'Stream']} />
        </ModalGlobalCount>
      </>
      <>
        <ExchangesModal show={showedModal ? showedModal.split(' ')[0] === 'Exchange:' : false} setShow={setShowedModal} typeModal={showedModal} />
      </>
    </div>
  );
}

export default GlobalCount;