import React from 'react';
import Contact from '../model/model';
import contactService from '../service/contactservice';
import {Link } from "react-router-dom";
import { RouteProps } from 'react-router';
import '../styles.css';

interface IProps {
    match: {
        params: {
            id: number;
        }
    },
    history: {
        push(url:string):void;
    }
}
interface IState {
    selectedContact: Contact
}
export default class detailsOfEmployee extends React.Component<IProps & RouteProps, IState>{
    protected contactservice = new contactService(); 
    constructor(props: any) {
        super(props);    
        this.DeleteContact=this.DeleteContact.bind(this);   
        this.state = {
            selectedContact: this.contactservice._getContactById(this.props.match.params.id)
        }
    }

    DeleteContact(id: Contact['id']) {
        this.contactservice.deleteContact(id);  
        this.props.history.push('/home');    
    }

    componentWillReceiveProps(nextProps: any) {
        if (this.props !== nextProps) {
            const item = this.contactservice._getContactById(nextProps.match.params.id)
            this.setState({
                selectedContact: item,
            })
        }       
    }

    render() {
        return (
            <div className="individual-contact">
                <div>
                    <h1>{this.state.selectedContact.name}</h1>
                    <p>Email : {this.state.selectedContact.email}</p>
                    <p>Mobile : {this.state.selectedContact.mobile}</p>
                    <p>Location : {this.state.selectedContact.location}</p>
                </div>
                <div className="editing-container">
                    <li><Link to={`/home/edit/${this.state.selectedContact.id}`}>Edit</Link></li>

                    <button onClick={(e) => this.DeleteContact(this.props.match.params.id)}>Delete</button>
                    
                </div>
            </div>
        )
    }
}



