import { useState } from 'react';
import { useOutletContext } from 'react-router';

const HomePage = () => {
  const { bloqs, likes, setLikes} = useOutletContext();

  return (
    <div>
      <h1>All Bloqs</h1>
      <ul>
        {bloqs.map((bloq) => (
          <li key={bloq.id}>
            <strong>{bloq.tit}</strong>
            <p>{bloq.des}</p>
          </li>
        ))}
      </ul>

      <div>
        <h3>Your Favorites</h3>
   {likes.length === 0 ? (
    <p>you have no favorites yet</p>
   ): (
    likes.map(like => (
      <ul key={like.id}>
        <li key={like.id}>
          <strong>{like.tit}</strong>
          <p>{like.des}</p>
        </li>
      </ul>
    ))
   )}
      </div>
    </div>
  );
};

export default HomePage;
