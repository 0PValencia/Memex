import React, { useState } from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const MemeCard = ({ meme }) => {
  const [votes, setVotes] = useState(meme.votes || 0);
  const [voted, setVoted] = useState(false);  // Estado para saber si ya se votó
  
  // Función para votar positivamente
  const handleUpVote = () => {
    if (!voted) {
      setVotes(votes + 1);
      setVoted(true);
    }
  };
  
  // Función para votar negativamente
  const handleDownVote = () => {
    if (!voted) {
      setVotes(votes - 1);
      setVoted(true);
    }
  };

  return (
    <div className="meme-card">
      <h3>{meme.title}</h3>
      <img src={meme.imageUrl} alt={meme.title} />
      <p>Votos: {votes}</p>
      <div className="voting-buttons">
        <button 
          onClick={handleUpVote}
          className={voted ? "voted" : ""}
        >
          <ThumbUpIcon />
        </button>
        <button 
          onClick={handleDownVote}
          className={voted ? "voted" : ""}
        >
          <ThumbDownIcon />
        </button>
      </div>
    </div>
  );
};

export default MemeCard;
