const TableRow = (props) => {
  return (
    <>
      {(props?.data.length > 0 || props?.name) && <tr style={props.style}>
        {props?.name && <th style={{  borderBottomLeftRadius: props.last ? 15 : 0 }}>{props.name}</th>}
        {props?.data.length > 0 && props?.data.map((td, index) => (
          <td 
            key={index} 
            colSpan={td?.colSpan ? td.colSpan : 1}
            style={{ height: '3vh', borderBottomRightRadius: (props.last && index === props.data.length - 1) ? 15 : 0 }}
          >
            {td?.value ? td.value : td}
          </td>
        ))}
      </tr>}
    </>
  );
}

export default TableRow;