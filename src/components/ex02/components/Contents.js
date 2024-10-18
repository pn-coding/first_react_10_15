const Contents = ({ text, bgColor }) => {
  // console.log(props);
  // const text = props.text;
  // const color = props.bgColor;
  // const { text, bgColor } = props;
  // =>비구조화 할당

  return (
    <div className="box" style={{ backgroundColor: bgColor }}>
      {text}
    </div>
  );
};

export default Contents;
