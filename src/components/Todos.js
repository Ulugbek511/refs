import React, { useState, useMemo } from 'react';
import { calculateFromNtoBillion } from '../utils/calculateFromNtoBillion';

function Todos() {
  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    setShowMessage(prevShowMessage => !prevShowMessage);
  };

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const sum = useMemo(() => calculateFromNtoBillion(count), [count]);

  return (
    <div>
      <button onClick={toggleMessage}>
        {showMessage ? 'Hide message' : 'Show message'}
      </button>
      {showMessage && <p>todosdagi text </p>}
      
      <div>
        <p>Count: {count}</p>
        <p>Sum: {sum}</p>
        <button onClick={incrementCount}>Incrment Count</button>
      </div>
    </div>
  );
}

export default Todos;