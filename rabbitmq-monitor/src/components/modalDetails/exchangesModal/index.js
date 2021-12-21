/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { getAPI } from '../../../api';
import { Overview, Bindings, Delete, PublishMessage } from '../../../elements/modal/modalDetail/';
import MyModal from "../../../elements/modal/MyModal";

const ExchangesModal = (props) => {

  const [data, setData] = useState();

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
        <Overview  data={data} />
        <Bindings type='exchange' name={props.exchangeName} />
        <PublishMessage type='exchange' name={props.exchangeName} />
        <Delete type='exchange' name={props.exchangeName} setShow={props.setShow} />
      </Modal.Body>
    </MyModal>
  );
}

export default ExchangesModal;