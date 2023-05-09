import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <main className="Home">
      <p className="missing-posts">Nic tutaj nie ma! <Link to='/'>Strona główna.</Link></p>
    </main>
  )
}

export default Missing
