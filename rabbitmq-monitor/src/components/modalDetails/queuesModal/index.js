import Modal from "react-bootstrap/Modal";
import MyModal from "../../../elements/modal/MyModal";

const QueuesModal = (props) => {
  return (
    <MyModal show={props.show} setShow={props.setShow} typeModal={props.typeModal}>
      <Modal.Body>
        
      </Modal.Body>
    </MyModal>
  );
}

export default QueuesModal;