import { RiArrowUpSFill, RiArrowDownSFill } from 'react-icons/ri';

const Title = ({ setDisplayFormAdd, displayFormAdd, ...props }) => {
  return (
    <div className="form-add-title" onClick={() => setDisplayFormAdd(!displayFormAdd)}>
      Add a new {props.typeAdd}
      <div style={{ fontSize: 19, marginTop: 1 }}>{displayFormAdd ? <RiArrowUpSFill /> : <RiArrowDownSFill />}</div>
    </div>
  );
}

export default Title;