import Ul from "./lists/ul";
import Buttons from "./lists/buttons";

const Lists = (props) => {

  const types = props.types.map((type, index) => <Ul key={index} item={props.items[type]}></Ul>)

  return <>
    <Buttons types={props.types}></Buttons>
    {types}
  </>;
};

export default Lists;
