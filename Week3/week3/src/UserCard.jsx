import React from 'react';

function UserCard({ name, email }) { // Receive name and email as props
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600">{email}</p>
    </div>
  );
}

export default UserCard;