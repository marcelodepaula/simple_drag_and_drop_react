import React from 'react';
import ListPick from './components/List_pick';
import ListDrop from './components/List_drop';

function App() {
  return (
    <div style={{display: 'flex'}}>
      <ListPick />
      <ListDrop />
    </div>
  );
}

export default App;
