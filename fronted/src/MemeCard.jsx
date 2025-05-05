function MemeCard({ meme }) {
    return (
      <div className="meme-card">
        <h3>{meme.title}</h3>
        <img src={meme.imageUrl} alt={meme.title} width="300" />
        <p>Votos: {meme.votes}</p>
        <button onClick={meme.onVote}>Votar</button>
      </div>
    );
  }
  
  export default MemeCard;
  