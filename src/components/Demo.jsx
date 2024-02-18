import { useState, useMemo } from "react";
import { findNthPrime } from "../utils/helper";

function Demo() {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const prime = useMemo(() => {
    console.log("Calculaing prime");
    const result = findNthPrime(text);
    console.log("Calculation complete");
    return result;
  }, [text]);
  console.log();

  return (
    <div className={!isDarkTheme ? "w-[400px] h-[700px] border border-black" : "w-[400px] h-[700px] bg-zinc-800 text-zinc-300 border-white"}>
      <div>
        <input
          className={"p-2 border border-black rounded-md m-2 text-black"} 
          type={"number"}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <span> {"Prime No: " + prime}</span>
      </div>
      <div>
        <button
          className={ !isDarkTheme ? "p-2 m-2 border border-black rounded-lg" : " p-2 m-2 border-white bg-zinc-500 font-bold rounded-lg"}
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          {isDarkTheme ? "Light theme" : "Dark theme"}
        </button>
      </div>
    </div>
  );
}

export default Demo;
