import React, {useEffect, useState} from 'react';

function PhdCard() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    setIsOnline(count % 2 === 0);
    return function cleanup() {
      console.log('cleanup');
    }
  });

  const [isOnline, setIsOnline] = useState(false);
  useEffect(() => {
    console.log('isOnline', isOnline);
  });

  return (
    <div className="card">
      Card {count}, {isOnline ? '1' : '0'} -
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default PhdCard;
