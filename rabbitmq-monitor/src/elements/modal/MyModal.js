import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FiRefreshCw } from 'react-icons/fi';

const MyModal = (props) => {

  const [refreshState, setRefreshState] = useState('');
  const [refreshIcon, setRefreshIcon] = useState('');

  const refresh = async () => {
    // do not allow continuous refreshing
    if(refreshIcon !== ' refreshing') {
      setRefreshState(' refreshing');
      setRefreshIcon(' refreshing');
      setTimeout(() => {
        setRefreshState('');
      }, 10);
      setTimeout(() => {
        setRefreshIcon('');
      }, 2000);
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
          <FiRefreshCw className={`refresh${refreshIcon}`} title='Refresh' onClick={refresh}/>
          <span className='x-close' onClick={() => props.setShow(false)}>x</span>
          <Modal.Title>
            {props.typeModal}
          </Modal.Title>
        </Modal.Header>
        {refreshState === '' && props.children}
      </div>
    </Modal>
  );
}

export default MyModal;