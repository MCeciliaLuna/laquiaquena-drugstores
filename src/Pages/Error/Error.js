import React from 'react';

const Error = () => {
  localStorage.removeItem('access-token');
  return (
    <div>
      <h1>Error Page</h1>
    </div>
  );
};

export default Error;