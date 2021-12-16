import MyModal from "../../../elements/modal/MyModal";

const ConnectionsModal = (props) => {
  return (
    <MyModal show={props.show} setShow={props.setShow} typeModal={props.typeModal}>

    </MyModal>
  );
}

export default ConnectionsModal;