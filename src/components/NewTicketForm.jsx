import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';

const NewTicketForm = (props) => {
  const handleNewTicketFormSubmit = (e) => {
    e.preventDefault();

    const names = e.target.elements.names.value.trim();
    const location = e.target.elements.location.value.trim();
    const issue = e.target.elements.issue.value.trim();
    props.onNewTicketCreation(
      {
        names: names,
        location: location,
        issue: issue,
        id: v4(),
        timeOpen: new Moment()
      }
    );
    resetFormInputs(e);
  }
  const resetFormInputs = (e) => {
    e.target.elements.names.value = '';
    e.target.elements.location.value = '';
    e.target.elements.issue.value = '';
  }
  return (
    <div>
      <form onSubmit={handleNewTicketFormSubmit}>
        <input
          type='text'
          id='names'
          name='name'
          placeholder='Pair Names'
        /><br/>
        <input
          type='text'
          id='location'
          name='location'
          placeholder='Location'
        /><br/>
        <textarea
          id='issue'
          name='issue'
          placeholder='Describe your issue.'
        /><br/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;
