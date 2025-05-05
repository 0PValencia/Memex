import { useState } from 'react';
import MemeList from './MemeList';
import CreateMemeForm from './CreateMemeForm'; // Importación por defecto

function App() {
  const [memes, setMemes] = useState([]);

  const addMeme = (title, imageUrl) => {
    const newMeme = {
      title,
      imageUrl,
      votes: 0,
    };
    setMemes([newMeme, ...memes]); // Agrega el nuevo meme al principio
  };

  const voteMeme = (index) => {
    const updated = [...memes];
    updated[index].votes += 1;
    setMemes(updated);
  };

  return (
    <div className="app">
      <h1>MemeX - Miniapp Social</h1>
      <CreateMemeForm onSubmit={addMeme} />
      <MemeList memes={memes} onVote={voteMeme} />
    </div>
  );
}

export default App;
