import { ALERT_MESSAGE, NODES, UPDATE_QUERIES } from "./constants";
import { createBtnElelment, createRowTable } from "./controllers";
import { Contact } from "./models";

export class ContactManager {
    // currentlyEditingIndex;
    constructor() {
        //TODO Complete ..
      this.currentlyEditingIndex = null;
    }
  
    addContact(name, email, phone)   
      // use Contact;
      // use displayContacts();
    
  
    updateContact(index, name, email, phone) 
        
            // use displayContacts();
  
    deleteContact = (index) => {
        //displayContacts();
        
    }
    
  
    displayContacts(filteredContacts = null) 
        // const  contactList 
        // innerHTML to null ... 
        // const contactsToDisplay = 
        // use createRowTable , createBtn
        // const actionCell
        /*
       TODO Complete  ...
        */ 
  
      
    
  
    openUpdateModal = (index) => {
        /*
      TODO  Complete ...
        
         NODES.UPDATE_MODEL
        // class show to display ..
         document.body.classList.add("modal-open");
      */
        }
      closeUpdateModal() 
        
      
      updateContactFromModal() {
        try {
            // TODO Complete
                // throw  new Error(ALERT_MESSAGE);            
                     
            // use updateContact(
                
                 // use closeUpdateModal();
            }catch(e) {
                alert(e)
            }
      }
  }