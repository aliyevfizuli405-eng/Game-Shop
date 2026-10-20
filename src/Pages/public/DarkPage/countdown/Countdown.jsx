
import { useState, useEffect } from "react";
import { Button2 } from "@components/Button/Button2/Button2";

import "./Countdown.css";

export const Countdown = () => {
  const [time, setTime] = useState(100 * 24 * 60 * 60);

  useEffect(() => {
    setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
    return clearInterval();
  }, []);

  return (
    <>
      <p className="text-white text-[28px] md:text-[48px] font-bold text-center tracking-wide">
        The Witcher 3: Wild Hunt
      </p>

      <div className="gameCounterTimer grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto px-5 py-12 md:py-16">
        <div className="gameCounterTime text-white text-4xl md:text-6xl font-bold col-span-1 p-6 md:p-8 flex flex-col justify-center items-center bg-[#100a35] border border-[#30245b] rounded-xl shadow-lg">
          {Math.floor(time / 24 / 60 / 60)}
          <span className="text-sm md:text-base text-[#a1a1b5] font-medium mt-2">
            Days
          </span>
        </div>

        <div className="gameCounterTime text-white text-4xl md:text-6xl font-bold col-span-1 p-6 md:p-8 flex flex-col justify-center items-center bg-[#100a35] border border-[#30245b] rounded-xl shadow-lg">
          {Math.floor((time / 60 / 60) % 24)}
          <span className="text-sm md:text-base text-[#a1a1b5] font-medium mt-2">
            Hours
          </span>
        </div>

        <div className="gameCounterTime text-white text-4xl md:text-6xl font-bold col-span-1 p-6 md:p-8 flex flex-col justify-center items-center bg-[#100a35] border border-[#30245b] rounded-xl shadow-lg">
          {Math.floor((time / 60) % 60)}
          <span className="text-sm md:text-base text-[#a1a1b5] font-medium mt-2">
            Minutes
          </span>
        </div>

        <div className="gameCounterTime text-white text-4xl md:text-6xl font-bold col-span-1 p-6 md:p-8 flex flex-col justify-center items-center bg-[#100a35] border border-[#30245b] rounded-xl shadow-lg">
          {time % 60}
          <span className="text-sm md:text-base text-[#a1a1b5] font-medium mt-2">
            Seconds
          </span>
        </div>
      </div>

      <div className="flex justify-center pb-12">
        <Button2 text="Purchase" />
      </div>
    </>
  );
};
