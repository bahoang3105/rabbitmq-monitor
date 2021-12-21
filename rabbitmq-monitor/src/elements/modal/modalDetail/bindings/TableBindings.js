import Table from "../../../table/Table";
import TableRow from "../../../table/TableRow";

const TableBindings = (props) => {

  const dataHeader = [
    { value: props.type },
    { value: 'Routing key' },
    { value: 'Arguments' }, 
    { value: 'Actions' }
  ];
  
  const data = props.data.map(exchange => [
    { value: props.type === 'From' ? exchange.source : exchange.destination },
    { value: exchange.routing_key === "" ? " " : exchange.routing_key },
    { value: JSON.stringify(exchange.arguments) },
    { value: 'Unbind' }
  ]);

  const renderTableRow = (data) => {
    return data.map((row, index) => <TableRow data={row} key={index} />)
  }

  return (
    <div style={{ margin: 10 }}>
      {props.data.length > 0 ?
        <Table width='100%' height='auto'>
          <TableRow data={dataHeader} />
          {renderTableRow(data)}
        </Table> :
        <div>no bindings...</div>  
      }
    </div>
  );
}

export default TableBindings;