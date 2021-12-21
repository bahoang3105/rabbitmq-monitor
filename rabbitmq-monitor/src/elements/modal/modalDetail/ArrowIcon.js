import { RiArrowDownSFill, RiArrowRightSFill } from "react-icons/ri";

const ArrowIcon = (props) => {
  return (
    <div style={{ fontSize: 25, marginTop: -3, marginLeft: -24, position: 'absolute' }}>{props.show ? <RiArrowDownSFill /> : <RiArrowRightSFill />}</div>
  );
}

export default ArrowIcon;