import * as React from 'react';
import Contact from '../model/model'
import contactService from '../service/contactservice';
import { Link } from "react-router-dom";
import '../styles.css';

interface IState {
  contacts: Array<Contact>,
}

interface IProps {
  
}
export default class AllContacts extends React.Component<IProps, IState>{
  protected contactService = new contactService();
  constructor(props: IProps) {
    super(props)         
    this.state = {
      contacts: [],       
    }
    this.allContacts = this.allContacts.bind(this)
  }

  componentWillMount(){
    this.allContacts();
  } 
 
  allContacts():Array<Contact>{    
    this.setState({
     contacts:this.contactService._getAllContacts() ,        
      })       
      return this.state.contacts; 
  }    
  
  render() {       
    return (               
        <div className="display-container">   
            <h2>CONTACTS</h2>        
                  {this.state.contacts.map(contact =>
                <div className="individual-container"  key={contact.id}  >
                  <Link to={`/home/contact/${contact.id}`} >          
                  <h1>{contact.name}</h1>  
                  <p>{contact.email}</p>                    
                  <p>{contact.mobile}</p>                       
                  </Link>                                        
                </div>)}                        
          </div>                                                   
    )
  }
}