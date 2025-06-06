
import React, { useState } from 'react'
import { useOutletContext } from 'react-router'
import 'remixicon/fonts/remixicon.css';

const FullBloq = () => {
  const { bloqs, setBloqs, likes, setLikes } = useOutletContext();

  //  toggle function
  const toggleLikedIcon = (bloqq) => {
    const isLiked = likes.find(like => like.id === bloqq.id);

    if (isLiked) {
      setLikes(likes.filter(like => like.id !== bloqq.id));
      alert('bloq removed from your favorite')
    } else {
      setLikes([...likes, bloqq])
      alert('bloq added to your favorite')
    }
    
  }

  const isLikedId = (likeId) => {
    return likes.some(item => item.id === likeId);
  };

  // delete function
  const deleteFunction = (bloqId) => {
  const isConfirmed = window.confirm('Delete?');
  if (isConfirmed) {
    setBloqs(prevBloqs => prevBloqs.filter(bloq => bloq.id !== bloqId));
    setLikes(prevLikes => prevLikes.filter(like => like.id !== bloqId));
  }
};

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
    
      <ul className="space-y-6">
        {bloqs.map((bloq) => (
          <li
            key={bloq.id}
            className="p-5 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <strong className="block text-xl font-semibold text-gray-700 mb-2">
              {bloq.tit} </strong>
            <p className="text-gray-600 mb-4">{bloq.des}</p>
          </li>
        ))}
      </ul>
    </div>

  )
}

export default FullBloq