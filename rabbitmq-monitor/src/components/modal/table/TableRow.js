const TableRow = (props) => {
  return (
    <>
      {(props.data.length > 0 || props.name) && <tr style={props.style}>
        {props.name && <th>{props.name}</th>}
        {props.data.length > 0 && props.data.map((td, index) => (
          <td 
            key={index} 
            colSpan={td.colSpan ? td.colSpan : 1}
            style={{ height: '3vh' }}
          >
            {td.value ? td.value : td}
          </td>
        ))}
      </tr>}
    </>
  );
}

export default TableRow;