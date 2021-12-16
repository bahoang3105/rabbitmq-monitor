import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FiRefreshCw } from 'react-icons/fi';

const MyModal = (props) => {

  const [refreshState, setRefreshState] = useState('');

  const refresh = async () => {
    // do not allow continuous refreshing
    if(refreshState !== ' refreshing') {
      setRefreshState(' refreshing');
      setTimeout(() => {
        setRefreshState('');
      }, 2000);
      await props.getData();
    }
  }

  return (
    <Modal
      show={props.show}
      onHide={() => props.setShow(false)}
      backdrop={true}
      className='modal'
    >
      <div className='border-modal'>
        <Modal.Header>
          <FiRefreshCw className={`refresh${refreshState}`} title='Refresh' onClick={refresh}/>
          <span className='x-close' onClick={() => props.setShow(false)}>x</span>
          <Modal.Title>
            {props.typeModal}
          </Modal.Title>
        </Modal.Header>
        {props.children}
      </div>
    </Modal>
  );
}

export default MyModal;