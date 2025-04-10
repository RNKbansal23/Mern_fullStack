import React, { useState } from 'react';

function TextUpdater() {

  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>Current Text: {text}</p>
    </div>
  )
}

export default TextUpdater