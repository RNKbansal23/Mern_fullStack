import React from 'react'

function Form() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const inputValue = e.target.elements.myInput.value;
        console.log("Input Value:", inputValue);
      };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="myInput" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form