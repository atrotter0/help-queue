import React from 'react';
import PropTypes from 'prop-types';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';

const Admin = (props) => {
  return(
    <div>
      <h2>Admin</h2>
      {props.selectedTicket && (
        <TicketDetail selectedTicket={props.selectedTicket} />
      )}
      <TicketList
        ticketList={props.ticketList}
        currentPath={props.currentPath}
        onTicketSelection={props.onTicketSelection}
      />
    </div>
  );
}

Admin.propTypes = {
  ticketList: PropTypes.array,
  currentPath: PropTypes.string,
  onTicketSelection: PropTypes.func.isRequired,
  selectedTicket: PropTypes.object
};

export default Admin;
