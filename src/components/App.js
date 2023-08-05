import React, {Component} from "react";

const initial_state = {
    login: "",
    email: "",
    password: "",
}

class App extends Component {

 state = {
    ...initial_state
 };

 handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
 }
    
 handleSubmit = evt => {
    evt.preventDefault();
    const { login, email, password } = this.state;
    console.log(`Login: ${login}, Email: ${email}, Password: ${password}`);
    this.reset();
  };

  reset = () => {
    this.setState({ ...initial_state });
  };

 render(){
    const { login, email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            placeholder="Enter login"
            name="login"
            value={login}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Sign up as {login}</button>
      </form>
    );
 }
}

export default App;