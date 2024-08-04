import React from 'react';
import './PoolTermSelector.css';
import { ReactComponent as Fire } from './resources/fire.svg';

const PoolTermSelector = ({ poolTerm, onTermChange, terms }) => {
  return (
    <div className="pool-terms">
      <h3 className="sub-title">Select Pool's Term</h3>
      <div className="duration">
        <p>24's Best</p>
        <p>24's Best</p>
      </div>
      <div className="terms">
        {terms.map(term => (
          <button
            key={term.name}
            className={`term-button ${poolTerm === term.name ? 'active' : ''}`}
            onClick={() =>
              onTermChange({ id: term.id, initialFeeTier: term.initialFeeTier })
            }>
            <div className='btn-terms-content'>
              <div>
                <div>{term.yield}</div>
                <div>
                  <span className="percent">{term.percent}</span>
                </div>
                <div className="name-tk">{term.name}</div>
              </div>
              <Fire/>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PoolTermSelector;
