import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import Page from './Page';

const PagePagination = ({ itemPerPage, totalItem, page, setPage, ...props }) => {
  const numPage = Math.ceil(totalItem / itemPerPage);

  const renderPagePagination = () => {
    const renderList = [];
    const start = page - 2 <= 0 ? 1 : (numPage <= 5 ? 1 : (page + 2 > numPage ? numPage - 4 : page - 2));
    const end = page + 2 >= numPage ? numPage : (numPage <= 5 ? numPage : (page - 2 <= 0 ? 5 : page + 2));
    for(let i = start; i <= end; i++) {
      renderList.push(<Page key={i} state={i === page ? 'selected' : 'active' } pageDestination={i} setPage={setPage}>{i}</Page>);
    }
    return renderList;
  }
  
  return (
    <div className='page-pagination'>
      <Page state={page === 1 ? 'inactive': 'active'} setPage={setPage} pageDestination={1}>
        <AiOutlineDoubleLeft style={{ marginTop: 1 }} />
      </Page>
      {renderPagePagination()}
      <Page state={page === numPage ? 'inactive' : 'active'} setPage={setPage} pageDestination={numPage}>
        <AiOutlineDoubleRight style={{ marginTop: 1 }} />
      </Page>
    </div>
  );
}

export default PagePagination;