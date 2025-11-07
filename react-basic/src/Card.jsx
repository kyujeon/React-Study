function Card({ title, contents }) {
  const cardStyle = {
    border: "1px solid",
    borderRadius: "5px",
    padding: "15px",
    width: "300px",
    margin: "10px",
  };

  return (
    <div style={cardStyle}>
      <h3> {title} </h3>
      <p> {contents} </p>
    </div>
  );
}

export default Card;
