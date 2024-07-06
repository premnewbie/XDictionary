import { useState } from 'react';
import './App.css';

function App() {
  const [inputText,setInputText] = useState('');
  const [answer,setAnswer] = useState('');
  const [showAnswer,setShowAnswer] = useState(false);

  const dictionary = [

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputText!==''){
      const exists = dictionary.some((obj) => obj.word.toLowerCase() === inputText.toLowerCase());
      if(exists){
        const ans = dictionary.find((val) => val.word.toLowerCase()===inputText.toLowerCase());
        setAnswer(ans.meaning);
        setShowAnswer(true);
      } else {
        setAnswer("Word not found in the dictionary.");
        setShowAnswer(true);
      }
    } else {
      setAnswer("Word not found in the dictionary.");
      setShowAnswer(true);
    }
    
  }


  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Search for a word...' onInput={(e) => setInputText(e.target.value)}/>
        <button type='submit'>Search</button>
      </form>
      <h3>Definition:</h3>
      {showAnswer && <p>{answer}</p>}
    </div>
  );
}

export default App;
