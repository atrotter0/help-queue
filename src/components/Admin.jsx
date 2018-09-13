import React from 'react';
import PropTypes from 'prop-types';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';

const Admin = (props) => {
  return(
    <div>
      <h2>Admin</h2>
      <TicketDetail />
      <TicketList
        ticketList={props.ticketList}
        currentPath={props.currentPath}
      />
    </div>
  );
}

Admin.propTypes = {
  ticketList: PropTypes.array,
  currentPath: PropTypes.string
};

export default Admin;
