const SeeMore = (props) => {
  return (
    <div className={`see-more${props.typeModal === 'Consumers' ? ' inactive' : ' active'}`} onClick={() => props.openModal(props.typeModal)}>
      See More
    </div>
  );
}

export default SeeMore;