import React from 'react';

const Alert = ({ alert }) => {
  return (
    alert && (
      <div className={`alert alert-${alert.type}`}>
        <strong>{alert.type.toUpperCase()}:</strong> {alert.msg}
      </div>
    )
  );
};

export default Alert;
