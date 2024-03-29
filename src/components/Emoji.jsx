import React from 'react';

function Emoji(props) {
  return (
    <span className="emoji" role="img" aria-label="Tense Biceps">
      {props.emojiImg}
    </span>
  );
}

export default Emoji;
