import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="modern-nav">
      <div className="modern-container">
        <ul className="modern-nav-list">
          <li>
            <Link to="/" className="modern-nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/list-todos" className="modern-nav-link">
              My Todos
            </Link>
          </li>
          <li>
            <Link to="/add-todo" className="modern-nav-link">
              Add Todo
            </Link>
          </li>
          <li>
            <Link to="/logout" className="modern-nav-link modern-nav-link-danger">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}