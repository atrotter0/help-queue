import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewTicketForm from './NewTicketForm';
import PropTypes from 'prop-types';

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
          <NewTicketForm onNewTicketCreation={this.props.onNewTicketCreation} /> : 
          <ConfirmationQuestions onConfirmation={this.handleConfirmation} />
        }
      </div>
    );
  }
}

NewTicketControl.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketControl;
