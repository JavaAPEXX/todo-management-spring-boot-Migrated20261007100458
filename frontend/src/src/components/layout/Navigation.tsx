import React from "react";
import { NavLink } from "react-router-dom";

/**
 * Navigation component – migrated from `navigation.jspf`.
 * Preserves the original markup and behavior while applying the
 * modern CSS design tokens defined in the migration configuration.
 *
 * No internal state or event handlers are required because the source
 * contains only static navigation links.
 */
const Navigation: React.FC = () => {
  return (
    <div className="modern-container">
      {/* Modernized navigation bar */}
      <nav role="navigation" className="modern-card">
        <div className="modern-card-header">
          {/* Brand – external link stays as a normal anchor */}
          <a
            href="http://www.javaguides.net"
            className="navbar-brand"
            target="_blank"
            rel="noopener noreferrer"
          >
            Java Guides
          </a>
        </div>

        <div className="modern-card-body">
          {/* Primary navigation links */}
          <ul className="nav">
            <li className="active">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link btn btn-primary" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/list-todos"
                className={({ isActive }) =>
                  isActive ? "nav-link btn btn-primary" : "nav-link"
                }
              >
                Todos
              </NavLink>
            </li>
          </ul>

          {/* Secondary navigation links */}
          <ul className="nav">
            <li>
              <NavLink
                to="/logout"
                className={({ isActive }) =>
                  isActive ? "nav-link btn btn-primary" : "nav-link"
                }
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;