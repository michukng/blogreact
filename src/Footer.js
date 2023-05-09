import { useContext } from "react";
import DataContext from "./Context/DataContext";

const Footer = () => {
    const { posts } = useContext(DataContext);
    console.log(posts.length)
  return (
    <footer>
      <p>{posts.length} {posts.length === 1 ? "post" : (posts.length > 1 && posts.length < 5) ? "posty" : "postów"} na stronie.</p>
    </footer>
  )
}

export default Footer
