const LikeArea = ({ likeCount, increaseLike, decreaseLike }) => {
  return (
    <div>
      <button onClick={increaseLike}>추천하기</button>
      <button onClick={decreaseLike}>비추하기</button>
      <h1>이 페이지를 {likeCount}번 추천 했습니다.</h1>
    </div>
  );
};

export default LikeArea;
