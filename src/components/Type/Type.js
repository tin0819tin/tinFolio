import React from "react";
import Typewriter from "typewriter-effect";

export default function Type(props) {
  return (
    <Typewriter
      options={{
        strings: [
          props.string,
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

