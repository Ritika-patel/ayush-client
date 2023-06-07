import React from 'react';

const ErrorMessage = ({ message, status }) => {
  return (
    <div
      className="error"
      style={{
        backgroundColor: status === 'fail' ? 'rgba(255, 0, 0, 0.7)' : 'none',
        fontSize: '8px',
        alignItems: 'center',
        textAlign: 'center',
        
        color: '#ffff',
        fontWeight: 'bold',

      }}
    >
      <h1>{message}</h1>
    </div>
  );
};

export default ErrorMessage;
