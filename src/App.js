import './App.css';
import React, {useState} from 'react';


// put css and push to github tomorrow
function App() {
  const [item, setItem] = useState(""); // item value
  const [itemList, setItemList] = useState([]); // item list for mapping

  const handleChange = (o) => {
    setItem(o.target.value); // get the value from the input
  };

  const addItem = () => {
    const itemDetails = {
      id: Date.now() * Math.floor(Math.random()*10000), // way of generating unique id
      val: item,
    };
    setItemList([...itemList, itemDetails]); // append the item details to the itemList array
  };

  const deleteItem = (o, id) => {
    o.preventDefault();
    setItemList(itemList.filter((o) => o.id !== id)); // compare the ids and filter meaning delete from array
  };

  return (
    <div className="App">
      <div className="container">
        <h1>React Notes App</h1>
        <form id="todoForm">
          <input
            type="text"
            name="item" 
            placeholder="Add Something..."
            autoComplete="off" //removing the dropdown suggestions 
            onChange={(o) => {handleChange(o)}}>
          </input>
          <button className="addButton" type="reset" onClick={addItem}> Add </button> {/*dumb button to prevent submit function*/}
        </form>
        {itemList.map((i) => {
          return (
            <p className="items" key={i.id}>
              {i.val}
              <button className="deleteButton" onClick={(o) => deleteItem(o, i.id)}> X </button>
            </p>
          )
        })}
      </div>
    </div>
  );
}

export default App;
