import React from 'react';
import './ActiveLink.css'
import { NavLink } from 'react-router-dom';
const ActiveLink = ({to,children}) => {
    return (
        <div>
              <NavLink
                    to={to}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                 {children}
                  </NavLink>
        </div>
    );
};

export default ActiveLink;