import React from "react";

const ContactList = ({contacts}) => {
   return(
    <ul className="ContactList">
    {contacts.map(({text,number,id}) => (
         <li className="" key={id}>
         <p className="TaskList-text name">{text} : {number}</p>
         
   
         
   
         <section className="TaskList-actions">
           <button type="button" className="TaskList-button" >
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