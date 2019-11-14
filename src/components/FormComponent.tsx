import React from 'react';
import contactService from '../service/contactservice';
import Contact from '../model/model';
import '../styles.css';

interface Iprops {
  match: {
    params: {
      id: number;
    }
  },
  history: {
    push(url:string):void;
  }
}

interface state {
  contact: Contact
}

export default class form extends React.Component<Iprops, state>{
  protected contactService = new contactService() 
  protected operation: string;
  constructor(props: Iprops) {
    super(props);
    this.myChangeHandler = this.myChangeHandler.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
    this.state = {
      contact: this.contactService._getContactById(this.props.match.params.id) == undefined
        ? new Contact({})
        : this.contactService._getContactById(this.props.match.params.id)
    }
    this.operation = this.props.match.params.id == undefined ? "Add" : "Update"
  }

  handlesubmit(e: any) {
    if (this.operation === 'Add') {
      this.contactService.addContact(this.state.contact)
      this.setState({
        contact: this.contactService._getContactById(this.props.match.params.id)
      })
    }
    else {
      this.contactService.editContact(this.state.contact, this.props.match.params.id);
    }
    this.props.history.push('/home');
    e.preventDefault();
  }

  myChangeHandler(event: any) {
    this.setState({
      contact: {
        ...this.state.contact,
        [event.target.name]: event.target.value
      }
    })
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handlesubmit} >
          <div>
            <p>Name:</p>
            <input
              type='text'
              name='name'
              value={this.state.contact.name}
              onChange={this.myChangeHandler} />
          </div>
          <div>
            <p>Email:</p>
            <input
              type='text'
              name='email'
              value={this.state.contact.email}
              onChange={this.myChangeHandler}
            />
          </div>
          <div>
            <p>Mobile Number:</p>
            <input
              type='text'
              name='mobile'
              value={this.state.contact.mobile}
              onChange={this.myChangeHandler}
            />
          </div>
          <div>
            <p>Location:</p>
            <input
              type='text'
              name='location'
              value={this.state.contact.location}
              onChange={this.myChangeHandler}
            />
          </div>
          <div className="submit-button">
            <input
              type='submit' value={this.operation}
            />
          </div>
        </form>
      </div>
    );
  }
}
