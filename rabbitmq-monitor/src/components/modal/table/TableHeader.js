const TableHeader = (props) => {
  return (
    <tr>
      {props.data.map((th, index) => (<th key={index}>{th.value}</th>))}
    </tr>
  );
}

export default TableHeader;