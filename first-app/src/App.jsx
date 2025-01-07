import { useState, useEffect } from "react";
import "./App.css";
import OurHeader from "./components/OurHeader";
import Footer from "./components/Footer";
import TimeArea from "./components/TimeArea";
import Pet from "./components/Pet";
import LikeArea from "./components/LikeArea";
import AddPetForm from "./components/AddPetForm";

function App() {
  const [pets, setPets] = useState([]);
  const [time, setTime] = useState(new Date().toLocaleString());
  const [likeCount, setLikeCount] = useState(0);
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [age, setAge] = useState("");

  setTimeout(() => {
    setTime(new Date().toLocaleString());
  }, 1000);

  const increaseLike = () => {
    setLikeCount((prev) => prev + 1);
  };

  const decreaseLike = () => {
    if (likeCount > 0) {
      setLikeCount((prev) => prev - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPets((prev) =>
      prev.concat({ name: name, species: species, age: age, id: new Date() })
    );
    setName("");
    setSpecies("");
    setAge("");
  };

  useEffect(() => {
    if (localStorage.getItem("PetData")) {
      setPets(JSON.parse(localStorage.getItem("PetData")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("PetData", JSON.stringify(pets));
  }, [pets]);

  return (
    <>
      <OurHeader />
      <LikeArea
        likeCount={likeCount}
        increaseLike={increaseLike}
        decreaseLike={decreaseLike}
      />
      <TimeArea time={time} />
      <AddPetForm
        handleSubmit={handleSubmit}
        name={name}
        species={species}
        age={age}
        setName={setName}
        setSpecies={setSpecies}
        setAge={setAge}
      />
      <ul>
        {pets.map((pet) => {
          return (
            <Pet
              name={pet.name}
              species={pet.species}
              age={pet.age}
              key={pet.id}
              setPets={setPets}
              id={pet.id}
            />
          );
        })}
      </ul>
      <Footer cr="부산IT교육센터" />
    </>
  );
}

export default App;
