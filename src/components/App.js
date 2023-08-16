import React, {Component} from "react";
import { nanoid } from 'nanoid'
import FormEditor from "./Form/FormEditor";
import Layout from "./Layout/Layout";
import ContactList from "./ContactList/ContactList";

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
    }

    this.setState(prevState => {
      return{
        contacts:[...prevState.contacts,contact],
      }
    })
  }

  render(){
    const {contacts} = this.state;
   return(
    <Layout>
      <FormEditor onAddContact={this.addContact}/>
      <ContactList contacts={contacts} />
    </Layout>
   )
  }
}
export default App;