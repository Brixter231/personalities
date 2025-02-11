import { useState } from 'react';
import { artistList } from './data.tsx';
import './index.css';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const hasNext = index < artistList.length - 1;
  const hasPrev = index > 0;

  function handleNextClick() {
    setIndex(hasNext ? index + 1 : 0);
  }

  function handlePrevClick() {
    setIndex(hasPrev ? index - 1 : artistList.length - 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  const artist = artistList[index];

  return (
    <>
      <h1>Brixter Bondoc</h1>
      <button onClick={handlePrevClick} disabled={!hasPrev}>
        Back
      </button>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>{artist.artist}</h2>
      <h3>
        ({index + 1} of {artistList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{artist.description}</p>}
      <img 
        className="artist"
        src={artist.url} 
        alt={`Image of ${artist.artist}`}
        
      />
    </>
  );
}