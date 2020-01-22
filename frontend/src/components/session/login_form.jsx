import React from 'react';
import { withRouter } from 'react-router-dom';
import Draggable from 'react-draggable';
import './session.css'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.currentUser === true) {
    //         this.props.history.push('/');
    //     }

    //     this.setState({ errors: nextProps.errors })
    // }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(user);
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
         <Draggable handle="h1">
          <div className="session-form">
              <h1>Login</h1>
              <button className="close-form" type="button" onClick={this.props.closeModal}>×</button>
                 <form onSubmit={this.handleSubmit} className="signup-form">
                    <div className="session-inputs">
                        {/* <br /> */}
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                            className="login-input"
                        />
                        {/* <br /> */}
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                            className="login-input"
                        />
                        {/* <br /> */}
                        <input type="submit" value="Submit" className="session-submit"/>
                        <div className="session-errors">{this.renderErrors()}</div>
                    </div>
                    <p className="session-footer">Don't have an accont? &nbsp;
                       <button
                          className="session-footer-button"
                          type="button"
                          onClick={() => this.props.openModal('SIGNUP')}>Sign up
                       </button>.
                   </p>
                    <p className="session-footer">
                       Can't commit? Explore our site with a &nbsp;
                    <button
                          className="session-footer-button"
                          type="button"
                        //   onClick={(e) => this.demo(e)}
                       >
                          demo login
                  </button>.
                  </p>
                </form>
            </div>
           </Draggable>
        );
    }
}

export default withRouter(LoginForm);