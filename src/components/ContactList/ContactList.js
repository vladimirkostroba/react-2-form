import React from "react";
import PropTypes from 'prop-types';


const ContactList = ({contacts,onRemoveContact,}) => {
   return(
    <ul className="ContactList">
    {contacts.map(({text,number,id}) => (
         <li className="" key={id}>
         <p className="TaskList-text name">{text} : {number}</p>
   
         <section className="TaskList-actions">
           <button type="button" className="btn-new" onClick={() => onRemoveContact(id)}>
             Удалить
           </button>
         </section>
       </li>
    )

    )}
</ul>
   )
}

ContactList.propTypes = {
  contacts:PropTypes.arrayOf(
    PropTypes.exact({
      id:PropTypes.string.isRequired,
      text:PropTypes.string.isRequired,
      number:PropTypes.number.isRequired,
  })
  ),
  onRemoveContact:PropTypes.func.isRequired,
}

export default ContactList;