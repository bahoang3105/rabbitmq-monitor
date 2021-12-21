/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { getAPI } from "../../../api";
import { Bindings, Delete, Overview, PublishMessage } from "../../../elements/modal/modalDetail";
import MyModal from "../../../elements/modal/MyModal";

const QueuesModal = (props) => {
  const [data, setData] = useState();

  const getData = async () => {
    const data = await getAPI('/queues/%2F/' + props.queueName);
    setData(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <MyModal show={props.show} setShow={props.setShow} typeModal={props.typeModal} getData={getData}>
      <Modal.Body>
        <Overview data={data} />
        <Bindings type='queue' name={props.queueName} />
        <PublishMessage type='queue' name={props.queueName}/>
        <Delete type='queue' name={props.queueName} setShow={props.setShow} />
      </Modal.Body>
    </MyModal>
  );
}

export default QueuesModal;