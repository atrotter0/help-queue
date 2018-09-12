import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

const Ticket = (props) => {
  return(
    <div>
      <h3>{props.location} - {props.names}</h3>
      <h4>{displayTimeOpen(props.timeOpen)} ago</h4>
      <p><em>{props.issue}</em></p>
      <hr/>
    </div>
  );
}

const displayTimeOpen = (timeOpen) => {
  return timeOpen.from(new Moment(), true);
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  timeOpen: PropTypes.instanceOf(Moment).isRequired
};

export default Ticket;