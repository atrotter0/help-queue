import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

const TicketList = (props) => {
  console.log(props.ticketList);
  return(
    <div>
      {props.ticketList.map((ticket, index) =>
        <Ticket
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          formattedWaitTime={ticket.formattedWaitTime}
          key={ticket.id}
        />
      )}
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array
};

export default TicketList;
