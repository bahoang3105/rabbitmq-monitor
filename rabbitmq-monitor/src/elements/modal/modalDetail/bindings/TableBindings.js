import Table from "../../../table/Table";
import TableRow from "../../../table/TableRow";
import { deleteAPI } from "../../../../api";

const TableBindings = (props) => {

  const dataHeader = [
    { value: props.type },
    { value: 'Routing key' },
    { value: 'Arguments' }, 
    { value: 'Actions' }
  ];

  const unbind = async (type, exchange) => {
    await deleteAPI(`/bindings/%2F/e/${type === 'From' ? exchange : props.name}/${props.isQueue ? 'q' : 'e'}/${type === 'From' ? props.name : exchange}/~`);
    await props.getData();
  }
  
  const data = props.data.map(exchange => [
    { value: props.type === 'From' ? exchange.source + " " : exchange.destination + " " },
    { value: exchange.routing_key === "" ? " " : exchange.routing_key },
    { value: JSON.stringify(exchange.arguments) },
    { value: <span className="unbind-button" onClick={() => unbind(props.type, props.type === 'From' ? exchange.source : exchange.destination)}>Unbind</span> }
  ]);

  const renderTableRow = (data) => {
    return data.map((row, index) => <TableRow data={row} key={index} style={{ backgroundColor: index % 2 ? '' : '#d6d6d6' }} last={index === data.length - 1} />)
  }


  return (
    <>
      {props.data.length > 0 ?
        <Table width='100%' height='auto' marginLeft={1}>
          <TableRow data={dataHeader} />
          {renderTableRow(data)}
        </Table> :
        <div style={{ margin: 'auto' }}>no bindings...</div>  
      }
    </>
  );
}

export default TableBindings;