import React from "react";
import { Link } from 'react-router-dom';

function Header() {
  return(
    <div>
      <h1>Help Queue</h1>
      <div>
        <Link to='/'>Tickets</Link> | <Link to='/newticket'>New Ticket</Link> | <Link to='/admin'>Admin</Link>
      </div>
    </div>
  );
}

export default Header;
