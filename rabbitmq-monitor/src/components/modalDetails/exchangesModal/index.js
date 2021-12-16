import MyModal from "../../../elements/modal/MyModal";

const ExchangesModal = (props) => {
  return (
    <MyModal show={props.show} setShow={props.setShow} typeModal={props.typeModal}>

    </MyModal>
  );
}

export default ExchangesModal;