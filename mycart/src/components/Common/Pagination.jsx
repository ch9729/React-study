import "./Pagination.css";
// 전체 아이템 개수, 한페이지표시아이템수, 클릭함수, 현재페이지
const Pagination = ({ total, perPage, onClick, currentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    // 페이지 수만큼 배열에 숫자를 입력
    pages.push(i);

    // 현재 페이지가 없을 경우 첫페이지는 1이다.
    currentPage = currentPage ? currentPage : 1;
  }
  return (
    <>
      {pages.length > 1 && (
        <ul className="pagination">
          {pages.map((page) => (
            <li key={page}>
              <button
                className={
                  parseInt(currentPage) === page
                    ? "pagination_button active"
                    : "pagination_button"
                }
                onClick={() => onClick(page)}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Pagination;
