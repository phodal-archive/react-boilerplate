import React, {useState} from 'react';

function PhdCard() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      Card {count}
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default PhdCard;
