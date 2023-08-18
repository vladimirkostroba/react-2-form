import React, {Component} from "react";
import PropTypes from 'prop-types';


class FormEditor extends Component{
    static propTypes = {
        onAddContact:PropTypes.func.isRequired,
    };

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
                <input 
                className=""
                type="text"
                name="name"
                value={this.state.text}
                required
                onChange={this.handleChangeName}
                
                ></input>
                Name
               </label>

               <br></br>

               <label className="formEditor-label">
                <input 
                className=""
                type="number"
                name="number"
                value={this.state.number}
                required
                onChange={this.handleChangeNumber}
                
                ></input>
                Phone Number
               </label>

               <br></br>

               
               <button type="submit" className="btn-new">Add contact</button>
            </form>
        )
    }
}

export default FormEditor;