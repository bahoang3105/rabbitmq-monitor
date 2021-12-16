const Table = (props) => {
  return (
    <table style={{ textAlign: 'center', width: props.width, height: props.height, maxHeight: props.maxHeight, marginLeft: props.marginLeft }}>
      <tbody>
        {props.children}
      </tbody>
    </table>
  );
}

export default Table;