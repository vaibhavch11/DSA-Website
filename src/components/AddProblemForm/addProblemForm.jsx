

const AddProblemForm = ({topicName, setTopicName,problemName, setProblemName,difficulty, setDifficulty,companies, setCompanies,isClassical, setIsClassical}) => {


  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    if (name === 'topicName') {
      setTopicName(value);
    } else if (name === 'problemName') {
      setProblemName(value);
    } else if (name === 'difficulty') {
      setDifficulty(value);
    } else if (name === 'companies') {
      setCompanies(value);
    } else if (name === 'isClassical') {
      setIsClassical(value);
    }
  };



  return (
    <form >
      <label>
        Topic Name:
        <input
          name="topicName"
          type="text"
          value={topicName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Problem Name:
        <input
          name="problemName"
          type="text"
          value={problemName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Difficulty:
        <input
          name="difficulty"
          type="text"
          value={difficulty}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Companies:
        <input
          name="companies"
          type="text"
          value={companies}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Is Classical:
        <input
          name="isClassical"
          type="checkbox"
          checked={isClassical}
          onChange={handleChange}
        />
      </label>
      <br />
      
    </form>
  );
};

export default AddProblemForm
