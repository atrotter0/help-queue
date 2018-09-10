import React from 'react';

const NewTicketForm = () => {
  const handleNewTicketFormSubmit = (e) => {
    e.preventDefault();

    const names = e.target.elements.names.value.trim();
    const location = e.target.elements.location.value.trim();
    const issue = e.target.elements.issue.value.trim();
    console.log(names + ' ' + location + ' ' + issue);
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

export default NewTicketForm;
