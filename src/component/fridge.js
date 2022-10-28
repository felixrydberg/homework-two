import { useState, useEffect } from "react";
import Inputs from "./inputs";
import Lists from "./lists";

const Fridge = () => {

    const [types, setTypes] = useState([]); 
    const [items, setItems] = useState({}); 

    const addType = (type) => {
        if (!types.find(item => item === type)) setTypes([...types, ...[type]]);
    }

    const addItem = (data) => {
        addType(data.category);
        if(!items[data.category]) items[data.category] = [];
        if(items[data.category].find(item => item.name.toLowerCase() === data.name.toLowerCase())) {
            alert('Item already exists');
            return;
        }
        items[data.category].push(data)
        setItems(items)
    }

  return(<>
    {types}
    <Inputs callback={addItem}></Inputs>
    <Lists types={types} items={items}></Lists>
  </>);
};

export default Fridge;
