import React, {Component} from "react";
import { nanoid } from 'nanoid'
import FormEditor from "./Form/FormEditor";
import Layout from "./Layout/Layout";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

class App extends Component{

  state = {
    contacts : [],
    filter:'',
  }


  addContact = ({text,number}) => {

    const contact = {
      id:nanoid(),
      text,
      number,
      compleeted:true,
    }

    if(this.findExsistingContact(contact)) {
      alert('такой контакт уже есть');
      return;
    };

    this.setState(prevState => {
      return{
        contacts:[...prevState.contacts,contact],
      }
    })
  }

  // Find Contact

  findExsistingContact = ({text}) => {
    const {contacts} = this.state;

    return(contacts.some(contact => 
      contact.text.includes(text.toLowerCase())))
  }

  // Remove

  removeContact = contactId => {
    this.setState(prevState => {
      return {
        contacts:prevState.contacts.filter(({id}) => id !== contactId)
      }
      
    })
  }

  // Filter
    
  handleChangeFilter = text =>{
    this.setState(  
        {filter:text}
    )
  }

  getWisibleContacts = () =>{
    const {contacts,filter} = this.state;

    return(contacts.filter(contact => 
      contact.text.toLowerCase().includes(filter.toLowerCase())))
  }



  render(){
    const {filter} = this.state;
    const wisibleContacts = this.getWisibleContacts();

   return(
    <Layout>
      <FormEditor onAddContact={this.addContact}/>

      {wisibleContacts.length > 1 && (
          <Filter value={filter} onChangeFilter={this.handleChangeFilter} />
        )}
  
      {wisibleContacts.length > 0 && (
        <ContactList 
        contacts={wisibleContacts} 
        onRemoveContact={this.removeContact} 
        onUpdate={this.updateContact}
        />
      )}
    </Layout>
   )
  }
}
export default App;