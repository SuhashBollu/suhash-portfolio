import React, { Component } from 'react';
import './Contact.css';
import Validator from 'validator';
import Modal from './UI/Modal/Modal';
import Auxi from '../hoc/Auxi';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonStyle: {
                display: 'flex',
                position: 'relative',
                backgroundColor: 'black',
                color: 'white',
                width: '100px',
                right: '0px',
                bottom: '0px'
            },
            name: '',
            email: '',
            message: '',
            nameError: '',
            emailError: '',
            messageError: '',
            showModal: false
        }
    }




    handleSubmit = (event) => {

        const isValid = this.validate();
        if (isValid) {
            console.log("here");
            event.preventDefault();
            const { name, email, message } = this.refs
            let url = "https://script.google.com/macros/s/AKfycbwO0-m15V--K96I4wTVul02uc8z_2RTykWoyBeBKlrnEU68R9-F/exec"
            console.log(name.value, email.value, message.value)
            const formData = new FormData();
            formData.append("name", name.value);
            formData.append("email", email.value);
            formData.append("message", message.value);
            const req = new XMLHttpRequest();
            req.open('POST', url);
            req.send(formData);
            this.setState({ showModal: true });
        } else {
            event.preventDefault();
        }


    }

    validate = () => {

        if (Validator.isEmpty(this.refs.name.value)) {
            // alert("Name cannot be empty!!");
            this.setState({ nameError: "Name Required!!" });
            return false;
        } else if (Validator.isEmpty(this.refs.email.value)) {
            this.setState({ emailError: "Email Required!!" });
            return false;
        } else if (!Validator.isEmail(this.refs.email.value)) {
            this.setState({ emailError: "Invalid Email!!" });
            return false;
        } else if (Validator.isEmpty(this.refs.message.value)) {
            this.setState({ messageError: "Message Required!!" });
            return false;
        } else {
            this.setState({ nameError: "" });
            this.setState({ emailError: "" });
            this.setState({ messageError: "" });
            return true;
        }


    }

    validateMessage = () => {
        if (Validator.isEmpty(this.refs.message.value)) {
            this.setState({ messageError: "Message Required!!" });
            return false;
        } else {
            this.setState({ messageError: "" });
            return true;
        }
    }

    validateName = () => {
        if (Validator.isEmpty(this.refs.name.value)) {
            // alert("Name cannot be empty!!");
            this.setState({ nameError: "Name Required!!" });
            return false;
        } else {
            this.setState({ nameError: "" });
            return true;
        }
    }

    validateEmail = () => {
        if (Validator.isEmpty(this.refs.email.value)) {
            this.setState({ emailError: "Email Required!!" });
            return false;
        } else if (!Validator.isEmail(this.refs.email.value)) {
            this.setState({ emailError: "Invalid Email!!" });
            return false;
        } else {
            this.setState({ emailError: "" });
            return true;
        }
    }

    render() {
        return (
            <Auxi>
                <Modal show={this.state.showModal}>
                    <h2>Your message is succesfully sent. Thanks for contacting me..</h2>
                    <button onClick={() => this.setState({ showModal: false })}>OK</button>
                </Modal>
                <div className="Contact">
                    <strong><h1>Thanks for taking the time to reach out.</h1></strong>
                    <form ref='contact_form' target="transFrame" method='post' style={{ width: '100%' }} action='https://script.google.com/macros/s/AKfycbwO0-m15V--K96I4wTVul02uc8z_2RTykWoyBeBKlrnEU68R9-F/exec'>

                        <div style={{display:'flex'}}>
                            <div style={{padding:'5px', width:'50%'}}>
                                <div style={{ width: '100%', display: 'flex', flexFlow: 'row', justifyContent: 'space-between' }}><p>Name</p>
                                {this.state.nameError !== "" ? <p className="Pra">{this.state.nameError}</p> : null}</div>
                                <input onChange={this.validateName} ref="name" type="text" name="name" placeholder="Your Name" />
                            </div>

                            <div style={{padding:'5px', width:'50%'}}>
                                <div style={{ width: '100%', display: 'flex', flexFlow: 'row', justifyContent: 'space-between' }}><p>Email</p>
                                {this.state.emailError !== "" ? <p className="Pra">{this.state.emailError}</p> : null}</div>
                                <input onChange={this.validateEmail} ref="email" type="email" name="email" placeholder="Your Email" />
                            </div>
                        </div>
                        
                        <div>
                            <div style={{ width: '100%', display: 'flex', flexFlow: 'row', justifyContent: 'space-between' }}><p>Message</p>
                                {this.state.messageError !== "" ? <p className="Pra">{this.state.messageError}</p> : null}</div>

                            <textarea onChange={this.validateMessage} ref="message" name="message" rows="4" placeholder="Your Message" />
                        </div>
                        <div className="btn">
                            <button onClick={(event) => this.handleSubmit(event)} type="submit" value="submit">SEND</button>
                        </div>
                    </form>
                </div>
            </Auxi>
        );
    }
}


export default Contact;