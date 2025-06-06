
import React, { useState } from 'react'
import { useOutletContext } from 'react-router'

const BloqPage = () => {
  const { bloqs, setBloqs, likes, setLikes } = useOutletContext();
  //  toggle function
  const toggleLikedIcon = (bloqq) => {
    const isLiked = likes.find(like => like.id === bloqq.id);

    if (isLiked) {
      setLikes(likes.filter(like => like.id !== bloqq.id));
    } else {
      setLikes([...likes, bloqq])
    }
  }

  const isLikedId = (likeId) => {
    return likes.some(item => item.id === likeId);
  };

  // delete function
  const deleteFunction = (bloqId) => {
    setBloqs(prevBloqs => prevBloqs.filter(bloq => bloq.id !== bloqId));
    setLikes(prevLikes => prevLikes.filter(like => like.id !== bloqId))
  };

  return (
    <div>
      Top Stories
      <ul>
        {bloqs.map((bloq) => (
          <li key={bloq.id}>
            {bloq.des}

            <button onClick={() => toggleLikedIcon(bloq)}>
              {isLikedId(bloq.id) ? 'unlike' : 'like'}
            </button>

            <button onClick={() => deleteFunction(bloq.id)}
            >delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BloqPage