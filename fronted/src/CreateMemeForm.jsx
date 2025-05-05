import React, { useState } from 'react';

function CreateMemeForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(title, imageUrl); // Llamamos a la función para agregar el meme
    setTitle('');
    setImageUrl('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título del meme"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="URL de la imagen"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <button type="submit">Publicar</button>
    </form>
  );
}

export default CreateMemeForm; // Asegúrate de usar `export default`
