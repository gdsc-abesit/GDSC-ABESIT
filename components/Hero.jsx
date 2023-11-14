import React from "react";
import { motion, progress } from "framer-motion";
import { downArrow } from '../assets/arrow.png'
import { useState, useRef, useEffect } from "react";

function Hero() {

  const wordData = ['Welcome to', ' स्वागत है', 'خوش آمدید', 'स्वागत आहे', 'স্বাগত মানা', 'ਸੁਆਗਤ ਹੈ'];
  const [currWord, setCurrWord] = useState(wordData[0]);
  const index = useRef(0);

  useEffect(() => {
    let interval = null;

    const startAnimation = () => {
      interval = setInterval(() => {
        index.current = (index.current + 1) % wordData.length;
        setCurrWord(wordData[index.current]);

        if (index.current === wordData.length - 1) {
          setTimeout(() => {
            setCurrWord(wordData[0]);
            index.current = 0;
          }, 800);
        }
      }, 800);
    };

    startAnimation();

    return () => clearInterval(interval);
  }, [wordData]);

  return (
    <div className="w-full md:h-[25rem] md:mt-20 flex flex-col justify-center space-y-3 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-28">

      <div className="md:text-8xl text-4xl font-medium">
        {currWord}
      </div>

      <div className="md:text-9xl text-6xl font-semibold">
        <span className="text-red-600">G</span><span className="text-blue-600">D</span><span className="text-green-600">S</span><span className="text-yellow-400">C</span> ABESIT,
      </div>

      <div className="space-y-2">
        <div className="text-gray-500 text-2xl">
          We believe in togetherness
        </div>
        <div className="flex space-x-5 text-white">
          <div className="bg-yellow-400 px-5 rounded-3xl py-2">
            Learn
          </div>

          <div className="bg-blue-400 px-5 rounded-3xl py-2">
            Collaborate
          </div>

          <div className="bg-green-400 px-5 rounded-3xl py-2">
            Grow
          </div>

        </div>
      </div>

      <div className="flex justify-center mt-5">
        <div class="scroll-downs">
          <div class="mousey">
            <div class="scroller"></div>
          </div>
        </div>
      </div>

    </div>
  );
}
export default Hero;