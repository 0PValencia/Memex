import React, { useState } from 'react';

function CreateMemeForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que ambos campos no estén vacíos
    if (!title || !imageUrl) {
      setError('Por favor, completa todos los campos.');
      return; // No enviar el formulario si los campos están vacíos
    }

    // Limpiar el mensaje de error si la validación pasa
    setError('');

    // Llamamos a la función onSubmit para agregar el meme
    onSubmit(title, imageUrl);

    // Limpiar los campos después de enviar el formulario
    setTitle('');
    setImageUrl('');
  };

  return (
    <div>
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

      {/* Mostrar el mensaje de error si los campos están vacíos */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default CreateMemeForm;
