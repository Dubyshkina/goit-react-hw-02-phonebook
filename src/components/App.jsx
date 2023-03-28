import { Component } from 'react';
import { nanoid } from 'nanoid';
import s from 'components/App.module.css';

import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = event => {
    event.preventDefault();
    const name = event.target[0].value;
    const number = event.target[1].value;
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { name, number, id: nanoid() }],
      };
    });
  };

  handelFilter = event => {
    this.setState({ filter: event.target.value });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter?.toLowerCase())
    );
  };

  handleDeleteBtn = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    return (
      <div className={s.container}>
        <div className={s.section}>
        <h2>Phonebook</h2>
        <Form
          handleAddContact={this.handleAddContact}
        />
        </div>
        <div className={s.section}>
        <h2>Contacts</h2>
        <Filter handelFilter={this.handelFilter} />
        <ContactsList
          contacts={this.filteredContacts()}
          handleDeleteBtn={this.handleDeleteBtn}
        ></ContactsList>
        </div>
      </div>
    );
  }
}

export default App;
