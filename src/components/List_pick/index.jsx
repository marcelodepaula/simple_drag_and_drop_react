import React from 'react'

export default function List_pick(props){

  const list = ['Marcelo', 'Guilherme', 'Eduardo', 'Rafael', 'Giulio']
  function dragStarted(e) {
    console.log(e.target.innerHTML)
    e.dataTransfer.setData('text', e.target.innerHTML)
  }

  return (
    <div style={{flex: '1', backgroundColor: 'cyan', height:'100%', padding:'15'}}>
      <h1>Pick from here</h1>
      {
        list.map(element => <p draggable onDragStart={e=>dragStarted(e)} key={element}>{element}</p>)
      }
    </div>
  );
}