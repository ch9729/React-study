import { useEffect, useState } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState("flowers"); //검색어
  const apiKey = process.env.REACT_APP_PIXABAY_API_KEY;
  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${apiKey}&q=${term}&image_type=photo`)
      .then((res) => res.json()) //요청결과를 JS로 변환
      .then((data) => setImages(data.hits)) //데이터 출력
      .catch((err) => console.log(err)); //에러발생시 에러출력
  }, [term]);
  return (
    <div className="container mx-auto my-7">
      <ImageSearch setTerm={setTerm} />
      {images.length === 0 && (
        <h1 className="text-5xl text-center mt-32">이미지가 없습니다.</h1>
      )}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}

export default App;
