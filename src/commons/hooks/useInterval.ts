import {useEffect, useRef} from "react";

export function useInterval(callback: any, delay: number) {
  const savedCallback = useRef();


  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      // @ts-ignore
      savedCallback.current();
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}
