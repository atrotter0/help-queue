import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: []
    };
    this.handleAddTicket = this.handleAddTicket.bind(this);
  }
  handleAddTicket(newTicket) {
    const ticketListCopy = this.state.masterTicketList.slice();
    ticketListCopy.push(newTicket);
    this.setState({masterTicketList: ticketListCopy});
  }
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route
            exact path='/'
            render={() => <TicketList ticketList={this.state.masterTicketList} />} />
          />
          <Route
            exact path='/newticket'
            render={() => <NewTicketControl onNewTicketCreation={this.handleAddTicket} />} />
          />
        </Switch>
      </div>
    );
  }
}

export default App;
