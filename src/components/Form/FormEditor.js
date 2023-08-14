import React, {Component} from "react";

class FormEditor extends Component{
    state = {
        text:''
    };

    handleChange = e => {
         this.setState({
            text:e.target.value,
         })
    }


    render(){
        return (
            <form className="formEditor">
               <label className="formEditor-label">
                Name
                <input 
                className="formEditor-input"
                type="text"
                value={this.state.text}
                onChange={this.handleChange}
                
                ></input>
               </label>
               <button type="submit">Add contact</button>
            </form>
        )
    }
}

export default FormEditor;