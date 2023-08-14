import React, {Component} from "react";
import FormEditor from "./Form/FormEditor";
import Layout from "./Layout/Layout";

class App extends Component{

  state = {
    contacts : [],
  }

  addName = () => {
    this.setState()
  }

  render(){
   return(
    <Layout>
      <FormEditor onAddName={this.addName}>

      </FormEditor>
    </Layout>
   )
  }
}
export default App;