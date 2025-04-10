import React from 'react';

function Button({ children }) { // Receive children as a prop
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleClick}
    >
      {children}  {/* Now children will be defined */}
    </button>
  );
}

export default Button;