import { render } from "react-dom";
import FaceMood from "./FaceMood";

const people = [
  {
    name: "Siamak",
    mood: "sad",
  },
  {
    name: "Ati",
    mood: "happy",
  },
  {
    name: "Hedi",
    mood: "interested",
  },
  {
    name: "Soheil",
    mood: "happy",
  },
  {
    name: "Shamim",
    mood: "excited",
  },
  {
    name: "Ali",
    mood: "interested",
  },
  {
    name: "Karen",
    mood: "nice",
  },
];

const App = () => {

  return (
    <div>
      <ul>
      {people.map((person) => <li><FaceMood person={person}/> </li>)}
      </ul>
      
    </div>
  );
};

render(<App />, document.getElementById("root"));
