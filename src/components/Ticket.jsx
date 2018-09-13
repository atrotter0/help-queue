import React from 'react';
import PropTypes from 'prop-types';

const Ticket = (props) => {
  return(
    <div>
      <h3>{props.location} - {props.names}</h3>
      <h4>{props.formattedWaitTime}</h4>
      {props.currentPath === '/admin' && (
        <button onClick={() =>{ props.onTicketSelection(props.ticketObject);}}>
          Details
        </button>
      )}
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func
};

export default Ticket;
