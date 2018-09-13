import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import { Switch, Route } from 'react-router-dom';
import Moment from 'moment';
import Admin from './Admin';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: [],
      selectedTicket: null
    };
    this.handleAddTicket = this.handleAddTicket.bind(this);
    this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
      60000
    );
  }

  componentWillUnmount() {
    clearInterval(this.waitTimeUpdateTimer);
  }

  handleAddTicket(newTicket) {
    const ticketListCopy = this.state.masterTicketList.slice();
    newTicket.formattedWaitTime = (newTicket.timeOpen).fromNow(true);
    ticketListCopy.push(newTicket);
    this.setState({masterTicketList: ticketListCopy});
  }

  updateTicketElapsedWaitTime() {
    let newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.forEach((ticket) =>
      ticket.formattedWaitTime = (ticket.timeOpen).fromNow(true)
    );
    this.setState({masterTicketList: newMasterTicketList});
  }

  handleChangingSelectedTicket(ticket) {
    this.setState({selectedTicket: ticket});
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route
            exact path='/'
            render={() => <TicketList ticketList={this.state.masterTicketList} />}
          />
          <Route
            exact path='/newticket'
            render={() => <NewTicketControl onNewTicketCreation={this.handleAddTicket} />}
          />
          <Route
            path='/admin'
            render={(props) => <Admin ticketList={this.state.masterTicketList}
                                currentPath={props.location.pathname}
                                onTicketSelection={this.handleChangingSelectedTicket}
                                selectedTicket={this.state.selectedTicket}/>}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
