import { useState } from "react";

function SearchHeader({search}) {
 const [valueInput, setValue] = useState('');   
 const handleFormSubmit = (event) => {
    event.preventDefault();
    search(valueInput);
 } //form onSubmit olduğunda aranan kelimeyi tutmak için oluşturulan fonksiyon

 const handleChange = (event) => {
    setValue(event.target.value);
 }

  return (
    <div className="HeaderDiv">
      <form onSubmit={handleFormSubmit}>
        <label>Ne arıyorsunuz?</label>
        <input onChange={handleChange} value={valueInput} type="text" />
      </form>
    </div>
  );
}

export default SearchHeader;
