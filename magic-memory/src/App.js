import { useEffect, useState } from "react";
import SingleCard from "./components/SingleCard";
import "./App.css";

// public 폴더 내에 있는 이미지 파일 경로를 배열로 저장
const cardImages = [
  { src: "/img/helmet-1.png", matched: false },
  { src: "/img/potion-1.png", matched: false },
  { src: "/img/ring-1.png", matched: false },
  { src: "/img/scroll-1.png", matched: false },
  { src: "/img/shield-1.png", matched: false },
  { src: "/img/sword-1.png", matched: false },
];

// 리액트 앱 컴포넌트
function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0); // 턴수
  const [choiceOne, setChoiceOne] = useState(null); // 첫 번째 선택 카드
  const [choiceTwo, setChoiceTwo] = useState(null); // 두 번째 선택 카드
  const [disabled, setDisabled] = useState(false);
  // 새 게임 시작(카드 섞기)
  const shuffleCards = () => {
    // ...은 카드배열의 모든 요소를 새 배열에 복사
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setTurns(0);
  };
  // console.log(cards, turns);

  const handleChoice = (card) => {
    // 카드 선택(이미 첫번째 선택했으면 두번째에 저장)
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // 카드 선택 후 비교(두 카드가 같은지 확인), [카드선택이 변경 시]
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src && choiceOne.id !== choiceTwo.id) {
        setCards((prev) => {
          return prev.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // 첫게임 자동 실행
  useEffect(() => {
    shuffleCards();
  }, []);

  // 선택한 카드들 리셋
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(turns + 1);
    setDisabled(false);
  };

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <SingleCard
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          </div>
        ))}
      </div>
      <div>턴수 : {turns}</div>
    </div>
  );
}

export default App;
