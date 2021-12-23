import { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { getAPI } from "../../../api";
import { OverviewChannel } from "../../../elements/modal/modalDetail";
import Consumer from "../../../elements/modal/modalDetail/Consumer";
import MyModal from "../../../elements/modal/MyModal";

const ChannelsModal = (props) => {

  const [data, setData] = useState([]);
  const [showMore, setShowMore] = useState('overview');

  const channelName = props.channelName.replaceAll(':', '%3A').replaceAll(' -> ', '%20-%3E%20');
  
  const getData = async () => {
    const data = await getAPI(`/channels/${channelName}`);
    setData(data);
  }

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MyModal show={props.show} setShow={props.setShow} typeModal={props.typeModal} getData={getData}>
      <Modal.Body>
        <OverviewChannel data={data} showMore={showMore} setShowMore={setShowMore} />       
        <Consumer data={data} showMore={showMore} setShowMore={setShowMore} />
      </Modal.Body>
    </MyModal>
  );
}

export default ChannelsModal;