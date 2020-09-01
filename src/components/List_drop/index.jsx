import React, { useState } from 'react'

export default function List_drop(props){

  const [list, setList] = useState([])

  function dropped(e, target){
    e.preventDefault()
    console.log(e.dataTransfer.getData("text"))
    setList([...list, (e.dataTransfer.getData("text"))])
  }

  return (
    <div id="test"
      style={{flex: '1', backgroundColor: 'orange', height:'100%', padding:'15px'}}
      onDragEnter={e=>{e.preventDefault(); e.stopPropagation()}}
      onDragOver={e=>{e.preventDefault(); e.stopPropagation()}}
      onDrop={ev=>dropped(ev, this)}
    >
      <h1>Drop here</h1>
      {
        list.length === 0
          ?
        <p>{"Nenhum item na lista"}</p>
          :
        list.map(element => <p>{element}</p>)
      }
    </div>
  );
}