import { Component } from 'react';

import PropTypes from 'prop-types';

class Filter extends Component {
    
static propTypes = {
    handleChange: PropTypes.func.isRequired,
    stat: PropTypes.object.isRequired,
    contacts: PropTypes.array.isRequired,
}
render(){
    return(
        <>
        <label htmlFor="filter">
        <input
              type="text"
              name="filter"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              value={this.props.stat.filter}
              onChange={e => this.props.handleChange(e)}
              required
            />
            </label></>
    )
}


}
export default Filter;