const Ul = (props) => {
  return <ul>
        {props.item.map((item, index) => {
            <li key={index}>
                <h1>{item.name}</h1>
                <h2>{item.category}</h2>
                <h2>{item.amount}</h2>
                <h2>{item.date}</h2>
            </li>
        })}
    </ul>
}

export default Ul;