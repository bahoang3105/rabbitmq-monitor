/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { getAPI } from '../../../api';
import { Overview, Bindings, Delete, PublishMessage } from '../../../elements/modal/modalDetail/';
import MyModal from "../../../elements/modal/MyModal";

const ExchangesModal = (props) => {

  const [data, setData] = useState();
  const [showMore, setShowMore] = useState('overview');

  const getData = async () => {
    const data = await getAPI('/exchanges/%2F/' + props.exchangeName);
    setData(data);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <MyModal show={props.show} setShow={props.setShow} typeModal={props.typeModal} getData={getData}>
      <Modal.Body>
        <Overview  data={data} showMore={showMore} setShowMore={setShowMore} />
        <Bindings type='exchange' name={props.exchangeName} showMore={showMore} setShowMore={setShowMore} />
        <PublishMessage type='exchange' name={props.exchangeName} showMore={showMore} setShowMore={setShowMore} />
        <Delete type='exchange' name={props.exchangeName} setShow={props.setShow} showMore={showMore} setShowMore={setShowMore} />
      </Modal.Body>
    </MyModal>
  );
}

export default ExchangesModal;