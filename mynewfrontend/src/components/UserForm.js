import React from 'react';

export default class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onCpasswordChange = this.onCpasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: props.user ? props.user.email : '',
            password: props.user ? props.user.password : '',
            cpassword: props.user ? props.user.cpassword : '',           
            error: ''
        };
    }

    onEmailChange(e) {
        const email = e.target.value;
        this.setState(() => ({ email: email }));
    }

    onPasswordChange(e) {
        const password = e.target.value;
        this.setState(() => ({ password: password }));
    }

    onCpasswordChange(e) {
        const cpassword = e.target.value;
        this.setState(() => ({ cpassword: cpassword }));
    }

  

    onSubmit(e) {
        e.preventDefault();
        // if values are not set
        if (!this.state.email || !this.state.password || !this.state.cpassword) {
            this.setState(() => ({ error: 'Please set email & password & cpassword!' }));
        } else {
            this.setState(() => ({ error: '' }));
            //values are set and function is called in add user 
            this.props.onSubmitUser(
                {
                    email: this.state.email,
                    password: this.state.password,
                    cpassword: this.state.cpassword
                }
            );
        }
    }

    render() {
        return (
            <div>
                {/* {this.state.error && <p className='error'>{this.state.error}</p>} */}
                {/* on submitting form call function */}
                <form onSubmit={this.onSubmit} className='add-user-form'>

                    <input type="text" placeholder="email" autoFocus
                        value={this.state.email}
                        onChange={this.onEmailChange} />
                    <br />

                    <input type="text" placeholder="password"
                        value={this.state.password}
                        onChange={this.onPasswordChange} />
                    <br />

                    <input type="text" placeholder="cpassword"
                        value={this.state.cpassword}
                        onChange={this.onCpasswordChange} />
                    <br />

                    <button>Add User</button>
                </form>
            </div>
        );
    }
}