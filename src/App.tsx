import * as React from "react";
import  Home  from "./components/Home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DetailsOfEmployee from './components/DetailsOfEmployee';
import FormComponent from './components/FormComponent';
import AllContacts from './components/AllContacts';

export default class App extends React.Component{
	render(){
		return (   					 			
			<Router>
			<Route path="/" component={Home}/>
			<Route path="/home" component={AllContacts}></Route> 	
			<Route path="/home/contact/:id" component={DetailsOfEmployee}/>  			
        	<Route path="/home/form" component={FormComponent}/>	
			<Route path="/home/edit/:id" component={FormComponent}/>						        			
			</Router>
		)
	}
}