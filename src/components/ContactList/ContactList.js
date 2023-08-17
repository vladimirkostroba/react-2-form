import React from "react";

const ContactList = ({contacts,onRemoveContact,compleeted,onUpdate}) => {
   return(
    <ul className="ContactList">
    {contacts.map(({text,number,id}) => (
         <li className="" key={id}>
         <p className="TaskList-text name">{text} : {number}</p>
         
   
         <label>
          Compleeted
          <input type="checkbox" checked={compleeted} onChange={() => onUpdate(id)}/>
         </label>
   
         <section className="TaskList-actions">
           <button type="button" className="TaskList-button" onClick={() => onRemoveContact(id)}>
             Удалить
           </button>
         </section>
       </li>
    )

    )}
</ul>
   )
}

export default ContactList;