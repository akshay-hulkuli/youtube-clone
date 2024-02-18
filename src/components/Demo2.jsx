import React, { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  // in ui this remains as 0 only as when component renders this will be reinitialised
  let myVal = 0;
  const [state, setState] = useState(0);
  const myRef = useRef(0);
  console.log(myRef);

  const interval = useRef(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      console.log("Printing message");
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  //   alert("Component rendered");
  return (
    <div className="mx-5 border border-black p-5">
      <div className="flex items-center">
        <span>local JS value : {myVal}</span>
        <button
          className="p-2 rounded-lg border border-black m-2"
          onClick={() => myVal++}
        >
          Increment JS value
        </button>
      </div>
      <div className="flex items-center">
        <span>state value : {state}</span>
        <button
          className="p-2 rounded-lg border border-black m-2"
          onClick={() => setState(state + 1)}
        >
          Increment state value
        </button>
      </div>
      <div className="flex items-center">
        <span>useRef value : </span> <span>{myRef.current}</span>
        <button
          className="p-2 rounded-lg border border-black m-2"
          onClick={() => {
            myRef.current = myRef.current + 1;
          }}
        >
          Increment useRef value
        </button>
      </div>
      <div>
        <button className="p-3 m-3 bg-red-900 rounded-lg text-white" onClick={() => clearInterval(interval.current)}>
          Stop printing
        </button>
      </div>
    </div>
  );
};

export default Demo2;
