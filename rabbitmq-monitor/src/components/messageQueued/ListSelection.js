import Selection from "../Selection";
import CountMessages from "./CountMessages";

const ListSelection = (props) => {
  return (
    <div 
      className='list-selection-message-queued' 
      style={{ 
        width: props.width,
        marginTop: 40,
        marginLeft: '24%',
      }}
    >
      <Selection value={props.ready} onChange={props.setReady} id='ready' />
      <Selection value={props.unacked} onChange={props.setUnacked} id='unacked' />
      <Selection value={props.total} onChange={props.setTotal} id='total' />
      <CountMessages data={props.countMessages} />
    </div>
  );
}

export default ListSelection;