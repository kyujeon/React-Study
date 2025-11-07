function Greeting(props) {
  return (
    <div>
      <h2>안녕하세요, {props.name}님!</h2>
      <p>오늘 기분은 어떠신가요?</p>
    </div>
  );
}

export default Greeting;
