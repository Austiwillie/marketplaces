import React from 'react';
import './advanced-filter.css';

const AdvancedFilter = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-header">
        <span className="close-label" onClick={onClose}>Close X</span>
      </div>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default AdvancedFilter;