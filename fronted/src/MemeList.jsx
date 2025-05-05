import MemeCard from './MemeCard';

function MemeList({ memes, onVote }) {
  return (
    <div>
      <h2>Memes Recientes</h2>
      {memes.length === 0 ? (
        <p>No hay memes aún.</p>
      ) : (
        memes.map((meme, index) => (
          <MemeCard
            key={index}
            meme={{ ...meme, onVote: () => onVote(index) }}
          />
        ))
      )}
    </div>
  );
}

export default MemeList;
