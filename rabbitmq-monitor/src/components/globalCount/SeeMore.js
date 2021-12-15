const SeeMore = (props) => {
  return (
    <div className="see-more" onClick={() => props.openModal(props.typeModal)}>
      See More
    </div>
  );
}

export default SeeMore;