import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const navigate = useNavigate();

  return (
    <nav>
      <button onClick={() => navigate('/')}>
        Strona główna
      </button>
      <button onClick={() => navigate('/dodaj-post')}>
        Dodaj post
      </button>
    </nav>
  )
}

export default Nav
