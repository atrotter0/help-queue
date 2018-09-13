import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

const TicketList = (props) => {
  return(
    <div>
      {props.ticketList.map((ticket) =>
        <Ticket
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          formattedWaitTime={ticket.formattedWaitTime}
          currentPath={props.currentPath}
          onTicketSelection={props.onTicketSelection}
          ticketObject={ticket}
          key={ticket.id}
        />
      )}
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array,
  currentPath: PropTypes.string,
  onTicketSelection: PropTypes.func
};

export default TicketList;
