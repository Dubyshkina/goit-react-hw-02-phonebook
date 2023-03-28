import { Component } from 'react';
import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';

class Form extends Component {
 state = {
  name: '',
  number: '',
  id:'',
 }




 handleSubmit = (e) => {

  //const id = e.target.id;
  //e.preventDefault()
  //this.setState({...this.state, id:id, name: this.state.name, number: this.state.number})

  const {name, number, id} = e.currentTarget;
  this.setState({id:id, name: this.state.name, number: this.state.number})
}

    static propTypes = {
        handleChange: PropTypes.func.isRequired,
    }

  render() {
    return (
      <>
        <form onSubmit={e => this.handleSubmit(e)} id={nanoid(3)}>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={this.state.name}
              onChange={e => this.props.handleChange(e)}
              required
            />
          </label>
          <label htmlFor="number">
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={this.state.number}
              onChange={e => this.props.handleChange(e)}
              required
            />
          </label>
          <button type="submit">Add to contacts</button>
        </form>
      </>
    );
  }
}

export default Form;
