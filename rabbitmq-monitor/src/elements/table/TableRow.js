const TableRow = (props) => {

  const changeModalDetail = () => {
    props.setShow(props.typeModal.substring(0, props.typeModal.length - 1) + ': ' + props.name);
  }

  return (
    <>
      {(props?.data.length > 0 || props?.name) && <tr style={{ ...props.style, borderBottomRightRadius: (props.last) ? 15 : 0, borderBottomLeftRadius: props.last ? 15 : 0 }} >
        {props?.name && 
          <th style={{  borderBottomLeftRadius: props.last ? 15 : 0 }}>
            <label className="name-row-more-info" onClick={changeModalDetail}>
              {props.name}
            </label>
          </th>
        }
        {props?.data.length > 0 && props?.data.map((td, index) => (
          <td 
            key={index} 
            colSpan={td?.colSpan ? td.colSpan : 1}
            style={{ height: '3vh', borderBottomRightRadius: (props.last && index === props.data.length - 1) ? 15 : 0, borderBottomLeftRadius: (props.last && !props.name && index === 0) ? 15 : 0 }}
          >
            {td?.value ? td.value : td}
          </td>
        ))}
      </tr>}
    </>
  );
}

export default TableRow;