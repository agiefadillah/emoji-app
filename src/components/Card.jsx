import React from 'react';

import Emoji from './Emoji';
import Judul from './Judul';
import Caption from './Caption';

function Card(props) {
  return (
    <div className="term">
      <dt>
        <Emoji emojiImg={props.emoji} />

        <Judul emojiJudul={props.name} />
      </dt>

      <Caption emojiCaption={props.meaning} />
    </div>
  );
}

export default Card;
