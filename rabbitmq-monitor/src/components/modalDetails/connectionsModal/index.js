import { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { deleteAPI, getAPI } from "../../../api";
import { Close, OverviewConnection } from "../../../elements/modal/modalDetail";
import ClientProperties from "../../../elements/modal/modalDetail/ClientProperties";
import MyModal from "../../../elements/modal/MyModal";

const ConnectionsModal = (props) => {

  const [data, setData] = useState([]);
  const [showMore, setShowMore] = useState('overview');
  const [text, setText] = useState('Closed via management plugin');

  const connectionName = props.connectionName.replaceAll(':', '%3A').replaceAll(' -> ', '%20-%3E%20');
  
  const getData = async () => {
    const data = await getAPI(`/connections/${connectionName}`);
    setData(data);
  }

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const close = async () => {
    if(window.confirm('Are you sure? This object cannot be recovered after deletion.')) {
      await deleteAPI('/connections/' + connectionName);
      props.setShow(false);
      props.getData();
    }
  }

  return (
    <MyModal show={props.show} setShow={props.setShow} typeModal={props.typeModal} getData={getData}>
      <Modal.Body>
        <OverviewConnection data={data} showMore={showMore} setShowMore={setShowMore} name={connectionName} />
        <ClientProperties data={data.client_properties} showMore={showMore} setShowMore={setShowMore} name={connectionName} />
        <Close close={close} name='Reason' text={text} setText={setText} closeName='Force Close' showMore={showMore} setShowMore={setShowMore} type='connection' />
      </Modal.Body>
    </MyModal>
  );
}

export default ConnectionsModal;