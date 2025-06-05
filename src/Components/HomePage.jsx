import { useState } from 'react';
import { useOutletContext } from 'react-router';

const HomePage = () => {
  const { bloqs } = useOutletContext();
  const [likes, setLikes] = useState([]);

  const toggleLikedIcon = (bloqq) =>{
    const isLiked = likes.find(like => like.id === bloqq.id);

    if(isLiked){
      setLikes(likes.filter(like => like.id !== bloqq.id ));
    }else{
      setLikes([...likes,{bloqq}])
    }
  }

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
    </div>
  );
};

export default HomePage;
