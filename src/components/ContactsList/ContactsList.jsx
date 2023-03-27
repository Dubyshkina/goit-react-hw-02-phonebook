import  PropTypes  from "prop-types";

const ContactsList = ({contacts}) =>  {
    return (
        <ul>
            {contacts.map(({id, name, number}) => {
           return( <li key={id}><span>{name}: </span><span>{number}</span></li>)})} 
        </ul>
    )
    
}
ContactsList.propTypes ={
    contacts: PropTypes.array.isRequired,
}

export default ContactsList;