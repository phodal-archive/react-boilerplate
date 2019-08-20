import React, {useEffect, useState} from 'react';

import useAxios from "../../commons/hooks/useAxios";

function PhdCard() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    setIsOnline(count % 2 === 0);
    return function cleanup() {
      console.log('cleanup');
    }
  }, [count]);

  const [isOnline, setIsOnline] = useState(false);
  useEffect(() => {
    console.log('isOnline', isOnline);
  });
  const [{data, loading, error}, refetch] = useAxios(
    'https://api.myjson.com/bins/820fc'
  );

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <div className="card">
      Card {count}, {isOnline ? '1' : '0'} -
      <button onClick={refetch}>refetch</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default PhdCard;
