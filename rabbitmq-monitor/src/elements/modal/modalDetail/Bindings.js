import { useEffect, useState } from "react";
import { getAPI } from "../../../api";
import Table from "../../table/Table";
import TableRow from "../../table/TableRow";
import ArrowIcon from './ArrowIcon';

const Bindings = (props) => {

  const [sources, setSources] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [show, setShow] = useState(false);
  const dataHeader = [
    { value: 'From' },
    { value: 'Routing key' },
    { value: 'Arguments' }, 
    { value: 'dd' }
  ];

  useEffect(() => {
    const getData = async () => {
      const getSource = getAPI('/exchanges/%2F/' + props.name +'/bindings/source');
      const getDestination = getAPI('/exchanges/%2F/' + props.name +'/bindings/destination');
      const [sources, destinations] = await Promise.all([getSource, getDestination]);
      setSources(sources);
      setDestinations(destinations);
    }
    getData();
  }, [props.name]);

  return (
    <div className="modal-detail">
      <div className="modal-detail-part" onClick={() => setShow(!show)}>
        <ArrowIcon show={show} />
        Bindings
      </div>
      <div className="modal-detail-body" style={{ height: show ? 'fit-content' : 0 }}>
        <div>
          {/* <Table>
            <TableRow data={dataHeader} />
          </Table> */}
        </div>
      </div>
    </div>
  );
}

export default Bindings;