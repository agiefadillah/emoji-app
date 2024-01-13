import React from 'react';

import Card from './Card';
import emojipedia from '../emojipedia';

function createCard(emojiSatu) {
  return <Card id={emojiSatu.id} emoji={emojiSatu.emoji} name={emojiSatu.name} meaning={emojiSatu.meaning} />;
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map((emojiSatu) => (
          <Card id={emojiSatu.id} emoji={emojiSatu.emoji} name={emojiSatu.name} meaning={emojiSatu.meaning} />
        ))}
      </dl>
    </div>
  );
}

export default App;
