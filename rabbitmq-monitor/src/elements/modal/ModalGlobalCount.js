import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import PagePagination from './pagePagination';
import axios from 'axios';
import { API_URL } from '../../URL';
import { PASSWORD, USERNAME } from '../../Auth';
import './modal.css';
import Table from '../table/Table';
import TableHeader from '../table/TableHeader';
import TableRow from '../table/TableRow';
import MyModal from './MyModal';

const ModalGlobalCount = (props) => {

  const itemPerPage = 5;
  const [page, setPage] = useState(1);
  const [data, setData] = useState();

  const getData = async () => {
    const { data } = await axios.get(`${API_URL}/${props.typeModal.toLowerCase()}?page=${page}&page_size=${itemPerPage}&name=&use_regex=false`, {
      auth: {
        username: USERNAME,
        password: PASSWORD
      }
    });
    switch(props.typeModal) {
      case 'Connections': {
        setData(data.items.map(item => [
          `${item.peer_host}:${item.peer_port}`,
          item.user,
          item.state,
          item.ssl === false ? 'o' : item.ssl,
          item.protocol,
          item.channels,
          item.recv_oct_details.rate,
          item.send_oct_details.rate 
        ]));
        break;
      }
      case 'Channels': {
        setData(data.items.map(item => [
          `${item.connection_details.peer_host}:${item.connection_details.peer_port}`,
          item.user,
          '',
          item.state,
          item.messages_unconfirmed,
          '',
          item.messages_unacknowledged,
          item.message_stats.publish_details.rate + '/s',
          item.message_stats.confirm_details.rate + '/s',
          item.message_stats.drop_unroutable_details.rate + '/s',
          item.message_stats.return_unroutable_details.rate + '/s'
        ]));
        break;
      }
      case 'Exchanges': {
        setData(data.items.map(item => [
          item.name === "" ? '(AMQP default)' : item.name,
          item.type,
          '',
          item.message_stats ? item.message_stats.publish_in_details.rate + '/s' : '',
          item.message_stats ? item.message_stats.publish_out_details.rate + '/s' : '',
        ]));
        break;
      }
      case 'Queues': {
        setData(data.items.map(item => [
          item.name,
          item.type,
          '',
          item.state,
          item.messages_ready,
          item.messages_unacknowledged,
          item.messages,
          item.message_stats ? item.message_stats.publish_details.rate : '',
          item.message_stats ? item.message_stats.deliver_get_details.rate : '',
          item.message_stats? item.message_stats.ack_details.rate : ''
        ]));
        break;
      }
      default:
        return;
    }
  }

  useEffect(() => {
    if(props.show) {
      getData();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.show, page]);

  return (
    <MyModal show={props.show} setShow={props.setShow} getData={getData} typeModal={props.typeModal}>
      <Modal.Body>
        <div className='title-rename'>
          All {props.typeModal.toLowerCase()}({props.count})
        </div>
        <div style={{ fontSize: 15 }}>
          <Table width='50vw' maxHeight='35vh'>
            <TableRow data={props.dataHeader[0]} />
            <TableHeader data={props.dataHeader[1]} />
            {data && data.map((item, index) => (<TableRow key={index} name={item[0]} typeModal={props.typeModal} data={item.slice(1)} setShow={props.setShow} style={{ backgroundColor: index % 2 ? '' : '#d6d6d6' }} last={index === data.length - 1} />))}
          </Table>
        </div>
        {props.children}
      </Modal.Body>
      <Modal.Footer>
        <PagePagination itemPerPage={itemPerPage} totalItem={props.count} page={page} setPage={setPage} />
      </Modal.Footer>
    </MyModal>
  );
}

export default ModalGlobalCount;