
import React, { useState } from 'react'
import { useOutletContext } from 'react-router'
import 'remixicon/fonts/remixicon.css';

const BloqPage = () => {
  const { bloqs, setBloqs, likes, setLikes } = useOutletContext();
  const [selectedBloq, setSelectedBloq] = useState(null);

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
    <div className="max-w-3xl mx-auto px-4 py-8">
  <h2 className="text-2xl font-bold mb-6 text-gray-800">📰 Top Stories</h2>

  <ul className="space-y-6">
    {bloqs.map((bloq) => (
      <li onClick={() => selectedBloq(bloq)}
        key={bloq.id}
        className="p-5 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow"
      >
        <strong className="block text-xl font-semibold text-gray-700 mb-2">
          {bloq.tit}
        </strong>
        <p className="text-gray-600 mb-4">{bloq.des}</p>

        <div className="flex gap-3">
          <button
  onClick={() => toggleLikedIcon(bloq)}
  className="px-4 py-2 text-sm rounded-md font-medium"
>
  {isLikedId(bloq.id) ? <i className="ri-heart-fill text-red-700 text-2xl"></i> : <i className="ri-heart-line text-2xl"></i>}
</button>


          <button
            onClick={() => deleteFunction(bloq.id)}
            className="px-4 py-2 text-sm bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200"
          >
          <i class="ri-delete-bin-6-line text-2xl"></i>
          </button>
        </div>
      </li>
    ))}
  </ul>
</div>

  )
}

export default BloqPage