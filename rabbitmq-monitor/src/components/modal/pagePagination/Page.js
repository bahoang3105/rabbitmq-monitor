const Page = (props) => {
  return (
    <div className={`page-pagination-item ${props.state}`} onClick={() => props.setPage(props.pageDestination)}>
      {props.children}
    </div>
  );
}

export default Page;