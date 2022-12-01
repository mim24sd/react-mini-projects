const getEmoji = (mood) => {
  switch (mood) {
    case "happy":
      return ":)";
    case "sad":
      return ":(";
    case "interested":
      return ":D";
    case "excited":
      return ":))";
    default:
      return ":|";
  }
};

const FaceMood = ({person}) => {
  const {name , mood} = person;

  return (
      <p>
        {name} {getEmoji(mood)}
      </p>
  );
};

export default FaceMood;
