import { useState } from "react";
const radioValues = [
  {
    id: 1,
    name: 'Option 1'
  },
  {
    id: 2,
    name: 'Option 2'
  },
  {
    id: 3,
    name: 'Option 3'
  }
]
function Input() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(null);
  const [checkbox, setCheckBox] = useState([]);
  const handleSubmit = () => {
    console.log({name, email, checked, checkbox});
  }
  console.log(checkbox);
  const handleChekbox = (id) => {
    setCheckBox(pre => {
      if(checkbox.includes(id)) {
        return checkbox.filter(e => e !== id)
      } else {
        return [...pre, id]
      }
    })
  }
  return (
    <div>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)}>
      </input>
      <input 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}>
      </input>
      {radioValues.map(radio => (
        <div key={radio.id}> 
          <input
            type="radio"
            checked={checked === radio.id}
            onChange={() => setChecked(radio.id)}
          ></input>
          <label>{radio.name}</label>
        </div>
      ))}
      {radioValues.map(radio => (
        <div key={radio.id}> 
          <input
            type="checkbox"
            checked={checkbox.includes(radio.id)}
            onChange={() => handleChekbox(radio.id)}
          ></input>
          <label>{radio.name}</label>
        </div>
      ))}
      <button onClick={handleSubmit}>Change</button>
    </div>
  );
}
export default Input;
