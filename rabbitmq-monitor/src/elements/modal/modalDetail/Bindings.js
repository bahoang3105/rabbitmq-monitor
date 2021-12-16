import { useEffect, useState } from "react";
import { getAPI } from "../../../api";

const Bindings = (props) => {

  const [sources, setSources] = useState([]);
  const [destinations, setDestinations] = useState([]);

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
    <div></div>
  );
}

export default Bindings;