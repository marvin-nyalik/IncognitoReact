import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Hi User</Link></li>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/ref">Ref</Link></li>
        <li><Link to="/title">Title</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        <li><Link to="/reducer">Reducer</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/form">Forms</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
