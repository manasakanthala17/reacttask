import Contact from '../model/model'

interface IEmployee{
    _getAllContacts:()=>Array<Contact>;
    _getContactById(id:number):Contact;
    addContact(contact:Contact):Contact;
    deleteContact(id:number):Contact;
    editContact(updatedContact:Contact,id:number):Contact;
    generateId():Contact['id']
  }
 export let contacts:Contact[] =[
    new Contact({
    id:1,
    name:"Manasa",
    email:"manasa.k@technovert.com",
    mobile:"9959544162",
    location:"Hyderabad"
    }),     
    new Contact({
      id:2,
      name:"Pranu",
      email:"pranu.k@technovert.com",
      mobile:"8596452785",
      location:"Secundrabad"
    }),
    new Contact({
      id:3,
      name:"Soumya",
      email:"soumya.k@technovert.com",
      mobile:"7396458102",
      location:"Secundrabad"
    })
  ]; 
  
  export default class contactService implements IEmployee{  
    
    _getAllContacts():Array<Contact>{
      return (contacts);
    }       
    
    _getContactById(id:number):Contact{
    var contact= contacts.find(c=> c.id==id) as Contact;   
    return contact
    }

    addContact(contact:Contact):Contact{
      contact.id=this.generateId();
      contacts.push(contact);       
      return contact        
     }

     deleteContact(id:number):Contact{    
      var contact=this._getContactById(id)
      contacts.splice(contacts.indexOf(contact),1);                
      console.log(contacts);
      return contact;
     }

     editContact(updatedContact:Contact,id:number):Contact{
      var contact=this._getContactById(id);  
      var index= contacts.indexOf(contact);
      contacts[index]=updatedContact
      return updatedContact; 
      }
      
      generateId():Contact['id']{
        var id= contacts.length== 0 ? 1 : contacts[contacts.length-1].id + 1;        
        return id;
      }
}

        
      
      

        
      
    
