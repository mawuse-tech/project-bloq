import { useOutletContext } from 'react-router';

const HomePage = () => {
  const { bloqs, likes } = useOutletContext();

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6"> All Bloqs</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {bloqs.map((bloq) => (
          <div
            key={bloq.id}
            className="bg-white shadow-md p-4 rounded-md border border-gray-100"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {bloq.tit}
            </h2>
            <p className="text-gray-600">{bloq.des}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-bold mb-4"> <i className="ri-heart-fill text-red-700"></i> Your Favorites</h3>
        {likes.length === 0 ? (
          <p className="text-gray-500">You have no favorites yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {likes.map((like) => (
              <div
                key={like.id}
                className="bg-yellow-50 border border-yellow-200 shadow-sm p-4 rounded-md"
              >
                <h4 className="text-lg font-semibold text-yellow-800 mb-1">
                  {like.tit}
                </h4>
                <p className="text-yellow-700">{like.des}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
