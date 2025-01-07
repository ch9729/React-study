const AddPetForm = ({
  handleSubmit,
  name,
  species,
  age,
  setName,
  setSpecies,
  setAge,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>새 PET 추가하기</legend>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름"
        />
        <input
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
          placeholder="종류"
        />
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="나이"
        />
        <button>펫 추가</button>
      </fieldset>
    </form>
  );
};

export default AddPetForm;
