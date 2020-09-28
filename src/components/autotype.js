import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';

import './autotype.css';

function AutoType({ text, typeSpeed, loop, pauseTime, style }) {
  const characters = text.split('');

  const [charArray, setCharArray] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let insertID,
      clearID = null;

    if (isTyping) {
      if (charArray.length + 1 !== characters.length + 1) {
        insertID = setTimeout(() => {
          setCharArray((prevCharArray) => {
            return prevCharArray.concat(characters[prevCharArray.length]);
          });
        }, typeSpeed);
      } else {
        if (loop) {
          clearID = setTimeout(() => {
            setCharArray([]);
          }, pauseTime);
        }
      }
    }
  }, [charArray, characters, loop, typeSpeed, pauseTime, isTyping]);

  useEffect(() => {
    if (charArray.length + 1 !== characters.length + 1) {
      setIsTyping(true);
    } else {
      setIsTyping(false);
    }
  }, [charArray, characters]);

  return (
    <React.Fragment>
      <p style={style}>{charArray}</p>
    </React.Fragment>
  );
}

AutoType.propTypes = {
  text: propTypes.string,
  typeSpeed: propTypes.number,
  pauseTime: propTypes.number,
  loop: propTypes.bool,
  style: propTypes.object,
};

export default AutoType;
