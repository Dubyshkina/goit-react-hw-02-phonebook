
import { Component } from 'react';


import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts:[],
    filter:'',
  };

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name] : value});
  }

  
 

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form 
        handleChange={this.handleChange}
        />
        <h2>Contacts</h2>
        <Filter 
        handleChange={this.handleChange}
        stat={this.state}
        contacts={this.state.contacts}
        />
        <ContactsList contacts={this.state.contacts}></ContactsList>
      </div>
    );
  }
}

export default App;
