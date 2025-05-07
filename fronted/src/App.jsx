import { useState } from 'react';
import MemeList from './MemeList';
import CreateMemeForm from './CreateMemeForm';
import { ConnectButton } from '@coinbase/onchainkit';



function App() {
  const [memes, setMemes] = useState([]);

  const addMeme = (title, imageUrl) => {
    const newMeme = {
      title,
      imageUrl,
      votes: 0,
    };
    setMemes([newMeme, ...memes]); // Agregar el nuevo meme al principio
  };

  const voteMeme = (index) => {
    const updatedMemes = [...memes];
    updatedMemes[index].votes += 1;
    setMemes(updatedMemes); // Actualizar el estado con los nuevos votos
  };

  return (
    <div className="app">
      <h1>MemeX - Miniapp Social</h1>
      <ConnectButton />
      <CreateMemeForm onSubmit={addMeme} />
      <h2>Memes Recientes</h2>
      {memes.length === 0 ? (
        <p>No hay memes aún.</p>
      ) : (
        <MemeList memes={memes} onVote={voteMeme} />
      )}
    </div>
  );
}

export default App;
