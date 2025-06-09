// BloqPage.jsx
import React from 'react';
import { Link, Outlet, useOutletContext } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';

const BloqPage = () => {
  const { bloqs, setBloqs, likes, setLikes } = useOutletContext();

  const toggleLikedIcon = (bloqq) => {
    const isLiked = likes.find(like => like.id === bloqq.id);
    if (isLiked) {
      setLikes(likes.filter(like => like.id !== bloqq.id));
      alert('bloq removed from your favorite');
    } else {
      setLikes([...likes, bloqq]);
      alert('bloq added to your favorite');
    }
  };

  const isLikedId = (likeId) => likes.some(item => item.id === likeId);

  const deleteFunction = (bloqId) => {
    const isConfirmed = window.confirm('Delete?');
    if (isConfirmed) {
      setBloqs(prev => prev.filter(bloq => bloq.id !== bloqId));
      setLikes(prev => prev.filter(like => like.id !== bloqId));
    }
  };

  return (
    <div className="flex lg:flex-row flex-col gap-4 p-6">
      <div className="md:w-1/2 w-full space-y-6">
        {bloqs.map((bloq) => (
          <div key={bloq.id} className="border rounded-lg p-4 shadow hover:shadow-md">

            <Link to="full">
              <strong className="block text-xl font-semibold text-gray-700 mb-2">{bloq.title}</strong>
              <p className="text-gray-600 mb-4">
                {bloq.description.length > 100 ? bloq.description.slice(0, 100) + '...' : bloq.description}
              </p>
            </Link>

            <div className="flex gap-3">
              <button
                onClick={() => toggleLikedIcon(bloq)}
                className="text-sm"
              >
                {isLikedId(bloq.id)
                  ? <i className="ri-heart-fill text-red-600 text-xl"></i>
                  : <i className="ri-heart-line text-xl"></i>}
              </button>

              <button
                onClick={() => deleteFunction(bloq.id)}
                className="text-gray-600 hover:text-red-600"
              >
                <i className="ri-delete-bin-6-line text-xl"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Right panel */}
      <div className="md:w-1/2 w-full border-l pl-4">
        <Outlet context={{ bloqs}}/>
      </div>
    </div>
  );
};

export default BloqPage;
