const Card = (props) => {
  const handleResponseSelection = (event) => {};

  return (
    <div>
      <h2>Question {props.id}</h2>
      <p>{props.question}</p>
      {props.choices.map((choice, index) => (
        <p key={index}>
          <input
            type="radio"
            required
            name={`questionGroupName${props.id}`}
            onChange={(event) => handleResponseSelection(event)}
          />{" "}
          {choice}
        </p>
      ))}
    </div>
  );
};

export default Card;
