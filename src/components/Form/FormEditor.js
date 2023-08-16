import React, {Component} from "react";

class FormEditor extends Component{
    state = {
        text:'',
        number:'',
    };

    handleChangeName = e => {
         this.setState({
            text:e.target.value,
         })
    }

    handleChangeNumber = e => {
        this.setState({
            number:e.target.value,
         })
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.onAddContact(this.state);

        this.setState({text:'',number:''})
    }


    render(){
        return (
            <form className="formEditor" onSubmit={this.handleSubmit}>
               <label className="formEditor-label">
                Name
                <input 
                className=""
                type="text"
                name="name"
                value={this.state.text}
                required
                onChange={this.handleChangeName}
                
                ></input>
               </label>

               <label className="formEditor-label">
                Phone Number
                <input 
                className=""
                type="number"
                name="number"
                value={this.state.number}
                required
                onChange={this.handleChangeNumber}
                
                ></input>
               </label>

               
               <button type="submit">Add contact</button>
            </form>
        )
    }
}

export default FormEditor;