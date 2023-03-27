// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"
import { Component } from 'react';
import { nanoid } from 'nanoid';

// import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';

class App extends Component {
  state = {
    contacts:[],
    name: '',
    number: '',
  };


  handleSubmit = (e) => {
    const id = e.target.id;
    e.preventDefault()
    this.setState({...this.state, contacts: [...this.state.contacts,{id:id, name: this.state.name, number: this.state.number} ]  })
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name] : value});
    // this.setState({...this.state, contacts: [...this.state.contacts, { [e.target.name] : e.target.value } ] })
  }
  // handleChange = e => {
  //   this.setState({contacts: [{[e.target.name] : e.target.value}]})
  //   // this.setState((prev) => ({ 
  //   //   contacts: [{[name]: value}]
  //   // }));
  // };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.setState((prev) => ({
  //     contacts: [...prev.contacts, contacts]
  //   }))
  // };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        {/* <Form /> */}
        <form onSubmit={this.handleSubmit} id={nanoid(3)}>
          <label htmlFor="name">Name 

          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          </label>
          <label htmlFor="number">Number 
          
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={this.state.number}
            onChange={this.handleChange}
            required
          />
          </label>
          <button type="submit">Add to contacts</button>
        </form>

        <h2>Contacts</h2>
        {/* <Filter/> */}
        <ContactsList contacts={this.state.contacts}></ContactsList>
      </div>
    );
  }
}

export default App;
