function Button({ text, color }) {
  const buttonStyle = {
    backgroundColor: color,
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    margin: "5px",
    cursor: "pointer",
  };

  return <button style={buttonStyle}>{text}</button>;
}

export default Button;
