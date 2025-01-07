const Pet = ({ name, species, age, id, setPets }) => {
  const handleDelete = () => {
    setPets((prev) => prev.filter((pet) => pet.id !== id));
  };

  return (
    <li key={id}>
      {name}은 {species}이고 {age}살 이다.
      <button onClick={handleDelete}>삭제</button>
    </li>
  );
};

export default Pet;
