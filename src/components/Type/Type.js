import React from "react";
import Typewriter from "typewriter-effect";

export function TypeMain(props) {
  return (
    <Typewriter
      options={{
        strings: [
          props.string,
        ],
        autoStart: true,
        loop: false,
        deleteSpeed: 50,
        wrapperClassName: props.wrapperClassName,
        cursorClassName: props.wrapperClassName,
      }}
    />
  );
}

export function TypeLoop(props) {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Product Manager",
          "Entrepreneur",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        wrapperClassName: props.wrapperClassName,
        cursorClassName: props.wrapperClassName,
      }}
    />
  );
}

