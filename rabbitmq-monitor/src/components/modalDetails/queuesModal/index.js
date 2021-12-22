/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { getAPI } from "../../../api";
import { Bindings, Delete, Overview, PublishMessage } from "../../../elements/modal/modalDetail";
import MyModal from "../../../elements/modal/MyModal";

const QueuesModal = (props) => {
  const [data, setData] = useState();
  const [showMore, setShowMore] = useState('overview');

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
        <Overview data={data} showMore={showMore} setShowMore={setShowMore} />
        <Bindings type='queue' name={props.queueName} showMore={showMore} setShowMore={setShowMore} />
        <PublishMessage type='queue' name={props.queueName} showMore={showMore} setShowMore={setShowMore} />
        <Delete type='queue' name={props.queueName} setShow={props.setShow} showMore={showMore} setShowMore={setShowMore} />
      </Modal.Body>
    </MyModal>
  );
}

export default QueuesModal;