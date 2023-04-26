import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const navigate = useNavigate();

  return (
    <nav>
      <button onClick={() => navigate('/')}>
        Strona główna
      </button>
      <button>
        Dodaj post
      </button>
    </nav>
  )
}

export default Nav
