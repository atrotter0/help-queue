import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewTicketForm from './NewTicketForm';

class NewTicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleConfirmation = this.handleConfirmation.bind(this);
  }
  handleConfirmation() {
    this.setState( { formVisibleOnPage: true });
  }
  render() {
    return(
      <div>
        {
          this.state.formVisibleOnPage ? 
          <NewTicketForm /> : 
          <ConfirmationQuestions onConfirmation={this.handleConfirmation} />
        }
      </div>
    );
  }
}

export default NewTicketControl;
