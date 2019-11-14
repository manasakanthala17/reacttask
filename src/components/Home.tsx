import React from 'react';
import contactService from '../service/contactservice';
import {  Link } from "react-router-dom";
import '../styles.css';

interface IState {
   
}
interface IProps {
  
}
export default class Home extends React.Component<IProps, IState>{
  contactService = new contactService();
  constructor(props: any) {
    super(props)                
  }  
  
  render() {       
    return (                  
        <div>
          <Link to="/"> </Link> 
          <div className="header"><h1>ADDRESS BOOK</h1></div>
          <nav className="nav-bar">
            <ul>
              <li><Link to={"/home"}>Home</Link></li>                      
              <li>
                <Link to={"/home/form"}>+Add</Link></li>                                      
            </ul>
          </nav>                                                             
        </div>         
    )
  }
}