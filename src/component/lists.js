import Ul from "./lists/ul";
import Buttons from "./lists/buttons";

const Lists = (props) => {
  return <>
    <Buttons list={props.types}></Buttons>
    <Ul list={props.types} items={props.items}></Ul>
  </>;
};

export default Lists;
