import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { getAPI } from '../../../api';
import { OverviewExchange, Bindings, Delete, PublishMessage } from '../../../elements/modal/modalDetail/';
import MyModal from "../../../elements/modal/MyModal";

const ExchangesModal = (props) => {

  const [data, setData] = useState([]);
  const [showMore, setShowMore] = useState('overview');

  const getData = async () => {
    const data = await getAPI(`/exchanges/%2F/${props.exchangeName === '(AMQP default)' ? 'amq.default' : props.exchangeName}`);
    setData(data);
  }

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MyModal show={props.show} setShow={props.setShow} typeModal={props.typeModal} getData={getData}>
      <Modal.Body>
        <OverviewExchange  data={data} showMore={showMore} setShowMore={setShowMore} name={props.exchangeName} />
        <Bindings type='exchange' name={props.exchangeName} showMore={showMore} setShowMore={setShowMore} />
        <PublishMessage type='exchange' name={props.exchangeName} showMore={showMore} setShowMore={setShowMore} />
        <Delete type='exchange' name={props.exchangeName} setShow={props.setShow} showMore={showMore} setShowMore={setShowMore} />
      </Modal.Body>
    </MyModal>
  );
}

export default ExchangesModal;