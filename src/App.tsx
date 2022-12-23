import { useState } from 'react';
import './App.css';
import Block from './Block';
import State from './state';

function App() {
  const [text, setText] = useState('')

  return (
    <>
      <input className="input" onChange={(e) => setText(e.target.value)} value={text}/>
      <div className="container">
        {State.reduce<JSX.Element[]>((arr, item, i) => {
          item.title.toLowerCase().includes(text.toLowerCase()) && arr.push(<Block key={i} id={i+1} {...item}/>)
          return arr
        }, [])}
      </div>
    </>
  );
}

export default App;
