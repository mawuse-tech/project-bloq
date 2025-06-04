import { useOutletContext } from 'react-router';

const HomePage = () => {
  const { bloqs } = useOutletContext();

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
